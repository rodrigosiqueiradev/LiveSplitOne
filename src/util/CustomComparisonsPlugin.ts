/**
 * The Custom Comparisons plugin: the WebAssembly module that calculates the
 * runner's custom comparisons. It's built together with livesplit-core and
 * fetched once when LiveSplit One starts, so creating a plugin for new
 * settings later on is synchronous.
 */

import pluginUrl from "../livesplit-core/custom_comparisons_plugin.wasm?url";
import { ComparisonPlugin } from "../livesplit-core";

/** The id of the Custom Comparisons plugin. */
export const CUSTOM_COMPARISONS_PLUGIN_ID = "livesplit.custom-comparisons";

/** The settings of an empty list of custom comparisons. */
export const NO_CUSTOM_COMPARISONS = '{"comparisons":[]}';

/**
 * Takes the custom comparisons out of the settings of a layout, as LiveSplit
 * One kept them in a Custom Comparisons component before it kept them itself.
 * That component no longer exists, so a layout that still has one couldn't
 * be loaded. Returns the layout without the component, and the comparisons
 * it held as settings of the plugin, or `undefined` if it had none.
 */
export function takeCustomComparisonsOutOfLayout(layout: unknown): {
    layout: unknown;
    customComparisons?: string;
} {
    const comparisons: unknown[] = [];
    const take = (components: unknown): unknown =>
        Array.isArray(components)
            ? components.filter((component) => {
                  if (typeof component !== "object" || component === null) {
                      return true;
                  }
                  const entry = component as Record<string, unknown>;
                  const custom = entry["CustomComparisons"] as
                      | { comparisons?: unknown }
                      | undefined;
                  if (custom !== undefined) {
                      if (Array.isArray(custom?.comparisons)) {
                          comparisons.push(...custom.comparisons);
                      }
                      return false;
                  }
                  for (const kind of ["Group", "Carousel"]) {
                      const container = entry[kind] as
                          | { components?: unknown }
                          | undefined;
                      if (container?.components !== undefined) {
                          container.components = take(container.components);
                      }
                  }
                  return true;
              })
            : components;

    if (typeof layout !== "object" || layout === null) {
        return { layout };
    }
    const copy = structuredClone(layout) as { components?: unknown };
    copy.components = take(copy.components);
    if (comparisons.length === 0) {
        return { layout: copy };
    }
    return {
        layout: copy,
        customComparisons: JSON.stringify({ comparisons }),
    };
}

let module: Uint8Array | null = null;
let moduleError = "";
try {
    const response = await fetch(pluginUrl);
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }
    module = new Uint8Array(await response.arrayBuffer());
} catch (e) {
    // LiveSplit One still works without its custom comparisons.
    moduleError = String(e);
}

/**
 * Loads the plugin with the runner's custom comparisons. Returns the reason
 * if it can't be loaded.
 */
export function loadCustomComparisonsPlugin(
    settings: string,
): ComparisonPlugin | string {
    if (module === null) {
        return moduleError;
    }
    const plugin = ComparisonPlugin.fromArray(
        CUSTOM_COMPARISONS_PLUGIN_ID,
        settings,
        module,
    );
    return plugin ?? ComparisonPlugin.loadError();
}

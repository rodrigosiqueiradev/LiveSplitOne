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

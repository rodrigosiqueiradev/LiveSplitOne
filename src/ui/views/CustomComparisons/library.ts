/**
 * Access to the runner's custom comparisons: one list for all their splits,
 * kept by LiveSplit One as the settings of the Custom Comparisons plugin.
 *
 * livesplit-core's Custom Comparisons Editor holds the rules for the list of
 * comparisons (unique names, renames that update the comparisons using the
 * renamed one, unreadable comparisons kept as they are, ...). It's created
 * from the settings and turns back into settings when it's closed.
 *
 * Instead of keeping one open while the list is shown, every action opens a
 * new one, applies the change and closes it right away, which hands the new
 * settings to `onChange`. That keeps the settings the only place the
 * comparisons live in, and no wasm object can be leaked by React unmounting
 * the list at the wrong time. Opening one is cheap: it only reads the
 * comparisons. If an action fails, the editor is dropped instead of closed,
 * so a failed action never changes anything, even if it consists of several
 * steps.
 */

import {
    CustomComparisonsEditor,
    type CustomComparisonsEditorRefMut,
    type CustomComparisonsEditorStateJson,
    type CustomComparisonPreviewJson,
    type RunRef,
    type TimingMethod,
} from "../../../livesplit-core";

export class ComparisonLibrary {
    constructor(
        private settings: string,
        private run: RunRef,
        private onChange: (settings: string) => void,
    ) {}

    /** The comparisons, as the settings of the Custom Comparisons plugin. */
    public getSettings(): string {
        return this.settings;
    }

    /** Reads from the comparisons. */
    public read<T>(f: (editor: CustomComparisonsEditorRefMut) => T): T {
        using editor = this.open();
        return f(editor);
    }

    /**
     * Changes the comparisons. The change returns an error message for the
     * runner, or an empty string if it worked, like livesplit-core's
     * functions do. Only a change that worked is kept.
     */
    public write(f: (editor: CustomComparisonsEditorRefMut) => string): string {
        using editor = this.open();
        const error = f(editor);
        if (error === "") {
            // Turning it into settings disposes the editor, so the `using`
            // above has nothing left to dispose.
            this.settings = editor.intoSettings();
            this.onChange(this.settings);
        }
        return error;
    }

    private open(): CustomComparisonsEditor {
        const editor = CustomComparisonsEditor.fromSettings(
            this.settings,
            this.run,
        );
        if (editor === null) {
            // The settings are only ever written by livesplit-core, so this
            // means they were damaged. Starting over beats being stuck.
            this.settings = '{"comparisons":[]}';
            return CustomComparisonsEditor.fromSettings(
                this.settings,
                this.run,
            )!;
        }
        return editor;
    }

    public state(): CustomComparisonsEditorStateJson {
        return this.read(
            (e) => e.stateAsJson(this.run) as CustomComparisonsEditorStateJson,
        );
    }

    /**
     * Calculates the preview of a comparison being edited. `index` is the
     * comparison it replaces, or null for a new comparison.
     */
    public preview(
        text: string,
        index: number | null,
        method: TimingMethod,
    ): CustomComparisonPreviewJson {
        return this.read(
            (e) =>
                e.previewAsJson(
                    text,
                    index ?? e.len(),
                    this.run,
                    method,
                ) as CustomComparisonPreviewJson,
        );
    }
}

/**
 * Access to the custom comparisons stored in the Custom Comparisons component
 * that is selected in the Layout Editor.
 *
 * livesplit-core's Custom Comparisons Editor holds the rules for the list of
 * comparisons (unique names, renames that update the comparisons using the
 * renamed one, unreadable comparisons kept as they are, ...). It's created
 * from the selected component and stores the comparisons back into it when
 * it's closed.
 *
 * Instead of keeping one open while the list is shown, every action opens a
 * new one, applies the change and closes it right away, which stores the
 * result in the component. That keeps the component the only place the
 * comparisons live in, so nothing is lost when the runner selects another
 * component or closes the Layout Editor, and no wasm object can be leaked by
 * React unmounting the list at the wrong time. Opening one is cheap: it only
 * reads the few comparisons of the component. If an action fails, the
 * editor is dropped instead of closed, so a failed action never changes
 * anything, even if it consists of several steps.
 */

import {
    CustomComparisonsEditor,
    type CustomComparisonsEditorRefMut,
    type CustomComparisonsEditorStateJson,
    type CustomComparisonPreviewJson,
    type LayoutEditorRefMut,
    type RunRef,
    type TimingMethod,
} from "../../../livesplit-core";

export class ComparisonLibrary {
    constructor(
        private layoutEditor: LayoutEditorRefMut,
        private run: RunRef,
    ) {}

    /**
     * Whether the selected component is a Custom Comparisons component. The
     * Layout Editor's state doesn't say which kind of component is selected,
     * but livesplit-core only opens the editor for this one.
     */
    public isSelected(): boolean {
        return this.read(() => true) ?? false;
    }

    /**
     * Reads from the comparisons. Returns null if the selected component
     * isn't a Custom Comparisons component.
     */
    public read<T>(f: (editor: CustomComparisonsEditorRefMut) => T): T | null {
        using editor = CustomComparisonsEditor.new(this.layoutEditor, this.run);
        if (editor === null) {
            return null;
        }
        return f(editor);
    }

    /**
     * Changes the comparisons. The change returns an error message for the
     * runner, or an empty string if it worked, like livesplit-core's
     * functions do. Only a change that worked is stored.
     */
    public write(f: (editor: CustomComparisonsEditorRefMut) => string): string {
        using editor = CustomComparisonsEditor.new(this.layoutEditor, this.run);
        if (editor === null) {
            return "";
        }
        const error = f(editor);
        if (error === "") {
            // Closing stores the comparisons and disposes the editor, so the
            // `using` above has nothing left to dispose.
            editor.close(this.layoutEditor);
        }
        return error;
    }

    public state(): CustomComparisonsEditorStateJson {
        return (
            this.read(
                (e) =>
                    e.stateAsJson(this.run) as CustomComparisonsEditorStateJson,
            ) ?? { comparisons: [] }
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
    ): CustomComparisonPreviewJson | null {
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

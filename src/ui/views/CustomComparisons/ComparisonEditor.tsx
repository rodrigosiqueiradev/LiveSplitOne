/**
 * The editor for one custom comparison: its name, a plain-English summary of
 * what it does, its blocks and a preview, like the desktop block editor.
 *
 * The comparison is only stored when the runner clicks Save, and then the
 * same way the desktop stores it: a new comparison is added, and a renamed
 * comparison is renamed first, which updates the other comparisons that use
 * it, before its blocks are replaced. Both happen in one step, so either
 * both are stored or, if livesplit-core refuses the comparison, neither is.
 */

import React, { useMemo, useState } from "react";
import {
    type Language,
    type RunRef,
    type TimingMethod,
} from "../../../livesplit-core";
import { Label, resolve } from "../../../localization";
import {
    CcLabel,
    formatCc,
    resolveCc,
} from "../../../localization/custom-comparisons";
import {
    type Block,
    type Path,
    type Slot,
    findBackwardsRange,
    findEmptySlot,
    getAt,
    sameTree,
    setAt,
    writeComparison,
} from "./model";
import { summarize } from "./describe";
import { BlockTree } from "./BlockTree";
import { Preview, readRun } from "./Preview";
import { type ComparisonLibrary } from "./library";
import { showDialog } from "../../components/Dialog";
import { Check, Redo2, Undo2, X } from "lucide-react";

import classes from "../../../css/CustomComparisons.module.css";

export interface EditedComparison {
    /** The comparison's position in the list, or null for a new one. */
    index: number | null;
    name: string;
    root: Slot;
    /** The desktop block editor's layout of the blocks, if there was one. */
    workspace?: unknown;
}

export interface Props {
    comparison: EditedComparison;
    library: ComparisonLibrary;
    run: RunRef;
    /** The comparisons a comparison block can use. */
    comparisons: string[];
    /** The comparisons the preview can show the difference from. */
    allComparisons: string[];
    initialMethod: TimingMethod;
    lang: Language | undefined;
    onClose: () => void;
}

/** The versions of the blocks, for undo and redo. */
interface History {
    versions: Slot[];
    current: number;
}

export function ComparisonEditor({
    comparison,
    library,
    run,
    comparisons,
    allComparisons,
    initialMethod,
    lang,
    onClose,
}: Props) {
    const [name, setName] = useState(comparison.name);
    const [history, setHistory] = useState<History>({
        versions: [comparison.root],
        current: 0,
    });
    const [previewPath, setPreviewPath] = useState<Path | null>(null);
    const [method, setMethod] = useState(initialMethod);
    const [compareTo, setCompareTo] = useState(
        allComparisons.includes("Personal Best")
            ? "Personal Best"
            : (allComparisons[0] ?? ""),
    );
    const [saveError, setSaveError] = useState<string | null>(null);

    const root = history.versions[history.current] ?? null;
    const segmentNames = useMemo(
        () => readRun(run, method, compareTo).map((s) => s.name),
        [run, method, compareTo],
    );

    const changeRoot = (path: Path, value: unknown) => {
        const next = setAt(root, path, value) as Slot;
        setHistory({
            versions: [...history.versions.slice(0, history.current + 1), next],
            current: history.current + 1,
        });
        setSaveError(null);
        // The previewed block may have just been replaced or removed.
        if (previewPath !== null && getAt(next, previewPath) == null) {
            setPreviewPath(null);
        }
    };
    const canUndo = history.current > 0;
    const canRedo = history.current < history.versions.length - 1;
    const undo = () =>
        canUndo && setHistory({ ...history, current: history.current - 1 });
    const redo = () =>
        canRedo && setHistory({ ...history, current: history.current + 1 });

    const nameProblem = useMemo(() => {
        if (name.trim() === "") {
            return null;
        }
        return (
            library.read((e) =>
                comparison.index === null
                    ? e.checkName(name)
                    : e.checkRename(comparison.index, name),
            ) || null
        );
    }, [library, comparison.index, name]);

    // Why the blocks can't be calculated yet, if they can't.
    const incomplete = (() => {
        if (root === null || findEmptySlot(root) !== null) {
            return resolveCc(CcLabel.FillEmptySlots, lang);
        }
        const backwards = findBackwardsRange(root);
        if (backwards !== null) {
            return formatCc(CcLabel.RangeBackwards, lang, ...backwards);
        }
        return null;
    })();

    const previewRoot =
        previewPath !== null ? (getAt(root, previewPath) as Block) : root;
    const preview = useMemo(() => {
        if (incomplete !== null || previewRoot === null) {
            return null;
        }
        // The preview needs a name, even while the runner hasn't typed one.
        const previewName =
            name.trim() || resolveCc(CcLabel.NewComparisonName, lang);
        return library.preview(
            writeComparison(previewName, previewRoot),
            comparison.index,
            method,
        );
    }, [
        library,
        comparison.index,
        incomplete,
        previewRoot,
        name,
        method,
        lang,
    ]);

    const isChanged =
        name.trim() !== comparison.name || !sameTree(root, comparison.root);

    const save = () => {
        if (incomplete !== null || root === null) {
            setSaveError(incomplete);
            return;
        }
        if (comparison.index !== null && !isChanged) {
            onClose();
            return;
        }
        // The desktop's layout of the blocks is only kept if the blocks are
        // the same, as it would show the old blocks otherwise. Without it,
        // the desktop lays out the blocks on its own.
        const workspace = sameTree(root, comparison.root)
            ? comparison.workspace
            : undefined;
        const text = writeComparison(name, root, workspace);
        const index = comparison.index;
        const error = library.write((e) => {
            if (index === null) {
                return e.add(text);
            }
            if (name.trim() !== comparison.name) {
                const renameError = e.rename(index, name);
                if (renameError !== "") {
                    return renameError;
                }
            }
            return e.replace(index, text);
        });
        if (error !== "") {
            setSaveError(error);
        } else {
            onClose();
        }
    };

    const cancel = async () => {
        if (isChanged) {
            const [choice] = await showDialog({
                title: resolveCc(CcLabel.DiscardChangesTitle, lang),
                description: resolveCc(CcLabel.DiscardChangesDescription, lang),
                buttons: [
                    resolveCc(CcLabel.Discard, lang),
                    resolveCc(CcLabel.KeepEditing, lang),
                ],
            });
            if (choice !== 0) {
                return;
            }
        }
        onClose();
    };

    const summary =
        root !== null && findEmptySlot(root) === null
            ? summarize(root, { lang, segmentNames })
            : null;

    return (
        <div
            className={classes.editor}
            onKeyDown={(e) => {
                // Undo and redo like on the desktop, but not while typing in
                // a text field, which has its own undo.
                const target = e.target as HTMLElement;
                if (
                    !(e.ctrlKey || e.metaKey) ||
                    (target.tagName === "INPUT" &&
                        (target as HTMLInputElement).type === "text")
                ) {
                    return;
                }
                const key = e.key.toLowerCase();
                if (key === "z" && !e.shiftKey) {
                    e.preventDefault();
                    undo();
                } else if (key === "y" || (key === "z" && e.shiftKey)) {
                    e.preventDefault();
                    redo();
                } else if (key === "s") {
                    e.preventDefault();
                    save();
                }
            }}
        >
            <div className={classes.editorToolbar}>
                <button onClick={save} disabled={incomplete !== null}>
                    <Check strokeWidth={2.5} />
                    {resolveCc(CcLabel.Save, lang)}
                </button>
                <button onClick={cancel}>
                    <X strokeWidth={2.5} />
                    {resolve(Label.Cancel, lang)}
                </button>
                <button
                    onClick={undo}
                    disabled={!canUndo}
                    aria-label={resolveCc(CcLabel.Undo, lang)}
                    title={resolveCc(CcLabel.Undo, lang)}
                >
                    <Undo2 strokeWidth={2.5} />
                </button>
                <button
                    onClick={redo}
                    disabled={!canRedo}
                    aria-label={resolveCc(CcLabel.Redo, lang)}
                    title={resolveCc(CcLabel.Redo, lang)}
                >
                    <Redo2 strokeWidth={2.5} />
                </button>
            </div>
            {saveError !== null && (
                <p className={classes.problems}>{saveError}</p>
            )}
            <div className={classes.editorColumns}>
                <div className={classes.editorMain}>
                    <label className={classes.nameField}>
                        <span>{resolveCc(CcLabel.Name, lang)}</span>
                        <input
                            type="text"
                            value={name}
                            maxLength={64}
                            className={
                                nameProblem !== null ? classes.invalid : ""
                            }
                            onChange={(e) => {
                                setName(e.target.value);
                                setSaveError(null);
                            }}
                        />
                    </label>
                    {nameProblem !== null && (
                        <p className={classes.fieldProblem}>{nameProblem}</p>
                    )}
                    {summary !== null && (
                        <p className={classes.summary}>{summary}</p>
                    )}
                    <BlockTree
                        root={root}
                        ctx={{
                            lang,
                            segmentNames,
                            comparisons,
                            onChange: changeRoot,
                            onPreview: setPreviewPath,
                            previewPath,
                        }}
                    />
                </div>
                <Preview
                    preview={preview}
                    root={previewRoot}
                    isBlockPreview={previewPath !== null}
                    onShowWhole={() => setPreviewPath(null)}
                    incomplete={incomplete}
                    method={method}
                    onMethodChange={setMethod}
                    compareTo={compareTo}
                    onCompareToChange={setCompareTo}
                    comparisons={allComparisons}
                    run={run}
                    lang={lang}
                />
            </div>
        </div>
    );
}

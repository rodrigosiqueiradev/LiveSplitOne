/**
 * The editor for one custom comparison: its name, a plain-English summary of
 * what it does, its blocks and a preview.
 *
 * The comparison is only stored when the runner clicks Save: a new comparison is added, and a renamed
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
import { Label, resolve, resolveFormat } from "../../../localization";
import {
    type Block,
    type Path,
    type Slot,
    createBlock,
    findBackwardsRange,
    findEmptySlot,
    findEmptySlotFor,
    getAt,
    originPath,
    replaceBlock,
    sameTree,
    setAt,
    writeComparison,
} from "./model";
import { summarize } from "./describe";
import { BlockTree, type Dragged } from "./BlockTree";
import { BlockRail } from "./BlockRail";
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
    const [origin, setOrigin] = useState<string | null>(null);
    const [dragged, setDraggedState] = useState<Dragged | null>(null);
    const [dropPath, setDropPath] = useState<Path | null>(null);
    const setDragged = (next: Dragged | null) => {
        setDraggedState(next);
        setDropPath(null);
    };

    const root = history.versions[history.current] ?? null;
    const segmentNames = useMemo(
        () => readRun(run, method, compareTo).map((s) => s.name),
        [run, method, compareTo],
    );
    const segmentCount = segmentNames.length;

    const changeRoot = (path: Path, value: unknown) =>
        commit(setAt(root, path, value) as Slot);

    /** Stores a new version of the blocks, as one step to undo. */
    const commit = (next: Slot) => {
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
    /**
     * Drops the dragged block into a slot. A new block replaces the block in
     * the slot, keeping what's inside it where it fits, like picking
     * "Replace" in the block's menu. A block that's moved swaps places with
     * the block in the slot, so nothing is lost by dropping it in the wrong
     * place, and it's undone in one step either way.
     */
    const drop = (to: Path) => {
        if (dragged === null) {
            return;
        }
        const target = (getAt(root, to) as Slot | undefined) ?? null;
        if (dragged.from === null) {
            changeRoot(
                to,
                target !== null
                    ? replaceBlock(target, dragged.block.type, segmentCount)
                    : dragged.block,
            );
        } else {
            const removed = setAt(root, dragged.from, target);
            commit(setAt(removed, to, dragged.block) as Slot);
        }
        setDragged(null);
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
            return resolve(Label.CustomComparisonsFillEmptySlots, lang);
        }
        const backwards = findBackwardsRange(root);
        if (backwards !== null) {
            return resolveFormat(
                Label.CustomComparisonsRangeBackwards,
                lang,
                ...backwards,
            );
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
            name.trim() ||
            resolve(Label.CustomComparisonsNewComparisonName, lang);
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

    // Origins are relative to the previewed block.
    const highlightPath = useMemo(() => {
        if (origin === null || previewRoot === null) {
            return null;
        }
        const path = originPath(previewRoot, origin);
        return path !== null ? [...(previewPath ?? []), ...path] : null;
    }, [origin, previewRoot, previewPath]);

    // Why Save can't be clicked, shown next to it rather than only after
    // clicking it, so the runner doesn't have to guess.
    const cantSave =
        incomplete ??
        (name.trim() === ""
            ? resolve(Label.CustomComparisonsNameRequired, lang)
            : nameProblem);

    const isChanged =
        name.trim() !== comparison.name || !sameTree(root, comparison.root);

    const save = () => {
        if (cantSave !== null || root === null) {
            return;
        }
        if (comparison.index !== null && !isChanged) {
            onClose();
            return;
        }
        const text = writeComparison(name, root);
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
                title: resolve(Label.DiscardChangesTitle, lang),
                description: resolve(
                    Label.CustomComparisonsDiscardChangesDescription,
                    lang,
                ),
                buttons: [
                    resolve(Label.CustomComparisonsDiscard, lang),
                    resolve(Label.CustomComparisonsKeepEditing, lang),
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
                // Undo and redo, but not while typing in
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
                <button
                    onClick={save}
                    disabled={cantSave !== null}
                    title={cantSave ?? undefined}
                >
                    <Check strokeWidth={2.5} />
                    {resolve(Label.Save, lang)}
                </button>
                <button onClick={cancel}>
                    <X strokeWidth={2.5} />
                    {resolve(Label.Cancel, lang)}
                </button>
                <button
                    onClick={undo}
                    disabled={!canUndo}
                    aria-label={resolve(Label.CustomComparisonsUndo, lang)}
                    title={resolve(Label.CustomComparisonsUndo, lang)}
                >
                    <Undo2 strokeWidth={2.5} />
                </button>
                <button
                    onClick={redo}
                    disabled={!canRedo}
                    aria-label={resolve(Label.CustomComparisonsRedo, lang)}
                    title={resolve(Label.CustomComparisonsRedo, lang)}
                >
                    <Redo2 strokeWidth={2.5} />
                </button>
                {cantSave !== null && (
                    <span className={classes.cantSave}>{cantSave}</span>
                )}
            </div>
            {saveError !== null && (
                <p className={classes.problems}>{saveError}</p>
            )}
            <div className={classes.editorColumns}>
                <BlockRail
                    lang={lang}
                    onDragStart={(spec) =>
                        setDragged({
                            block: createBlock(spec.type, segmentCount),
                            from: null,
                        })
                    }
                    onDragEnd={() => setDragged(null)}
                    canAdd={(spec) =>
                        findEmptySlotFor(root, spec.kind) !== null
                    }
                    onAdd={(spec) => {
                        const path = findEmptySlotFor(root, spec.kind);
                        if (path !== null) {
                            changeRoot(
                                path,
                                createBlock(spec.type, segmentCount),
                            );
                        }
                    }}
                />
                <div className={classes.editorMain}>
                    <label className={classes.nameField}>
                        <span>
                            {resolve(Label.CustomComparisonsName, lang)}
                        </span>
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
                            highlightPath,
                            dragged,
                            onDrag: setDragged,
                            onDrop: drop,
                            dropPath,
                            onDropPathChange: setDropPath,
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
                    onOriginChange={setOrigin}
                />
            </div>
        </div>
    );
}

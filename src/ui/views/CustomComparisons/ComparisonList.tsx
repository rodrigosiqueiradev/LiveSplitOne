/**
 * The runner's list of custom comparisons, one list for all their splits.
 * It offers new, edit, rename, duplicate, remove, move up and down (which is the order they
 * are offered in), import and export as files, and copy and paste as text
 * for sharing in a chat.
 */

import React, { useState } from "react";
import {
    CustomComparisonsEditor,
    type Language,
    type RunRef,
    type TimingMethod,
} from "../../../livesplit-core";
import { Label, resolve, resolveFormat } from "../../../localization";
import { showDialog } from "../../components/Dialog";
import {
    ContextMenu,
    MenuItem,
    type Position,
} from "../../components/ContextMenu";
import { exportFile, openFileAsString } from "../../../util/FileUtil";
import { type ComparisonLibrary } from "./library";
import { type EditedComparison } from "./ComparisonEditor";
import { TEMPLATES, defaultGoal } from "./templates";
import { readRun } from "./Preview";
import { readComparison } from "./model";
import {
    ArrowDown,
    ArrowUp,
    ClipboardCopy,
    ClipboardPaste,
    Copy,
    Download,
    EllipsisVertical,
    Pencil,
    Plus,
    TextCursorInput,
    Trash,
    Upload,
} from "lucide-react";
import { toast } from "react-toastify";

import classes from "../../../css/CustomComparisons.module.css";
import tableClasses from "../../../css/Table.module.css";

export function ComparisonList({
    library,
    run,
    method,
    lang,
    onEdit,
}: {
    library: ComparisonLibrary;
    run: RunRef;
    method: TimingMethod;
    lang: Language | undefined;
    onEdit: (comparison: EditedComparison) => void;
}) {
    const [selected, setSelected] = useState(0);
    const [choosingTemplate, setChoosingTemplate] = useState(false);
    const [menu, setMenu] = useState<{
        index: number;
        position: Position;
    } | null>(null);
    // The comparisons live in the library, not in React's state, so the list
    // is told to read them again after every change.
    const [, setVersion] = useState(0);
    const refresh = () => setVersion((v) => v + 1);

    const state = library.state();
    const comparisons = state.comparisons;
    const current =
        comparisons.length > 0
            ? Math.min(selected, comparisons.length - 1)
            : null;

    const showError = async (message: string) => {
        await showDialog({
            title: resolve(Label.CustomComparisonsErrorTitle, lang),
            description: message,
            buttons: [resolve(Label.Ok, lang)],
        });
    };

    /**
     * Adds a comparison from its text. If its name is taken, the runner is
     * asked for another one until it works or they give up.
     */
    const addText = async (text: string): Promise<boolean> => {
        let name: string | null = null;
        try {
            const json = JSON.parse(text);
            name = typeof json?.name === "string" ? json.name : null;
        } catch {
            // livesplit-core explains what's wrong with it below.
        }
        let problem =
            name !== null ? library.read((e) => e.checkName(name)) || "" : "";
        if (problem === "") {
            const error = library.write((e) => e.add(text));
            if (error !== "") {
                await showError(error);
                return false;
            }
        } else {
            let newName = library.read((e) => e.suggestName(name ?? "")) ?? "";
            while (problem !== "") {
                const [choice, input] = await showDialog({
                    title: resolve(Label.CustomComparisonsNameTakenTitle, lang),
                    description: resolveFormat(
                        Label.CustomComparisonsNameTakenDescription,
                        lang,
                        problem,
                    ),
                    textInput: true,
                    defaultText: newName,
                    buttons: [
                        resolve(Label.Ok, lang),
                        resolve(Label.Cancel, lang),
                    ],
                });
                if (choice !== 0) {
                    return false;
                }
                newName = input;
                problem = library.write((e) => e.addAs(text, input));
            }
        }
        setSelected(library.read((e) => e.len() - 1));
        refresh();
        return true;
    };

    const newComparison = (templateIndex: number) => {
        const template = TEMPLATES[templateIndex];
        if (template === undefined) {
            return;
        }
        const segments = readRun(run, method, "Personal Best");
        const personalBest = segments.at(-1)?.comparisonSplit ?? null;
        const sumOfBest = segments.every((s) => s.gold !== null)
            ? segments.reduce((sum, s) => sum + (s.gold ?? 0), 0)
            : null;
        const root = template.build(defaultGoal(personalBest, sumOfBest));
        const baseName =
            root === null
                ? resolve(Label.CustomComparisonsNewComparisonName, lang)
                : capitalizeWords(resolve(template.title, lang));
        onEdit({
            index: null,
            name: library.read((e) => e.suggestName(baseName)) ?? baseName,
            root,
        });
    };

    const edit = (index: number) => {
        const text = library.read((e) => e.export(index));
        if (text === null) {
            return;
        }
        const document = readComparison(text);
        onEdit({
            index,
            name: document.name,
            root: document.root,
        });
    };

    const rename = async (index: number, name: string) => {
        let input = name;
        while (true) {
            const [choice, typed] = await showDialog({
                title: resolve(Label.CustomComparisonsRenameTitle, lang),
                description: resolve(
                    Label.CustomComparisonsRenameDescription,
                    lang,
                ),
                textInput: true,
                defaultText: input,
                buttons: [resolve(Label.Ok, lang), resolve(Label.Cancel, lang)],
            });
            if (choice !== 0 || typed.trim() === name) {
                return;
            }
            input = typed;
            const error = library.write((e) => e.rename(index, typed));
            if (error === "") {
                refresh();
                return;
            }
            await showError(error);
        }
    };

    const duplicate = (index: number) => {
        const text = library.read((e) => e.export(index));
        if (text === null) {
            return;
        }
        const document = readComparison(text);
        const name =
            library.read((e) =>
                e.suggestName(
                    resolveFormat(
                        Label.CustomComparisonsCopySuffix,
                        lang,
                        document.name,
                    ),
                ),
            ) ?? document.name;
        const error = library.write((e) => e.addAs(text, name));
        if (error !== "") {
            showError(error);
            return;
        }
        setSelected(comparisons.length);
        refresh();
    };

    const remove = async (index: number) => {
        const comparison = comparisons[index];
        if (comparison === undefined) {
            return;
        }
        const [choice] = await showDialog({
            title: resolve(Label.CustomComparisonsRemoveTitle, lang),
            description:
                comparison.used_by > 0
                    ? resolveFormat(
                          comparison.used_by === 1
                              ? Label.CustomComparisonsRemoveUsedOneDescription
                              : Label.CustomComparisonsRemoveUsedDescription,
                          lang,
                          comparison.name,
                          comparison.used_by,
                      )
                    : resolveFormat(
                          Label.CustomComparisonsRemoveDescription,
                          lang,
                          comparison.name,
                      ),
            buttons: [resolve(Label.Remove, lang), resolve(Label.Cancel, lang)],
        });
        if (choice !== 0) {
            return;
        }
        library.write((e) => {
            e.remove(index);
            return "";
        });
        refresh();
    };

    const move = (index: number, up: boolean) => {
        let moved = false;
        library.write((e) => {
            moved = up ? e.moveUp(index) : e.moveDown(index);
            return "";
        });
        if (moved) {
            setSelected(up ? index - 1 : index + 1);
        }
        refresh();
    };

    /**
     * Imports comparisons from a file: a single exported comparison or a
     * whole list exported with Export All.
     */
    const importFile = async () => {
        const result = await openFileAsString(".json,application/json");
        if (result === undefined) {
            return;
        }
        if (result instanceof Error) {
            await showError(result.message);
            return;
        }
        const [text] = result;
        const texts = isList(text) ? readSettings(text) : null;
        for (const comparison of texts ?? [text]) {
            if (!(await addText(comparison))) {
                return;
            }
        }
    };

    const exportAll = () => {
        let text = library.getSettings();
        try {
            text = JSON.stringify(JSON.parse(text), null, 2);
        } catch {
            // It's exported as it is then.
        }
        exportFile(
            `${resolve(Label.CustomComparisonsExportAllFileName, lang)}.json`,
            text,
        );
    };

    const exportComparison = (index: number) => {
        const text = library.read((e) => e.export(index));
        if (text !== null) {
            exportFile(
                `${safeFileName(comparisons[index]?.name ?? "")}.json`,
                text,
            );
        }
    };

    const copy = async (index: number) => {
        const text = library.read((e) => e.exportCompact(index));
        try {
            await navigator.clipboard.writeText(text ?? "");
            toast.info(resolve(Label.CustomComparisonsCopiedToClipboard, lang));
        } catch {
            toast.error(resolve(Label.CustomComparisonsCouldNotCopy, lang));
        }
    };

    const paste = async () => {
        // A text field instead of reading the clipboard directly, as browsers
        // only allow that after asking for permission, if at all. The text is
        // a single line, which fits into the dialog's text field.
        const [choice, text] = await showDialog({
            title: resolve(Label.CustomComparisonsPasteTitle, lang),
            description: resolve(Label.CustomComparisonsPasteDescription, lang),
            textInput: true,
            buttons: [resolve(Label.Ok, lang), resolve(Label.Cancel, lang)],
        });
        if (choice === 0 && text.trim() !== "") {
            await addText(text);
        }
    };

    return (
        <div className={classes.list}>
            <p className={classes.listHint}>
                {resolve(Label.CustomComparisonsOpenEditorHint, lang)}
            </p>
            {/*
             * Only what adds comparisons is in the toolbar. What works on one
             * comparison is on its row, so it's clear which one it applies
             * to and it's one click away instead of select, then act.
             */}
            <div className={classes.listToolbar}>
                <button onClick={() => setChoosingTemplate(true)}>
                    <Plus strokeWidth={2.5} />
                    {resolve(Label.CustomComparisonsNew, lang)}
                </button>
                <button onClick={importFile}>
                    <Upload strokeWidth={2.5} />
                    {resolve(Label.CustomComparisonsImport, lang)}
                </button>
                <button onClick={paste}>
                    <ClipboardPaste strokeWidth={2.5} />
                    {resolve(Label.CustomComparisonsPaste, lang)}
                </button>
                <button onClick={exportAll} disabled={comparisons.length === 0}>
                    <Download strokeWidth={2.5} />
                    {resolve(Label.CustomComparisonsExportAll, lang)}
                </button>
            </div>

            {comparisons.length === 0 ? (
                <p className={classes.listEmpty}>
                    {resolve(Label.CustomComparisonsNoComparisons, lang)}
                </p>
            ) : (
                <table className={`${tableClasses.table} ${classes.listTable}`}>
                    <tbody className={tableClasses.tableBody}>
                        {comparisons.map((c, i) => (
                            <tr
                                key={i}
                                className={
                                    i === current ? tableClasses.selected : ""
                                }
                                onClick={() => setSelected(i)}
                                onDoubleClick={() => c.readable && edit(i)}
                            >
                                <td className={classes.listCell}>
                                    <div className={classes.listName}>
                                        {c.name}
                                    </div>
                                    {(!c.readable || c.problem !== null) && (
                                        <div className={classes.listProblem}>
                                            {!c.readable
                                                ? `${resolve(Label.CustomComparisonsUnreadable, lang)}: `
                                                : ""}
                                            {c.problem}
                                        </div>
                                    )}
                                    {c.used_by > 0 && (
                                        <div className={classes.listUsedBy}>
                                            {c.used_by === 1
                                                ? resolve(
                                                      Label.CustomComparisonsUsedByOne,
                                                      lang,
                                                  )
                                                : resolveFormat(
                                                      Label.CustomComparisonsUsedBy,
                                                      lang,
                                                      c.used_by,
                                                  )}
                                        </div>
                                    )}
                                </td>
                                <td className={classes.listActions}>
                                    <button
                                        disabled={!c.readable}
                                        aria-label={resolve(
                                            Label.CustomComparisonsEdit,
                                            lang,
                                        )}
                                        title={resolve(
                                            Label.CustomComparisonsEdit,
                                            lang,
                                        )}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            edit(i);
                                        }}
                                    >
                                        <Pencil size={16} strokeWidth={2.5} />
                                    </button>
                                    <button
                                        aria-label={resolve(
                                            Label.CustomComparisonsComparisonMenu,
                                            lang,
                                        )}
                                        title={resolve(
                                            Label.CustomComparisonsComparisonMenu,
                                            lang,
                                        )}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelected(i);
                                            setMenu({
                                                index: i,
                                                position: {
                                                    x: e.clientX,
                                                    y: e.clientY,
                                                },
                                            });
                                        }}
                                    >
                                        <EllipsisVertical
                                            size={16}
                                            strokeWidth={2.5}
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <p className={classes.listHint}>
                {resolve(Label.CustomComparisonsSaveReminder, lang)}
            </p>

            {menu !== null && (
                <ComparisonMenu
                    position={menu.position}
                    readable={comparisons[menu.index]?.readable ?? false}
                    isFirst={menu.index === 0}
                    isLast={menu.index === comparisons.length - 1}
                    lang={lang}
                    onClose={() => setMenu(null)}
                    actions={{
                        edit: () => edit(menu.index),
                        rename: () =>
                            rename(
                                menu.index,
                                comparisons[menu.index]?.name ?? "",
                            ),
                        duplicate: () => duplicate(menu.index),
                        moveUp: () => move(menu.index, true),
                        moveDown: () => move(menu.index, false),
                        exportFile: () => exportComparison(menu.index),
                        copy: () => copy(menu.index),
                        remove: () => remove(menu.index),
                    }}
                />
            )}

            {choosingTemplate && (
                <TemplatePicker
                    lang={lang}
                    onPick={newComparison}
                    onClose={() => setChoosingTemplate(false)}
                />
            )}
        </div>
    );
}

interface ComparisonActions {
    edit: () => void;
    rename: () => void;
    duplicate: () => void;
    moveUp: () => void;
    moveDown: () => void;
    exportFile: () => void;
    copy: () => void;
    remove: () => void;
}

/**
 * Everything that can be done with one comparison. An unreadable comparison
 * (made by a newer version, or broken) can only be exported, copied, moved
 * or removed, as it can't be opened.
 */
function ComparisonMenu({
    position,
    readable,
    isFirst,
    isLast,
    lang,
    onClose,
    actions,
}: {
    position: Position;
    readable: boolean;
    isFirst: boolean;
    isLast: boolean;
    lang: Language | undefined;
    onClose: () => void;
    actions: ComparisonActions;
}) {
    const item = (icon: React.ReactNode, label: Label, onClick: () => void) => (
        <MenuItem lang={lang} onClick={onClick}>
            {icon} {resolve(label, lang)}
        </MenuItem>
    );
    const icon = { size: 14, strokeWidth: 2.5 };
    return (
        <ContextMenu position={position} onClose={onClose}>
            {readable &&
                item(
                    <Pencil {...icon} />,
                    Label.CustomComparisonsEdit,
                    actions.edit,
                )}
            {readable &&
                item(
                    <TextCursorInput {...icon} />,
                    Label.CustomComparisonsRename,
                    actions.rename,
                )}
            {readable &&
                item(
                    <Copy {...icon} />,
                    Label.CustomComparisonsDuplicate,
                    actions.duplicate,
                )}
            {!isFirst &&
                item(<ArrowUp {...icon} />, Label.MoveUp, actions.moveUp)}
            {!isLast &&
                item(<ArrowDown {...icon} />, Label.MoveDown, actions.moveDown)}
            {item(
                <Download {...icon} />,
                Label.CustomComparisonsExport,
                actions.exportFile,
            )}
            {item(
                <ClipboardCopy {...icon} />,
                Label.CustomComparisonsCopyAsText,
                actions.copy,
            )}
            {item(<Trash {...icon} />, Label.Remove, actions.remove)}
        </ContextMenu>
    );
}

function TemplatePicker({
    lang,
    onPick,
    onClose,
}: {
    lang: Language | undefined;
    onPick: (index: number) => void;
    onClose: () => void;
}) {
    return (
        <div className={classes.pickerOverlay} onClick={onClose}>
            <div
                className={classes.picker}
                role="dialog"
                aria-label={resolve(
                    Label.CustomComparisonsTemplatesTitle,
                    lang,
                )}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>{resolve(Label.CustomComparisonsTemplatesTitle, lang)}</h2>
                <p>
                    {resolve(Label.CustomComparisonsTemplatesDescription, lang)}
                </p>
                <div className={classes.pickerList}>
                    {TEMPLATES.map((t, i) => (
                        <button
                            key={i}
                            className={classes.pickerEntry}
                            onClick={() => {
                                onClose();
                                onPick(i);
                            }}
                        >
                            <span className={classes.pickerName}>
                                {resolve(t.title, lang)}
                            </span>
                            <span className={classes.pickerTip}>
                                {resolve(t.description, lang)}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

/** "Recent form" → "Recent Form", like LiveSplit's own comparison names. */
function capitalizeWords(text: string): string {
    return text.replace(/(^|\s)\p{Ll}/gu, (c) => c.toUpperCase());
}

/** Removes characters that file names can't have. */
function safeFileName(name: string): string {
    return name.replace(/[\\/:*?"<>|]/g, "_").trim() || "comparison";
}

/**
 * Whether the text is a whole list of comparisons, as exported with Export
 * All, rather than a single comparison.
 */
function isList(text: string): boolean {
    try {
        const json = JSON.parse(text);
        return Array.isArray(json?.comparisons);
    } catch {
        return false;
    }
}

/** Reads a list of comparisons into the text of each one. */
function readSettings(settings: string): string[] | null {
    return CustomComparisonsEditor.readSettings(settings) as string[] | null;
}

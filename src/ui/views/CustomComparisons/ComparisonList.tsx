/**
 * The list of custom comparisons stored in the selected Custom Comparisons
 * component, shown in the Layout Editor instead of the component's settings.
 * It offers the same actions as the desktop component's settings: new,
 * edit, rename, duplicate, remove, move up and down (which is the order they
 * are offered in), import and export as files, and copy and paste as text
 * for sharing in a chat.
 */

import React, { useState } from "react";
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
    // The comparisons live in the layout, not in React's state, so the list
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
            title: resolveCc(CcLabel.ErrorTitle, lang),
            description: message,
            buttons: [resolve(Label.Ok, lang)],
        });
    };

    /**
     * Adds a comparison from its text. If its name is taken, the runner is
     * asked for another one until it works or they give up, like on the
     * desktop.
     */
    const addText = async (text: string) => {
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
                return;
            }
        } else {
            let newName = library.read((e) => e.suggestName(name ?? "")) ?? "";
            while (problem !== "") {
                const [choice, input] = await showDialog({
                    title: resolveCc(CcLabel.NameTakenTitle, lang),
                    description: formatCc(
                        CcLabel.NameTakenDescription,
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
                    return;
                }
                newName = input;
                problem = library.write((e) => e.addAs(text, input));
            }
        }
        setSelected(library.read((e) => e.len() - 1) ?? 0);
        refresh();
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
                ? resolveCc(CcLabel.NewComparisonName, lang)
                : capitalizeWords(resolveCc(template.title, lang));
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
            workspace: document.workspace,
        });
    };

    const rename = async (index: number, name: string) => {
        let input = name;
        while (true) {
            const [choice, typed] = await showDialog({
                title: resolveCc(CcLabel.RenameTitle, lang),
                description: resolveCc(CcLabel.RenameDescription, lang),
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
                    formatCc(CcLabel.CopySuffix, lang, document.name),
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
            title: resolveCc(CcLabel.RemoveTitle, lang),
            description:
                comparison.used_by > 0
                    ? formatCc(
                          comparison.used_by === 1
                              ? CcLabel.RemoveUsedOneDescription
                              : CcLabel.RemoveUsedDescription,
                          lang,
                          comparison.name,
                          comparison.used_by,
                      )
                    : formatCc(
                          CcLabel.RemoveDescription,
                          lang,
                          comparison.name,
                      ),
            buttons: [
                resolveCc(CcLabel.Remove, lang),
                resolve(Label.Cancel, lang),
            ],
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

    const importFile = async () => {
        const result = await openFileAsString(".json,application/json");
        if (result === undefined) {
            return;
        }
        if (result instanceof Error) {
            await showError(result.message);
            return;
        }
        await addText(result[0]);
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
            toast.info(resolveCc(CcLabel.CopiedToClipboard, lang));
        } catch {
            toast.error(resolveCc(CcLabel.CouldNotCopy, lang));
        }
    };

    const paste = async () => {
        // A text field instead of reading the clipboard directly, as browsers
        // only allow that after asking for permission, if at all. The text is
        // a single line, which fits into the dialog's text field.
        const [choice, text] = await showDialog({
            title: resolveCc(CcLabel.PasteTitle, lang),
            description: resolveCc(CcLabel.PasteDescription, lang),
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
                {resolveCc(CcLabel.OpenEditorHint, lang)}
            </p>
            {/*
             * Only what adds comparisons is in the toolbar. What works on one
             * comparison is on its row, so it's clear which one it applies
             * to and it's one click away instead of select, then act.
             */}
            <div className={classes.listToolbar}>
                <button onClick={() => setChoosingTemplate(true)}>
                    <Plus strokeWidth={2.5} />
                    {resolveCc(CcLabel.New, lang)}
                </button>
                <button onClick={importFile}>
                    <Upload strokeWidth={2.5} />
                    {resolveCc(CcLabel.Import, lang)}
                </button>
                <button onClick={paste}>
                    <ClipboardPaste strokeWidth={2.5} />
                    {resolveCc(CcLabel.Paste, lang)}
                </button>
            </div>

            {comparisons.length === 0 ? (
                <p className={classes.listEmpty}>
                    {resolveCc(CcLabel.NoComparisons, lang)}
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
                                                ? `${resolveCc(CcLabel.Unreadable, lang)}: `
                                                : ""}
                                            {c.problem}
                                        </div>
                                    )}
                                    {c.used_by > 0 && (
                                        <div className={classes.listUsedBy}>
                                            {c.used_by === 1
                                                ? resolveCc(
                                                      CcLabel.UsedByOne,
                                                      lang,
                                                  )
                                                : formatCc(
                                                      CcLabel.UsedBy,
                                                      lang,
                                                      c.used_by,
                                                  )}
                                        </div>
                                    )}
                                </td>
                                <td className={classes.listActions}>
                                    <button
                                        disabled={!c.readable}
                                        aria-label={resolveCc(
                                            CcLabel.Edit,
                                            lang,
                                        )}
                                        title={resolveCc(CcLabel.Edit, lang)}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            edit(i);
                                        }}
                                    >
                                        <Pencil size={16} strokeWidth={2.5} />
                                    </button>
                                    <button
                                        aria-label={resolveCc(
                                            CcLabel.ComparisonMenu,
                                            lang,
                                        )}
                                        title={resolveCc(
                                            CcLabel.ComparisonMenu,
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
                {resolveCc(CcLabel.SaveReminder, lang)}
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
    const item = (
        icon: React.ReactNode,
        label: CcLabel,
        onClick: () => void,
    ) => (
        <MenuItem lang={lang} onClick={onClick}>
            {icon} {resolveCc(label, lang)}
        </MenuItem>
    );
    const icon = { size: 14, strokeWidth: 2.5 };
    return (
        <ContextMenu position={position} onClose={onClose}>
            {readable && item(<Pencil {...icon} />, CcLabel.Edit, actions.edit)}
            {readable &&
                item(
                    <TextCursorInput {...icon} />,
                    CcLabel.Rename,
                    actions.rename,
                )}
            {readable &&
                item(<Copy {...icon} />, CcLabel.Duplicate, actions.duplicate)}
            {!isFirst &&
                item(<ArrowUp {...icon} />, CcLabel.MoveUp, actions.moveUp)}
            {!isLast &&
                item(
                    <ArrowDown {...icon} />,
                    CcLabel.MoveDown,
                    actions.moveDown,
                )}
            {item(<Download {...icon} />, CcLabel.Export, actions.exportFile)}
            {item(
                <ClipboardCopy {...icon} />,
                CcLabel.CopyAsText,
                actions.copy,
            )}
            {item(<Trash {...icon} />, CcLabel.Remove, actions.remove)}
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
                aria-label={resolveCc(CcLabel.TemplatesTitle, lang)}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>{resolveCc(CcLabel.TemplatesTitle, lang)}</h2>
                <p>{resolveCc(CcLabel.TemplatesDescription, lang)}</p>
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
                                {resolveCc(t.title, lang)}
                            </span>
                            <span className={classes.pickerTip}>
                                {resolveCc(t.description, lang)}
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

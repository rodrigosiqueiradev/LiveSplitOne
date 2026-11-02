/**
 * The blocks of a comparison, shown as nested rows instead of the desktop's
 * drag and drop canvas. Every block is a row with its title and its values;
 * the blocks in its slots are indented below it, with the slot's label in
 * front, so a comparison reads top to bottom like the recipes in the user
 * guide:
 *
 * ```
 * this comparison is
 *   use
 *     median of
 *       last 10 times of
 *         all my times for each segment
 *   if empty, use
 *     comparison Personal Best
 * ```
 *
 * Nested rows were chosen over a canvas because they work the same with a
 * mouse, a touch screen and a keyboard, and because LiveSplit One runs on
 * small screens. Instead of dragging blocks around, every block has a menu
 * to replace it, to put it inside another block, or to remove it, either
 * with or without what's inside it. Empty slots ask for a block, and only
 * offer the blocks that fit, so like on the desktop a comparison can't be
 * put together the wrong way.
 */

import React, { useEffect, useRef, useState } from "react";
import { CcLabel, resolveCc } from "../../../localization/custom-comparisons";
import {
    type Block,
    type Kind,
    type Path,
    type Slot,
    canUnwrap,
    isWithin,
    replaceBlock,
    samePath,
    createBlock,
    slotsOf,
    unwrapBlock,
    wrapBlock,
} from "./model";
import { type RangeCase, MAX_RANGES, RANGE, blockSpec } from "./blocks";
import { BlockPicker } from "./BlockPicker";
import { Field, type FieldContext } from "./Fields";
import {
    ContextMenu,
    MenuItem,
    type Position,
} from "../../components/ContextMenu";
import {
    Eye,
    EllipsisVertical,
    GripVertical,
    Info,
    Plus,
    Trash,
} from "lucide-react";

import { KindIcon } from "./KindIcon";

import classes from "../../../css/CustomComparisons.module.css";

export interface TreeContext extends FieldContext {
    /** Replaces whatever is at the path, relative to the root slot. */
    onChange: (path: Path, value: unknown) => void;
    /** Previews the block at the path instead of the whole comparison. */
    onPreview: (path: Path) => void;
    /** The block being previewed, if any. */
    previewPath: Path | null;
    /**
     * The block the time of the preview row the runner clicked comes from,
     * if any.
     */
    highlightPath: Path | null;
    /** The block being dragged, if any. */
    dragged: Dragged | null;
    onDrag: (dragged: Dragged | null) => void;
    /** Drops the dragged block into the slot at the path. */
    onDrop: (path: Path) => void;
    /** The slot the dragged block would be dropped into, if any. */
    dropPath: Path | null;
    onDropPathChange: (path: Path | null) => void;
}

/**
 * A block being dragged, either a new one from the rail of blocks or one
 * that's already in the comparison, which is moved.
 */
export interface Dragged {
    block: Block;
    /** Where the block is in the comparison, or null for a new block. */
    from: Path | null;
}

/**
 * The drag and drop data type. The block itself is kept in React's state,
 * as the data can't be read while dragging over a slot, which has to know
 * whether the block fits. This type tells LiveSplit One's own drags apart
 * from files or text dragged into the browser.
 */
export const DRAG_TYPE = "application/x-livesplit-one-block";

type Picking =
    | { mode: "fill"; kind: Kind }
    | { mode: "replace"; block: Block }
    | { mode: "wrap"; block: Block };

/** The comparison's root: "this comparison is" and the block it consists of. */
export function BlockTree({ root, ctx }: { root: Slot; ctx: TreeContext }) {
    return (
        <div className={classes.tree}>
            <div
                className={`${classes.block} ${classes.result}`}
                title={resolveCc(CcLabel.BlockResultTip, ctx.lang)}
            >
                <div className={classes.blockHeader}>
                    <span className={classes.blockTitle}>
                        {resolveCc(CcLabel.BlockResult, ctx.lang)}
                    </span>
                </div>
                <div className={classes.slots}>
                    <SlotView slot={root} path={[]} kind="times" ctx={ctx} />
                </div>
            </div>
        </div>
    );
}

function SlotView({
    slot,
    path,
    kind,
    label,
    ctx,
}: {
    slot: Slot;
    path: Path;
    kind: Kind;
    label?: CcLabel | undefined;
    ctx: TreeContext;
}) {
    const [picking, setPicking] = useState(false);
    const segmentCount = ctx.segmentNames.length;

    // A block fits a slot of its kind. A block can't be put into itself.
    const dragged = ctx.dragged;
    const accepts =
        dragged !== null &&
        blockSpec(dragged.block.type)?.kind === kind &&
        (dragged.from === null || !isWithin(path, dragged.from)) &&
        // Swapping a block with the block it's in would put it in itself.
        (dragged.from === null ||
            slot === null ||
            !isWithin(dragged.from, path));

    // Slots are nested, so the innermost slot under the pointer takes the
    // drop, and the slots around it don't react.
    const onDragOver = (e: React.DragEvent) => {
        if (!e.dataTransfer.types.includes(DRAG_TYPE)) {
            return;
        }
        e.stopPropagation();
        if (accepts) {
            e.preventDefault();
            e.dataTransfer.dropEffect =
                dragged?.from === null ? "copy" : "move";
        }
        // Only one slot is marked, even when the pointer moves from a slot
        // into a slot inside it, which the outer slot isn't told about.
        if (!samePath(ctx.dropPath, accepts ? path : null)) {
            ctx.onDropPathChange(accepts ? path : null);
        }
    };
    const isOver = accepts && samePath(ctx.dropPath, path);

    return (
        <div
            className={`${classes.slot} ${accepts ? classes.dropTarget : ""} ${isOver ? classes.dropOver : ""}`}
            onDragOver={onDragOver}
            onDragLeave={(e) => {
                if (
                    isOver &&
                    !e.currentTarget.contains(e.relatedTarget as Node)
                ) {
                    ctx.onDropPathChange(null);
                }
            }}
            onDrop={(e) => {
                if (!accepts) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                ctx.onDrop(path);
            }}
        >
            {label !== undefined && (
                <div className={classes.slotLabel}>
                    {resolveCc(label, ctx.lang)}
                </div>
            )}
            {slot !== null ? (
                <BlockView block={slot} path={path} ctx={ctx} />
            ) : (
                <button
                    className={classes.emptySlot}
                    onClick={() => setPicking(true)}
                >
                    <Plus size={16} strokeWidth={2.5} />
                    <KindIcon kind={kind} />
                    {resolveCc(CcLabel.ChooseBlock, ctx.lang)}
                </button>
            )}
            {picking && (
                <BlockPicker
                    title={resolveCc(
                        kind === "samples"
                            ? CcLabel.KindSamples
                            : CcLabel.KindTimes,
                        ctx.lang,
                    )}
                    filter={(spec) => spec.kind === kind}
                    onPick={(type) =>
                        ctx.onChange(path, createBlock(type, segmentCount))
                    }
                    onClose={() => setPicking(false)}
                    lang={ctx.lang}
                />
            )}
        </div>
    );
}

function BlockView({
    block,
    path,
    ctx,
}: {
    block: Block;
    path: Path;
    ctx: TreeContext;
}) {
    const spec = blockSpec(block.type);
    const [menu, setMenu] = useState<Position | null>(null);
    const [picking, setPicking] = useState<Picking | null>(null);
    const [showTip, setShowTip] = useState(false);
    const element = useRef<HTMLDivElement>(null);
    const segmentCount = ctx.segmentNames.length;
    const { lang } = ctx;
    const isHighlighted = samePath(ctx.highlightPath, path);

    // The block a clicked preview row comes from may be far from the
    // preview in a big comparison, or scrolled away on a phone, where the
    // preview is below the blocks.
    useEffect(() => {
        if (isHighlighted) {
            element.current?.scrollIntoView({
                block: "nearest",
                behavior: "smooth",
            });
        }
    }, [isHighlighted]);

    if (spec === undefined) {
        // livesplit-core only lets known blocks through, so this can only
        // happen with a newer format, which isn't opened in the first place.
        return null;
    }

    const isPreviewed = samePath(ctx.previewPath, path);

    const setField = (key: string, value: unknown) =>
        ctx.onChange([...path, key], value);

    const slots = slotsOf(block);
    const otherSlots = slots.filter((s) => s.path[0] !== "cases");

    return (
        <div
            ref={element}
            className={`${classes.block} ${classes[spec.category]} ${isPreviewed ? classes.previewed : ""} ${isHighlighted ? classes.highlighted : ""} ${ctx.dragged !== null && samePath(ctx.dragged.from, path) ? classes.dragging : ""}`}
        >
            <div
                className={classes.blockHeader}
                title={resolveCc(spec.tip, lang)}
            >
                {/*
                 * Only the handle starts a drag, so selecting text in the
                 * block's fields still works.
                 */}
                <span
                    className={classes.dragHandle}
                    draggable
                    aria-hidden
                    title={resolveCc(CcLabel.DragBlock, lang)}
                    onDragStart={(e) => {
                        e.dataTransfer.setData(DRAG_TYPE, block.type);
                        e.dataTransfer.effectAllowed = "move";
                        if (element.current !== null) {
                            e.dataTransfer.setDragImage(
                                element.current,
                                12,
                                12,
                            );
                        }
                        ctx.onDrag({ block, from: path });
                    }}
                    onDragEnd={() => ctx.onDrag(null)}
                >
                    <GripVertical size={14} strokeWidth={2.5} />
                </span>
                <KindIcon kind={spec.kind} />
                {block.type === RANGE.type ? (
                    <span className={classes.blockTitle}>
                        {resolveCc(CcLabel.BlockSegmentRangeHeader, lang)}
                    </span>
                ) : (
                    <Title
                        template={resolveCc(spec.title, lang)}
                        block={block}
                        onChange={setField}
                        ctx={ctx}
                    />
                )}
                {/*
                 * The tip is also the header's tooltip, but tooltips don't
                 * work on touch screens and are easy to miss, so it can be
                 * shown in the block too.
                 */}
                <button
                    className={`${classes.blockMenuButton} ${showTip ? classes.active : ""}`}
                    aria-label={resolveCc(CcLabel.AboutBlock, lang)}
                    aria-expanded={showTip}
                    title={resolveCc(CcLabel.AboutBlock, lang)}
                    onClick={() => setShowTip(!showTip)}
                >
                    <Info size={16} strokeWidth={2.5} />
                </button>
                <button
                    className={classes.blockMenuButton}
                    aria-label={resolveCc(CcLabel.BlockMenu, lang)}
                    onClick={(e) => setMenu({ x: e.clientX, y: e.clientY })}
                >
                    <EllipsisVertical size={16} strokeWidth={2.5} />
                </button>
            </div>
            {showTip && (
                <p className={classes.blockTip}>{resolveCc(spec.tip, lang)}</p>
            )}

            {block.type === RANGE.type && (
                <RangeCases block={block} path={path} ctx={ctx} />
            )}

            {otherSlots.length > 0 && (
                <div className={classes.slots}>
                    {otherSlots.map((s) => (
                        <SlotView
                            key={s.path.join(".")}
                            slot={s.value}
                            path={[...path, ...s.path]}
                            kind={s.spec.kind}
                            label={s.spec.label}
                            ctx={ctx}
                        />
                    ))}
                </div>
            )}

            {spec.footer !== undefined && (
                <div className={classes.blockFooter}>
                    <Title
                        template={resolveCc(spec.footer, lang)}
                        block={block}
                        onChange={setField}
                        ctx={ctx}
                    />
                </div>
            )}

            {menu && (
                <ContextMenu position={menu} onClose={() => setMenu(null)}>
                    {spec.kind === "times" && (
                        <MenuItem
                            lang={lang}
                            onClick={() => ctx.onPreview(path)}
                        >
                            <Eye size={14} strokeWidth={2.5} />{" "}
                            {resolveCc(CcLabel.PreviewBlock, lang)}
                        </MenuItem>
                    )}
                    <MenuItem
                        lang={lang}
                        onClick={() => setPicking({ mode: "replace", block })}
                    >
                        {resolveCc(CcLabel.ReplaceBlock, lang)}
                    </MenuItem>
                    <MenuItem
                        lang={lang}
                        onClick={() => setPicking({ mode: "wrap", block })}
                    >
                        {resolveCc(CcLabel.WrapBlock, lang)}
                    </MenuItem>
                    {canUnwrap(block) && (
                        <MenuItem
                            lang={lang}
                            onClick={() =>
                                ctx.onChange(path, unwrapBlock(block))
                            }
                        >
                            {resolveCc(CcLabel.UnwrapBlock, lang)}
                        </MenuItem>
                    )}
                    <MenuItem
                        lang={lang}
                        onClick={() => ctx.onChange(path, null)}
                    >
                        <Trash size={14} strokeWidth={2.5} />{" "}
                        {resolveCc(CcLabel.RemoveBlock, lang)}
                    </MenuItem>
                </ContextMenu>
            )}

            {picking && (
                <BlockPicker
                    title={resolveCc(
                        picking.mode === "replace"
                            ? CcLabel.ReplaceBlock
                            : CcLabel.WrapBlock,
                        lang,
                    )}
                    filter={(candidate) =>
                        candidate.kind === spec.kind &&
                        (picking.mode === "replace" ||
                            (candidate.type === RANGE.type
                                ? spec.kind === "times"
                                : candidate.slots.some(
                                      (s) => s.kind === spec.kind,
                                  )))
                    }
                    onPick={(type) => {
                        if (picking.mode === "replace") {
                            ctx.onChange(
                                path,
                                replaceBlock(block, type, segmentCount),
                            );
                        } else {
                            const wrapped = wrapBlock(
                                block,
                                type,
                                segmentCount,
                            );
                            if (wrapped !== null) {
                                ctx.onChange(path, wrapped);
                            }
                        }
                    }}
                    onClose={() => setPicking(null)}
                    lang={lang}
                />
            )}
        </div>
    );
}

/** The ranges of a segment range block, each with its segments and rule. */
function RangeCases({
    block,
    path,
    ctx,
}: {
    block: Block;
    path: Path;
    ctx: TreeContext;
}) {
    const cases = block["cases"] as RangeCase[];
    const { lang } = ctx;
    const segmentCount = ctx.segmentNames.length;
    const segmentField = (key: "from" | "to") => ({
        key,
        type: "segment" as const,
        default: 1,
    });

    return (
        <div className={classes.slots}>
            {cases.map((c, i) => (
                <div key={i} className={classes.rangeCase}>
                    <div className={classes.slotLabel}>
                        <Title
                            template={resolveCc(CcLabel.RangeCase, lang)}
                            block={c as unknown as Block}
                            onChange={(key, value) =>
                                ctx.onChange([...path, "cases", i, key], value)
                            }
                            ctx={ctx}
                            fields={[segmentField("from"), segmentField("to")]}
                        />
                        {cases.length > 1 && (
                            <button
                                className={classes.blockMenuButton}
                                aria-label={resolveCc(
                                    CcLabel.RemoveRange,
                                    lang,
                                )}
                                title={resolveCc(CcLabel.RemoveRange, lang)}
                                onClick={() =>
                                    ctx.onChange(
                                        [...path, "cases"],
                                        cases.filter((_, j) => j !== i),
                                    )
                                }
                            >
                                <Trash size={14} strokeWidth={2.5} />
                            </button>
                        )}
                    </div>
                    <SlotView
                        slot={c.times}
                        path={[...path, "cases", i, "times"]}
                        kind="times"
                        ctx={ctx}
                    />
                </div>
            ))}
            {cases.length < MAX_RANGES && (
                <button
                    className={classes.addRange}
                    onClick={() => {
                        // A new range starts right after the last one.
                        const last = cases[cases.length - 1];
                        const from = Math.min(
                            (last?.to ?? 0) + 1,
                            Math.max(segmentCount, 1),
                        );
                        const added: RangeCase = {
                            from,
                            to: from,
                            times: null,
                        };
                        ctx.onChange([...path, "cases"], [...cases, added]);
                    }}
                >
                    <Plus size={14} strokeWidth={2.5} />
                    {resolveCc(CcLabel.AddRange, lang)}
                </button>
            )}
        </div>
    );
}

/**
 * A block's title with its values in place of the `{key}` placeholders, so
 * a block reads like a sentence: "last [10] times of".
 */
function Title({
    template,
    block,
    onChange,
    ctx,
    fields,
}: {
    template: string;
    block: Block;
    onChange: (key: string, value: unknown) => void;
    ctx: TreeContext;
    fields?: ReturnType<typeof fieldsOf>;
}) {
    const specs = fields ?? fieldsOf(block);
    const parts = template.split(/(\{[a-zA-Z]+\})/);
    return (
        <span className={classes.blockTitle}>
            {parts.map((part, i) => {
                const match = /^\{([a-zA-Z]+)\}$/.exec(part);
                const spec = match && specs.find((f) => f.key === match[1]);
                if (!spec) {
                    return part === "" ? null : <span key={i}>{part}</span>;
                }
                return (
                    <Field
                        key={i}
                        spec={spec}
                        value={block[spec.key]}
                        onChange={(value) => onChange(spec.key, value)}
                        ctx={ctx}
                    />
                );
            })}
        </span>
    );
}

function fieldsOf(block: Block) {
    return blockSpec(block.type)?.fields ?? [];
}

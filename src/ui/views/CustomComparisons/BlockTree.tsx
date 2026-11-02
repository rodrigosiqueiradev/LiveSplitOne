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

import React, { useState } from "react";
import { CcLabel, resolveCc } from "../../../localization/custom-comparisons";
import {
    type Block,
    type Kind,
    type Path,
    type Slot,
    canUnwrap,
    setAt,
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
import { Eye, EllipsisVertical, Plus, Trash } from "lucide-react";

import classes from "../../../css/CustomComparisons.module.css";

export interface TreeContext extends FieldContext {
    /** Replaces whatever is at the path, relative to the root slot. */
    onChange: (path: Path, value: unknown) => void;
    /** Previews the block at the path instead of the whole comparison. */
    onPreview: (path: Path) => void;
    /** The block being previewed, if any. */
    previewPath: Path | null;
}

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

    return (
        <div className={classes.slot}>
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
                    <span className={classes.kindBadge}>
                        {kind === "samples" ? "⬡" : "⬭"}
                    </span>
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
    const segmentCount = ctx.segmentNames.length;
    const { lang } = ctx;

    if (spec === undefined) {
        // livesplit-core only lets known blocks through, so this can only
        // happen with a newer format, which isn't opened in the first place.
        return null;
    }

    const isPreviewed =
        ctx.previewPath !== null &&
        ctx.previewPath.length === path.length &&
        ctx.previewPath.every((key, i) => key === path[i]);

    const setField = (key: string, value: unknown) =>
        ctx.onChange([...path, key], value);

    const slots = slotsOf(block);
    const otherSlots = slots.filter((s) => s.path[0] !== "cases");

    return (
        <div
            className={`${classes.block} ${classes[spec.category]} ${isPreviewed ? classes.previewed : ""}`}
        >
            <div
                className={classes.blockHeader}
                title={resolveCc(spec.tip, lang)}
            >
                <span className={classes.kindBadge}>
                    {spec.kind === "samples" ? "⬡" : "⬭"}
                </span>
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
                <button
                    className={classes.blockMenuButton}
                    aria-label={resolveCc(CcLabel.BlockMenu, lang)}
                    onClick={(e) => setMenu({ x: e.clientX, y: e.clientY })}
                >
                    <EllipsisVertical size={16} strokeWidth={2.5} />
                </button>
            </div>

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

/**
 * Replaces a block with a new one of another type, keeping what was inside
 * it where the new block has a slot of the same kind. Replacing "median of"
 * with "percentile of" keeps the list of times it was calculated from.
 */
function replaceBlock(block: Block, type: string, segmentCount: number): Block {
    const replacement = createBlock(type, segmentCount);
    const old = slotsOf(block).filter((s) => s.value !== null);
    for (const slot of slotsOf(replacement)) {
        const index = old.findIndex((s) => s.spec.kind === slot.spec.kind);
        if (index >= 0) {
            const [taken] = old.splice(index, 1);
            Object.assign(
                replacement,
                setAt(replacement, slot.path, taken?.value ?? null),
            );
        }
    }
    return replacement;
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

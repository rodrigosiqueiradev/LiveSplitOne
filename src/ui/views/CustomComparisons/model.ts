/**
 * The model of the Custom Comparisons block editor: the blocks a comparison is
 * made of, how they nest, and how a comparison is turned into the JSON format
 * shared with the desktop LiveSplit component *Custom Comparisons*.
 *
 * The block editor works directly on that format's tree (the "root" of a
 * comparison file), instead of on a model of its own. That way nothing is
 * lost or changed when a comparison made on the desktop is opened here, and
 * livesplit-core, which reads and validates every comparison anyway, stays
 * the only place that knows what a valid comparison is. The only addition is
 * that a slot may be `null` while the runner hasn't put a block into it yet.
 * Such a comparison can't be saved or previewed until every slot is filled.
 *
 * Blocks come in two kinds, like on the desktop, where they have different
 * shapes: "samples" blocks pass along a list of times for each segment
 * (hexagons on the desktop), "times" blocks one time for each segment (round
 * on the desktop). A slot only accepts blocks of its kind, which keeps every
 * comparison valid by construction.
 */

import {
    type RangeCase,
    type SlotSpec,
    BEST_SEGMENTS,
    PERSONAL_BEST,
    RANGE,
    blockSpec,
} from "./blocks";

/** The `format` value of a comparison file. */
export const FORMAT_ID = "livesplit-custom-comparison";

/** A block, exactly as stored in the comparison file format. */
export interface Block {
    type: string;
    [key: string]: unknown;
}

/** A slot that may not have a block in it yet. */
export type Slot = Block | null;

/** The kinds of blocks, see the module documentation. */
export type Kind = "times" | "samples";

/** Where a block lives in the tree: the keys from the root to the block. */
export type Path = (string | number)[];

/**
 * Creates a block with its default values. Like the desktop block editor's
 * drawer, some blocks come with blocks already in their slots, so a new
 * block is useful right away: lists of times start out as all the runner's
 * times, and the blocks that compare against something start with the golds
 * and the PB.
 */
export function createBlock(type: string, segmentCount: number): Block {
    const spec = blockSpec(type);
    if (spec === undefined) {
        throw new Error(`Unknown block "${type}".`);
    }
    const block: Block = { type };
    for (const field of spec.fields) {
        block[field.key] =
            field.type === "segment"
                ? clampSegment(field.default, segmentCount)
                : field.default;
    }
    for (const slot of spec.slots) {
        block[slot.key] =
            slot.kind === "samples" ? { type: "segmentHistory" } : null;
    }
    const comparison = (name: string): Block => ({ type: "comparison", name });
    switch (type) {
        case "clamp":
            block["low"] = comparison(BEST_SEGMENTS);
            block["high"] = comparison(PERSONAL_BEST);
            break;
        case "blend":
            block["from"] = comparison(BEST_SEGMENTS);
            block["to"] = comparison(PERSONAL_BEST);
            break;
        case "stretchToTotal":
            block["source"] = comparison(BEST_SEGMENTS);
            break;
        case "fallback":
            block["fallback"] = comparison(PERSONAL_BEST);
            break;
        case "segmentRange": {
            const cases: RangeCase[] = [
                {
                    from: 1,
                    to: clampSegment(3, segmentCount),
                    times: null,
                },
            ];
            block["cases"] = cases;
            break;
        }
    }
    return block;
}

/**
 * A default segment number that exists in the run, like the desktop block
 * editor picks the last segment if the default is past the end of short
 * splits.
 */
function clampSegment(segment: number, segmentCount: number): number {
    return segmentCount > 0 ? Math.min(segment, segmentCount) : segment;
}

/**
 * The slots of a block, with the key path to each one relative to the block.
 * For the segment range block, these are the rule of every range followed by
 * the rule for the other segments.
 */
export function slotsOf(
    block: Block,
): { path: Path; spec: SlotSpec; value: Slot }[] {
    const spec = blockSpec(block.type);
    if (spec === undefined) {
        return [];
    }
    const slots: { path: Path; spec: SlotSpec; value: Slot }[] = [];
    if (block.type === RANGE.type) {
        (block["cases"] as RangeCase[]).forEach((c, i) => {
            slots.push({
                path: ["cases", i, "times"],
                spec: { key: "times", kind: "times" },
                value: c.times,
            });
        });
    }
    for (const slot of spec.slots) {
        slots.push({
            path: [slot.key],
            spec: slot,
            value: (block[slot.key] as Slot) ?? null,
        });
    }
    return slots;
}

/** Reads the value at a path. Returns undefined if the path doesn't exist. */
export function getAt(root: unknown, path: Path): unknown {
    let node = root;
    for (const key of path) {
        if (node === null || typeof node !== "object") {
            return undefined;
        }
        node = (node as Record<string | number, unknown>)[key];
    }
    return node;
}

/**
 * The path of the block a preview row's time comes from, given the origin
 * livesplit-core reports for it ("primary.cases.0.times"). Like the origin's
 * description, blocks that only adjust the time they get ("add", "scale")
 * count as the block, so the highlighted block is the one the description
 * names. Returns null if the origin doesn't point into the blocks.
 */
export function originPath(root: Slot, origin: string): Path | null {
    if (root === null) {
        return null;
    }
    const steps = origin === "" ? [] : origin.split(".");
    let node: unknown = root;
    let target: Path = [];
    const path: Path = [];
    for (const step of steps) {
        const key = Array.isArray(node) ? Number(step) : step;
        node = getAt(node, [key]);
        path.push(key);
        if (node === undefined || node === null) {
            return null;
        }
        if (
            typeof node === "object" &&
            !Array.isArray(node) &&
            "type" in node &&
            step !== "source"
        ) {
            target = [...path];
        }
    }
    return target;
}

/** Whether two paths point to the same place. */
export function samePath(a: Path | null, b: Path | null): boolean {
    return (
        a !== null &&
        b !== null &&
        a.length === b.length &&
        a.every((key, i) => key === b[i])
    );
}

/**
 * Returns a copy of the tree with the value at the path replaced. Only the
 * objects on the way to the path are copied, so the editor's undo history can
 * keep every version of the tree cheaply.
 */
export function setAt(root: unknown, path: Path, value: unknown): unknown {
    if (path.length === 0) {
        return value;
    }
    const [key, ...rest] = path as [string | number, ...Path];
    const copy: Record<string | number, unknown> | unknown[] = Array.isArray(
        root,
    )
        ? [...root]
        : { ...(root as Record<string, unknown>) };
    (copy as Record<string | number, unknown>)[key] = setAt(
        (root as Record<string | number, unknown>)[key],
        rest,
        value,
    );
    return copy;
}

/**
 * Puts the block into a new block of the given type, in the first slot of the
 * new block that accepts it. Returns null if no slot of the new block does.
 */
export function wrapBlock(
    block: Block,
    type: string,
    segmentCount: number,
): Block | null {
    const wrapper = createBlock(type, segmentCount);
    const kind = blockSpec(block.type)?.kind;
    const slot = slotsOf(wrapper).find((s) => s.spec.kind === kind);
    if (slot === undefined) {
        return null;
    }
    return setAt(wrapper, slot.path, block) as Block;
}

/**
 * What remains when a block is removed but what's inside it is kept: the
 * block in its first slot that fits where the block was. Returns null if
 * there's no such block.
 */
export function unwrapBlock(block: Block): Slot {
    const kind = blockSpec(block.type)?.kind;
    const slot = slotsOf(block).find(
        (s) => s.spec.kind === kind && s.value !== null,
    );
    return slot?.value ?? null;
}

/** Whether the block has a slot that could keep what's inside it. */
export function canUnwrap(block: Block): boolean {
    return unwrapBlock(block) !== null;
}

/** Finds the first empty slot, depth first. Returns its path, or null. */
export function findEmptySlot(slot: Slot, path: Path = []): Path | null {
    if (slot === null) {
        return path;
    }
    for (const child of slotsOf(slot)) {
        const found = findEmptySlot(child.value, [...path, ...child.path]);
        if (found !== null) {
            return found;
        }
    }
    return null;
}

/**
 * Finds the first empty slot that takes blocks of the kind, depth first.
 * Returns its path, or null.
 */
export function findEmptySlotFor(
    slot: Slot,
    kind: Kind,
    slotKind: Kind = "times",
    path: Path = [],
): Path | null {
    if (slot === null) {
        return slotKind === kind ? path : null;
    }
    for (const child of slotsOf(slot)) {
        const found = findEmptySlotFor(child.value, kind, child.spec.kind, [
            ...path,
            ...child.path,
        ]);
        if (found !== null) {
            return found;
        }
    }
    return null;
}

/** Whether the path is the other path or inside what it points to. */
export function isWithin(path: Path, outer: Path): boolean {
    return (
        path.length >= outer.length && outer.every((key, i) => key === path[i])
    );
}

/**
 * Replaces a block with a new one of another type, keeping what was inside
 * it where the new block has a slot of the same kind. Replacing "median of"
 * with "percentile of" keeps the list of times it was calculated from.
 */
export function replaceBlock(
    block: Block,
    type: string,
    segmentCount: number,
): Block {
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

/**
 * Finds the first segment range whose segments are backwards. Returns the
 * numbers, or null. This can't be prevented while editing, as the runner
 * changes one end at a time.
 */
export function findBackwardsRange(slot: Slot): [number, number] | null {
    if (slot === null) {
        return null;
    }
    if (slot.type === RANGE.type) {
        for (const c of slot["cases"] as RangeCase[]) {
            if (c.to < c.from) {
                return [c.from, c.to];
            }
        }
    }
    for (const child of slotsOf(slot)) {
        const found = findBackwardsRange(child.value);
        if (found !== null) {
            return found;
        }
    }
    return null;
}

/**
 * The lowest format version that can hold the blocks, so a comparison that
 * doesn't use newer blocks still opens in older releases of the desktop
 * component. livesplit-core rewrites the version the same way when it stores
 * a comparison. This is only needed for the version written into the text
 * given to the preview, which livesplit-core refuses if it's too low.
 */
export function requiredVersion(slot: Slot): number {
    if (slot === null) {
        return 1;
    }
    let version = blockSpec(slot.type)?.version ?? 1;
    for (const child of slotsOf(slot)) {
        version = Math.max(version, requiredVersion(child.value));
    }
    return version;
}

/** A comparison as stored, see the module documentation. */
export interface ComparisonDocument {
    format: typeof FORMAT_ID;
    version: number;
    name: string;
    root: Block;
    /**
     * The desktop block editor's layout of the blocks. It's only kept for
     * the desktop, which reopens the blocks where they were.
     */
    workspace?: unknown;
}

/**
 * Writes the text of a comparison. `workspace` is the desktop block editor's
 * layout of the blocks. It should only be passed if the blocks didn't
 * change, as it would show the old blocks otherwise. Without it, the desktop
 * lays out the blocks on its own.
 */
export function writeComparison(
    name: string,
    root: Block,
    workspace?: unknown,
): string {
    const document: ComparisonDocument = {
        format: FORMAT_ID,
        version: requiredVersion(root),
        name: name.trim(),
        root,
    };
    if (workspace !== undefined && workspace !== null) {
        document.workspace = workspace;
    }
    return JSON.stringify(document);
}

/**
 * Reads the text of a comparison that livesplit-core has already read
 * successfully, so only its shape needs to be trusted here.
 */
export function readComparison(text: string): ComparisonDocument {
    return JSON.parse(text) as ComparisonDocument;
}

/** Whether two trees are the same, ignoring the order of keys. */
export function sameTree(a: unknown, b: unknown): boolean {
    if (a === b) {
        return true;
    }
    if (
        a === null ||
        b === null ||
        typeof a !== "object" ||
        typeof b !== "object"
    ) {
        return false;
    }
    if (Array.isArray(a) !== Array.isArray(b)) {
        return false;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    return (
        aKeys.length === bKeys.length &&
        aKeys.every((key) =>
            sameTree(
                (a as Record<string, unknown>)[key],
                (b as Record<string, unknown>)[key],
            ),
        )
    );
}

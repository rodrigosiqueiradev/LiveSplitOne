import React, { useState } from "react";
import { type Language } from "../../../livesplit-core";
import { Label, resolve } from "../../../localization";
import { type BlockSpec, ALL_BLOCKS, CATEGORIES } from "./blocks";
import { blockMatches, blockName, searchWords } from "./BlockPicker";
import { DRAG_TYPE } from "./BlockTree";

import { KindIcon } from "./KindIcon";

import classes from "../../../css/CustomComparisons.module.css";

/**
 * All the blocks, next to the comparison. A block is dragged onto a slot to put it there, or onto a block to
 * replace it (keeping what's inside it where it fits). Clicking a block puts
 * it into the first empty slot it fits, which is how a comparison is built
 * from top to bottom without dragging.
 *
 * Every block keeps working without the rail: empty slots and the block
 * menus open the block picker. That's what touch screens use, as browsers
 * don't support dragging there, so the rail isn't shown on phones.
 */
export function BlockRail({
    lang,
    onDragStart,
    onDragEnd,
    onAdd,
    canAdd,
}: {
    lang: Language | undefined;
    onDragStart: (spec: BlockSpec) => void;
    onDragEnd: () => void;
    /** Puts the block into the first empty slot it fits. */
    onAdd: (spec: BlockSpec) => void;
    /** Whether there's an empty slot the block fits. */
    canAdd: (spec: BlockSpec) => boolean;
}) {
    const [query, setQuery] = useState("");
    const words = searchWords(query);
    const groups = CATEGORIES.map(({ category, label }) => ({
        label,
        blocks: ALL_BLOCKS.filter(
            (spec) =>
                spec.category === category && blockMatches(spec, words, lang),
        ),
    })).filter((group) => group.blocks.length > 0);

    return (
        <aside
            className={classes.rail}
            aria-label={resolve(Label.CustomComparisonsBlocks, lang)}
        >
            <h2>{resolve(Label.CustomComparisonsBlocks, lang)}</h2>
            <input
                type="search"
                className={classes.pickerSearch}
                placeholder={resolve(Label.CustomComparisonsSearchBlocks, lang)}
                aria-label={resolve(Label.CustomComparisonsSearchBlocks, lang)}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <p className={classes.railHint}>
                {resolve(Label.CustomComparisonsRailHint, lang)}
            </p>
            <div className={classes.railList}>
                {groups.length === 0 && (
                    <p className={classes.railHint}>
                        {resolve(Label.CustomComparisonsNoBlocksFound, lang)}
                    </p>
                )}
                {groups.map((group) => (
                    <section key={group.label}>
                        <h3>{resolve(group.label, lang)}</h3>
                        {group.blocks.map((spec) => {
                            const fits = canAdd(spec);
                            return (
                                <button
                                    key={spec.type}
                                    className={`${classes.railEntry} ${classes[spec.category]} ${fits ? "" : classes.railEntryNoSlot}`}
                                    title={resolve(spec.tip, lang)}
                                    draggable
                                    onDragStart={(e) => {
                                        e.dataTransfer.setData(
                                            DRAG_TYPE,
                                            spec.type,
                                        );
                                        e.dataTransfer.effectAllowed = "copy";
                                        onDragStart(spec);
                                    }}
                                    onDragEnd={onDragEnd}
                                    // Not disabled when there's no empty
                                    // slot, as it can still be dragged onto a
                                    // block to replace it.
                                    onClick={() => fits && onAdd(spec)}
                                >
                                    <KindIcon kind={spec.kind} />
                                    {blockName(spec, lang)}
                                </button>
                            );
                        })}
                    </section>
                ))}
            </div>
        </aside>
    );
}

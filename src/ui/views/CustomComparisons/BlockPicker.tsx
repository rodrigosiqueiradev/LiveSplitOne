import React from "react";
import { type Language } from "../../../livesplit-core";
import { CcLabel, resolveCc } from "../../../localization/custom-comparisons";
import { type BlockSpec, CATEGORIES, ALL_BLOCKS, RANGE } from "./blocks";

import classes from "../../../css/CustomComparisons.module.css";

/**
 * Lets the runner pick a block, grouped like the desktop block editor's
 * drawer. Every block shows its tip right under its name instead of in a
 * tooltip, as there are a lot of blocks, a tooltip doesn't work on touch
 * screens, and the tips are what tells the blocks apart.
 *
 * It's a panel in the middle of the screen rather than a context menu at the
 * mouse, as the list is too long to fit below or next to most rows.
 */
export function BlockPicker({
    title,
    filter,
    onPick,
    onClose,
    lang,
}: {
    title: string;
    /** Which blocks can be picked. */
    filter: (spec: BlockSpec) => boolean;
    onPick: (type: string) => void;
    onClose: () => void;
    lang: Language | undefined;
}) {
    const groups = CATEGORIES.map(({ category, label }) => ({
        label,
        blocks: ALL_BLOCKS.filter(
            (spec) => spec.category === category && filter(spec),
        ),
    })).filter((group) => group.blocks.length > 0);

    return (
        <div
            className={classes.pickerOverlay}
            onClick={onClose}
            onKeyDown={(e) => {
                if (e.key === "Escape") {
                    onClose();
                }
            }}
        >
            <div
                className={classes.picker}
                role="dialog"
                aria-label={title}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>{title}</h2>
                <div className={classes.pickerList}>
                    {groups.map((group) => (
                        <section key={group.label}>
                            <h3>{resolveCc(group.label, lang)}</h3>
                            {group.blocks.map((spec) => (
                                <button
                                    key={spec.type}
                                    autoFocus={false}
                                    className={`${classes.pickerEntry} ${classes[spec.category]}`}
                                    onClick={() => {
                                        onPick(spec.type);
                                        onClose();
                                    }}
                                >
                                    <span className={classes.pickerName}>
                                        <span className={classes.kindBadge}>
                                            {spec.kind === "samples"
                                                ? "⬡"
                                                : "⬭"}
                                        </span>
                                        {blockName(spec, lang)}
                                    </span>
                                    <span className={classes.pickerTip}>
                                        {resolveCc(spec.tip, lang)}
                                    </span>
                                </button>
                            ))}
                        </section>
                    ))}
                </div>
                <div className={classes.pickerFooter}>
                    <span>{resolveCc(CcLabel.KindSamples, lang)}</span>
                    <span>{resolveCc(CcLabel.KindTimes, lang)}</span>
                </div>
            </div>
        </div>
    );
}

/**
 * The block's title with its fields shown as "…", the way it's named in the
 * picker and in the user guide ("last … times of"). A choice shows its
 * default instead ("median of", "the slower of"), because "… of" wouldn't
 * tell the runner anything.
 */
export function blockName(spec: BlockSpec, lang: Language | undefined): string {
    const title = fillTitle(spec, lang);
    if (spec.type === RANGE.type) {
        // Its title already names its parts.
        return title;
    }
    // The slots are named too, like in the user guide's recipes ("use … if
    // empty, use …"), as some blocks are only told apart by them.
    const slots = spec.slots
        .map((slot) =>
            slot.label !== undefined
                ? ` ${resolveCc(slot.label, lang)} …`
                : " …",
        )
        .join("");
    return title + slots;
}

function fillTitle(spec: BlockSpec, lang: Language | undefined): string {
    return resolveCc(spec.title, lang).replace(/\{([a-zA-Z]+)\}/g, (_, key) => {
        const field = spec.fields.find((f) => f.key === key);
        if (field?.type === "choice") {
            const choice = field.choices.find((c) => c.value === field.default);
            if (choice !== undefined) {
                return choiceLabel(choice, lang);
            }
        }
        return "…";
    });
}

/** The label of a choice. Numeric choices are filled into their label. */
export function choiceLabel(
    choice: { value: string | number; label: CcLabel },
    lang: Language | undefined,
): string {
    return resolveCc(choice.label, lang).replace("{0}", String(choice.value));
}

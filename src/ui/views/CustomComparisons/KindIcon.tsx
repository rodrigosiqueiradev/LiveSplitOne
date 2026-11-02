import React from "react";
import { type Kind } from "./model";

import classes from "../../../css/CustomComparisons.module.css";

/**
 * The shape that tells the two kinds of blocks apart, like the shapes of the
 * desktop block editor's connectors: a hexagon for a list of times for each
 * segment, a rounded bar for one time for each segment. A block only fits a
 * slot with the same shape.
 */
export function KindIcon({ kind }: { kind: Kind }) {
    return (
        <svg
            className={classes.kindBadge}
            viewBox="0 0 16 12"
            width="16"
            height="12"
            aria-hidden
        >
            {kind === "samples" ? (
                <path
                    d="M4.5 1.5h7L15 6l-3.5 4.5h-7L1 6z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinejoin="round"
                />
            ) : (
                <rect
                    x="1"
                    y="1.5"
                    width="14"
                    height="9"
                    rx="4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                />
            )}
        </svg>
    );
}

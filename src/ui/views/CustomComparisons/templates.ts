/**
 * The starting points offered when making a new comparison.
 */

import { Label } from "../../../localization";
import { type Block } from "./model";
import { PERSONAL_BEST, BEST_SEGMENTS } from "./blocks";

export interface Template {
    title: Label;
    description: Label;
    /** Builds the blocks for the goal time in seconds. Null for no blocks. */
    build: (goalSeconds: number) => Block | null;
}

const completedHistory = (): Block => ({
    type: "completedRunsOnly",
    source: { type: "segmentHistory" },
});
const pb = (): Block => ({ type: "comparison", name: PERSONAL_BEST });

export const TEMPLATES: Template[] = [
    {
        title: Label.CustomComparisonsTemplateGoalPace,
        description: Label.CustomComparisonsTemplateGoalPaceDescription,
        build: (goal) => ({
            type: "stretchToTotal",
            totalSeconds: goal,
            source: {
                type: "fallback",
                primary: {
                    type: "aggregate",
                    kind: "median",
                    source: {
                        type: "lastN",
                        count: 10,
                        source: completedHistory(),
                    },
                },
                fallback: pb(),
            },
        }),
    },
    {
        title: Label.CustomComparisonsTemplateRealisticPace,
        description: Label.CustomComparisonsTemplateRealisticPaceDescription,
        build: () => ({
            type: "fallback",
            primary: {
                type: "percentile",
                percent: 70,
                source: {
                    type: "atLeast",
                    count: 5,
                    source: {
                        type: "recentDays",
                        days: 30,
                        source: completedHistory(),
                    },
                },
            },
            fallback: pb(),
        }),
    },
    {
        title: Label.CustomComparisonsTemplateRecentForm,
        description: Label.CustomComparisonsTemplateRecentFormDescription,
        build: () => ({
            type: "fallback",
            primary: {
                type: "aggregate",
                kind: "median",
                source: {
                    type: "trimOutliers",
                    percent: 10,
                    source: {
                        type: "lastN",
                        count: 10,
                        source: completedHistory(),
                    },
                },
            },
            fallback: pb(),
        }),
    },
    {
        title: Label.CustomComparisonsTemplateSafePace,
        description: Label.CustomComparisonsTemplateSafePaceDescription,
        build: () => ({
            type: "pick",
            kind: "slower",
            first: {
                type: "addTime",
                seconds: 2,
                source: { type: "comparison", name: BEST_SEGMENTS },
            },
            second: {
                type: "aggregate",
                kind: "median",
                source: {
                    type: "lastN",
                    count: 20,
                    source: completedHistory(),
                },
            },
        }),
    },
    {
        title: Label.CustomComparisonsTemplateBlank,
        description: Label.CustomComparisonsTemplateBlankDescription,
        build: () => null,
    },
];

/**
 * The goal time "Goal pace" starts with: just under the PB, rounded down to
 * 10 seconds, but never faster than the sum of best, so a new comparison
 * doesn't start out with segments faster than the golds. Without a PB it's
 * 20 minutes.
 */
export function defaultGoal(
    personalBest: number | null,
    sumOfBest: number | null,
): number {
    if (personalBest === null || personalBest <= 0) {
        return 20 * 60;
    }
    let goal = Math.floor(personalBest / 10) * 10;
    if (sumOfBest !== null) {
        goal = Math.max(goal, Math.ceil(sumOfBest / 10) * 10);
    }
    return Math.max(goal, 10);
}

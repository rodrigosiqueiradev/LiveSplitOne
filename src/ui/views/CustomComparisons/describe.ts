/**
 * Plain-English descriptions of comparisons, for the summary under the name
 * and for "where does this time come from" in the preview. The sentences
 * are in the localization.
 *
 * Segment numbers are shown as the run's segment names where possible,
 * since that's how the runner thinks about them.
 */

import { type Language } from "../../../livesplit-core";
import { Label, resolve, resolveFormat } from "../../../localization";
import { type Block } from "./model";
import { type RangeCase, BEST_SEGMENTS, PERSONAL_BEST, RANGE } from "./blocks";
import { formatDuration } from "./time";

export interface DescribeContext {
    lang: Language | undefined;
    segmentNames: string[];
}

function segmentLabel(n: number, ctx: DescribeContext): string {
    return (
        ctx.segmentNames[n - 1] ||
        resolveFormat(Label.CustomComparisonsSegmentNumber, ctx.lang, n)
    );
}

function rangeLabel(from: number, to: number, ctx: DescribeContext): string {
    return from === to
        ? segmentLabel(from, ctx)
        : `${segmentLabel(from, ctx)}–${segmentLabel(to, ctx)}`;
}

/** A number without needless digits: 0.5 s, 2 s, 0.125 s. */
function seconds(n: number, ctx: DescribeContext): string {
    const text = Number.isInteger(n) ? String(n) : String(Number(n.toFixed(3)));
    return resolveFormat(Label.CustomComparisonsSeconds, ctx.lang, text);
}

function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

/** Turns a phrase into a sentence. */
export function sentence(text: string, lang: Language | undefined): string {
    const trimmed = capitalize(text);
    return /[.!?。！？]$/.test(trimmed)
        ? trimmed
        : resolveFormat(Label.CustomComparisonsSentence, lang, trimmed);
}

/**
 * A list of times as a noun phrase: "your last 10 times from completed
 * runs". The filters are collected while walking down to the source, so the
 * phrase reads in the order a runner would say it, not in the order the
 * blocks are nested.
 */
export function describeSamples(
    node: Block | null,
    ctx: DescribeContext,
): string {
    let lastN: number | null = null;
    const qualifiers: string[] = [];
    let current: Block | null = node;
    const { lang } = ctx;

    while (current !== null && current.type !== "segmentHistory") {
        switch (current.type) {
            case "lastN":
                lastN ??= Number(current["count"]);
                break;
            case "completedRunsOnly":
                qualifiers.push(
                    resolve(Label.CustomComparisonsQualCompleted, lang),
                );
                break;
            case "recentDays":
                qualifiers.push(
                    resolveFormat(
                        Label.CustomComparisonsQualRecentDays,
                        lang,
                        Number(current["days"]),
                    ),
                );
                break;
            case "finishedUnder":
                qualifiers.push(
                    resolveFormat(
                        Label.CustomComparisonsQualUnder,
                        lang,
                        formatDuration(Number(current["totalSeconds"])),
                    ),
                );
                break;
            case "trimOutliers":
                qualifiers.push(
                    resolveFormat(
                        Label.CustomComparisonsQualTrim,
                        lang,
                        Number(current["percent"]),
                    ),
                );
                break;
            case "atLeast":
                qualifiers.push(
                    resolveFormat(
                        Label.CustomComparisonsQualAtLeast,
                        lang,
                        Number(current["count"]),
                    ),
                );
                break;
            case "reachedSegment":
                qualifiers.push(
                    resolveFormat(
                        Label.CustomComparisonsQualReached,
                        lang,
                        segmentLabel(Number(current["segment"]), ctx),
                    ),
                );
                break;
        }
        current = (current["source"] as Block | null | undefined) ?? null;
    }

    const head =
        lastN !== null
            ? resolveFormat(Label.CustomComparisonsDescLastN, lang, lastN)
            : resolve(Label.CustomComparisonsDescAllTimes, lang);
    return [head, ...qualifiers].join(" ");
}

/** One time per segment as a noun phrase: "the median of your last 10 times". */
export function describeTimes(
    node: Block | null,
    ctx: DescribeContext,
): string {
    const { lang } = ctx;
    if (node === null) {
        return resolve(Label.CustomComparisonsDescSomething, lang);
    }
    const times = (key: string) =>
        describeTimes((node[key] as Block | null) ?? null, ctx);
    const samples = (key: string) =>
        describeSamples((node[key] as Block | null) ?? null, ctx);

    switch (node.type) {
        case "comparison":
            return node["name"] === BEST_SEGMENTS
                ? resolve(Label.CustomComparisonsDescYourGolds, lang)
                : node["name"] === PERSONAL_BEST
                  ? resolve(Label.CustomComparisonsDescYourPb, lang)
                  : resolveFormat(
                        Label.CustomComparisonsDescComparison,
                        lang,
                        String(node["name"]),
                    );
        case "attempt":
            return resolveFormat(
                Label.CustomComparisonsDescAttempt,
                lang,
                Number(node["number"]),
            );
        case "bestRecentRun":
            return resolveFormat(
                Label.CustomComparisonsDescBestRecentRun,
                lang,
                Number(node["days"]),
            );
        case "weightedAverage":
            return resolveFormat(
                Label.CustomComparisonsDescWeightedAverage,
                lang,
                samples("source"),
            );
        case "clamp":
            return resolveFormat(
                Label.CustomComparisonsDescClamp,
                lang,
                times("source"),
                times("low"),
                times("high"),
            );
        case "round":
            return resolveFormat(
                Label.CustomComparisonsDescRound,
                lang,
                times("source"),
                seconds(Number(node["step"]), ctx),
            );
        case "aggregate": {
            const label =
                {
                    median: Label.CustomComparisonsDescMedian,
                    average: Label.CustomComparisonsDescAverage,
                    min: Label.CustomComparisonsDescMin,
                    max: Label.CustomComparisonsDescMax,
                }[String(node["kind"])] ?? Label.CustomComparisonsDescMedian;
            return resolveFormat(label, lang, samples("source"));
        }
        case "percentile":
            return resolveFormat(
                Label.CustomComparisonsDescPercentile,
                lang,
                Number(node["percent"]),
                samples("source"),
            );
        case "addTime": {
            const amount = Number(node["seconds"]);
            return resolveFormat(
                amount < 0
                    ? Label.CustomComparisonsDescRemoveTime
                    : Label.CustomComparisonsDescAddTime,
                lang,
                times("source"),
                seconds(Math.abs(amount), ctx),
            );
        }
        case "scale":
            return resolveFormat(
                Label.CustomComparisonsDescScale,
                lang,
                Number(node["percent"]),
                times("source"),
            );
        case "stretchToTotal":
            return resolveFormat(
                Label.CustomComparisonsDescStretch,
                lang,
                times("source"),
                formatDuration(Number(node["totalSeconds"])),
            );
        case "blend":
            return resolveFormat(
                Label.CustomComparisonsDescBlend,
                lang,
                Number(node["percent"]),
                times("from"),
                times("to"),
            );
        case "pick":
            return resolveFormat(
                node["kind"] === "faster"
                    ? Label.CustomComparisonsDescFaster
                    : Label.CustomComparisonsDescSlower,
                lang,
                times("first"),
                times("second"),
            );
        case "fallback":
            return resolveFormat(
                Label.CustomComparisonsDescFallback,
                lang,
                times("primary"),
                times("fallback"),
            );
        case RANGE.type: {
            const arms = (node["cases"] as RangeCase[]).map((c) =>
                resolveFormat(
                    Label.CustomComparisonsDescRangeArm,
                    lang,
                    describeTimes(c.times, ctx),
                    rangeLabel(c.from, c.to, ctx),
                ),
            );
            return resolveFormat(
                Label.CustomComparisonsDescRangeOtherwise,
                lang,
                arms.join(", "),
                times("otherwise"),
            );
        }
        default:
            return resolve(Label.CustomComparisonsDescSomething, lang);
    }
}

/**
 * The summary under the name: whole sentences, with the top level structure
 * spelled out, like "Intro–Caves: your golds + 0.5 s. Other segments: the
 * median of your last 10 times from completed runs. Gaps filled from your
 * PB."
 */
export function summarize(root: Block, ctx: DescribeContext): string {
    const { lang } = ctx;
    if (root.type === "fallback") {
        const primary = (root["primary"] as Block | null) ?? null;
        return resolveFormat(
            Label.CustomComparisonsSumGapsFilled,
            lang,
            primary === null
                ? sentence(
                      resolve(Label.CustomComparisonsDescSomething, lang),
                      lang,
                  )
                : summarize(primary, ctx),
            describeTimes((root["fallback"] as Block | null) ?? null, ctx),
        );
    }
    if (root.type === RANGE.type) {
        const parts = (root["cases"] as RangeCase[]).map((c) =>
            sentence(
                resolveFormat(
                    Label.CustomComparisonsSumRangeArm,
                    lang,
                    capitalize(rangeLabel(c.from, c.to, ctx)),
                    describeTimes(c.times, ctx),
                ),
                lang,
            ),
        );
        parts.push(
            sentence(
                resolveFormat(
                    Label.CustomComparisonsSumOtherSegments,
                    lang,
                    describeTimes(
                        (root["otherwise"] as Block | null) ?? null,
                        ctx,
                    ),
                ),
                lang,
            ),
        );
        return parts.join(" ");
    }
    return sentence(describeTimes(root, ctx), lang);
}

/**
 * Where a segment's time came from, given the path livesplit-core reported,
 * like `primary.cases.0.times.source`. Notes the choices on the way, like a
 * gap filled by a fallback or which side of "the slower of" was picked.
 */
export function describeOrigin(
    root: Block,
    path: string,
    ctx: DescribeContext,
): string {
    const { lang } = ctx;
    const steps = path ? path.split(".") : [];
    const notes: string[] = [];
    let node: unknown = root;
    // "source" steps walk into blocks like "add" or "scale" that adjust the
    // time they get. The description is of the whole adjusted time, so they
    // don't change which block is described.
    let target: Block = root;

    for (const step of steps) {
        const parent = node as Block;
        if (parent.type === "fallback" && step === "fallback") {
            notes.push(resolve(Label.CustomComparisonsOriginFillingGap, lang));
        }
        if (parent.type === "pick") {
            notes.push(
                resolveFormat(
                    Label.CustomComparisonsOriginPicked,
                    lang,
                    resolve(
                        parent["kind"] === "faster"
                            ? Label.CustomComparisonsPickFaster
                            : Label.CustomComparisonsPickSlower,
                        lang,
                    ),
                ),
            );
        }
        if (parent.type === "clamp" && step === "low") {
            notes.push(resolve(Label.CustomComparisonsOriginLowLimit, lang));
        }
        if (parent.type === "clamp" && step === "high") {
            notes.push(resolve(Label.CustomComparisonsOriginHighLimit, lang));
        }
        node = Array.isArray(node)
            ? (node as unknown[])[Number(step)]
            : (node as Record<string, unknown>)[step];
        if (node === undefined || node === null) {
            return "";
        }
        if (
            typeof node === "object" &&
            !Array.isArray(node) &&
            "type" in node &&
            step !== "source"
        ) {
            target = node as Block;
        }
    }

    const text = capitalize(describeTimes(target, ctx));
    return notes.length > 0 ? `${text} (${notes.join(", ")})` : text;
}

/** Inclusive segment numbers a block names that the splits don't have. */
interface SegmentSpan {
    from: number;
    to: number;
}

/**
 * The warning for segment ranges and "reached" segments that point past the
 * end of the splits, like "Uses segment 9, but your splits have 6". A range that
 * still overlaps the splits reports only the end it names, a range that
 * starts past the end reports the whole range, and adjacent numbers are
 * joined. Returns null if every segment exists.
 */
export function segmentWarning(
    root: Block | null,
    segmentCount: number,
    lang: Language | undefined,
): string | null {
    if (root === null || segmentCount <= 0) {
        return null;
    }
    const spans: SegmentSpan[] = [];
    collectSpans(root, segmentCount, spans);
    if (spans.length === 0) {
        return null;
    }

    spans.sort((a, b) => a.from - b.from || a.to - b.to);
    const merged: SegmentSpan[] = [];
    for (const span of spans) {
        const last = merged[merged.length - 1];
        if (last === undefined || span.from > last.to + 1) {
            merged.push({ ...span });
        } else {
            last.to = Math.max(last.to, span.to);
        }
    }

    const parts = merged.map((s) =>
        s.from === s.to
            ? String(s.from)
            : resolveFormat(
                  Label.CustomComparisonsSegmentSpan,
                  lang,
                  s.from,
                  s.to,
              ),
    );
    const list =
        parts.length === 1
            ? (parts[0] ?? "")
            : resolveFormat(
                  Label.CustomComparisonsListAnd,
                  lang,
                  parts.slice(0, -1).join(", "),
                  parts[parts.length - 1] ?? "",
              );
    const single = merged.length === 1 && merged[0]?.from === merged[0]?.to;
    return resolveFormat(
        single
            ? Label.CustomComparisonsWarnSegment
            : Label.CustomComparisonsWarnSegments,
        lang,
        list,
        segmentCount,
    );
}

function collectSpans(
    node: unknown,
    segmentCount: number,
    spans: SegmentSpan[],
): void {
    if (Array.isArray(node)) {
        node.forEach((item) => collectSpans(item, segmentCount, spans));
        return;
    }
    if (node === null || typeof node !== "object") {
        return;
    }
    const block = node as Block;
    if (block.type === RANGE.type && Array.isArray(block["cases"])) {
        for (const c of block["cases"] as RangeCase[]) {
            if (c.to >= c.from && c.to > segmentCount) {
                spans.push({
                    from: c.from > segmentCount ? c.from : c.to,
                    to: c.to,
                });
            }
        }
    } else if (block.type === "reachedSegment") {
        const segment = Number(block["segment"]);
        if (segment > segmentCount) {
            spans.push({ from: segment, to: segment });
        }
    }
    Object.values(block).forEach((value) =>
        collectSpans(value, segmentCount, spans),
    );
}

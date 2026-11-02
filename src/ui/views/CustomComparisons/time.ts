/**
 * Times as LiveSplit shows and runners type them.
 */

/** The largest goal or limit time, in seconds (100 hours), like livesplit-core. */
export const MAX_TOTAL_SECONDS = 360_000;

/**
 * Parses a duration typed like LiveSplit shows times: "1:05:30", "20:00",
 * "59.5" or "20:00.25". Returns the seconds, or null if it isn't a duration
 * a goal or limit can be.
 */
export function parseDuration(text: string): number | null {
    const trimmed = text.trim();
    if (!/^\d+(:\d{1,2}){0,2}(\.\d+)?$/.test(trimmed)) {
        return null;
    }
    const [main = "", fraction = ""] = trimmed.split(".");
    const parts = main.split(":").map(Number);
    if (parts.slice(1).some((p) => p >= 60)) {
        return null;
    }
    const seconds =
        parts.reduce((total, part) => total * 60 + part, 0) +
        (fraction ? Number("0." + fraction) : 0);
    if (seconds <= 0 || seconds > MAX_TOTAL_SECONDS) {
        return null;
    }
    // The file format stores milliseconds.
    return Math.round(seconds * 1000) / 1000;
}

/** Formats a duration for a goal or limit field: 20:00, 1:05:30, 0:59.5. */
export function formatDuration(totalSeconds: number): string {
    const whole = Math.floor(totalSeconds);
    const fraction = Math.round((totalSeconds - whole) * 1000) / 1000;
    const hours = Math.floor(whole / 3600);
    const minutes = Math.floor((whole % 3600) / 60);
    const seconds = whole % 60;
    const ss =
        String(seconds).padStart(2, "0") +
        (fraction > 0 ? String(fraction).slice(1) : "");
    return hours > 0
        ? `${hours}:${String(minutes).padStart(2, "0")}:${ss}`
        : `${minutes}:${ss}`;
}

/**
 * Formats a time like LiveSplit shows them: 1:02.90, 12:52.10, 1:04:03.25.
 * Null is shown as a dash.
 */
export function formatTime(seconds: number | null): string {
    if (seconds === null) {
        return "—";
    }
    const negative = seconds < 0;
    let rest = Math.round(Math.abs(seconds) * 100);
    const hundredths = rest % 100;
    rest = Math.floor(rest / 100);
    const secs = rest % 60;
    rest = Math.floor(rest / 60);
    const minutes = rest % 60;
    const hours = Math.floor(rest / 60);
    const hh = String(hundredths).padStart(2, "0");
    let text: string;
    if (hours > 0) {
        text = `${hours}:${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}.${hh}`;
    } else if (minutes > 0) {
        text = `${minutes}:${String(secs).padStart(2, "0")}.${hh}`;
    } else {
        text = `${secs}.${hh}`;
    }
    return negative ? "−" + text : text;
}

/** Formats a difference with an explicit sign: +1.20, −0.85, ±0.00. */
export function formatDelta(seconds: number | null): string {
    if (seconds === null) {
        return "—";
    }
    if (Math.round(seconds * 100) === 0) {
        return "±0.00";
    }
    return seconds > 0 ? "+" + formatTime(seconds) : formatTime(seconds);
}

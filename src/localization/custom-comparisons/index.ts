import { type Language } from "../../livesplit-core";
import { orAutoLang } from "..";
import { english } from "./english";
import { CcLabel, type CcTexts } from "./labels";

export { CcLabel, type CcTexts };

/**
 * Translations by language. A language that isn't listed, or a text that is
 * missing from its table, falls back to English.
 */
const translations: Partial<Record<Language, Partial<CcTexts>>> = {};

/** Resolves a text of the Custom Comparisons editor for the language. */
export function resolveCc(label: CcLabel, lang: Language | undefined): string {
    return translations[orAutoLang(lang)]?.[label] ?? english[label];
}

/**
 * Resolves a text and replaces its `{0}`, `{1}`, ... placeholders with the
 * arguments.
 */
export function formatCc(
    label: CcLabel,
    lang: Language | undefined,
    ...args: (string | number)[]
): string {
    return resolveCc(label, lang).replace(/\{(\d+)\}/g, (match, index) => {
        const arg = args[Number(index)];
        return arg === undefined ? match : String(arg);
    });
}

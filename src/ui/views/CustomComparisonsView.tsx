/**
 * The runner's custom comparisons. They are one list for all their splits,
 * kept by LiveSplit One itself, so they have their own view rather than
 * being part of the layout or the splits.
 */

import React, { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { type Language } from "../../livesplit-core";
import { Label, resolve } from "../../localization";
import { type LSOCommandSink } from "../../util/LSOCommandSink";
import { type GeneralSettings } from "./MainSettings";
import { ComparisonLibrary } from "./CustomComparisons/library";
import { ComparisonList } from "./CustomComparisons/ComparisonList";
import {
    ComparisonEditor,
    type EditedComparison,
} from "./CustomComparisons/ComparisonEditor";

import classes from "../../css/CustomComparisons.module.css";

export interface Props {
    /** The comparisons, as the settings of the Custom Comparisons plugin. */
    settings: string;
    /** Called with the new settings after every change. */
    onChange: (settings: string) => void;
    /** Why the comparisons can't be calculated right now, if they can't. */
    problem: string | null;
    commandSink: LSOCommandSink;
    allComparisons: string[];
    generalSettings: GeneralSettings;
    callbacks: Callbacks;
}

interface Callbacks {
    renderViewWithSidebar(
        renderedView: React.JSX.Element,
        sidebarContent: React.JSX.Element,
    ): React.JSX.Element;
    openTimerView(): void;
}

export function CustomComparisonsView(props: Props) {
    // The comparison being edited, if any. Its editor takes the place of the
    // list, as the blocks and the preview need the room. The state lives
    // here, so that the sidebar knows about it too: going back would drop
    // the blocks being edited, so it's disabled until the comparison is saved
    // or cancelled.
    const [editedComparison, setEditedComparison] =
        useState<EditedComparison | null>(null);
    return props.callbacks.renderViewWithSidebar(
        <View
            {...props}
            editedComparison={editedComparison}
            onEditComparison={setEditedComparison}
        />,
        <SideBar
            callbacks={props.callbacks}
            lang={props.generalSettings.lang}
            editingComparison={editedComparison !== null}
        />,
    );
}

function View({
    settings,
    onChange,
    problem,
    commandSink,
    allComparisons,
    generalSettings,
    editedComparison,
    onEditComparison,
}: Props & {
    editedComparison: EditedComparison | null;
    onEditComparison: (comparison: EditedComparison | null) => void;
}) {
    const lang = generalSettings.lang;
    const run = commandSink.getRun();
    // The library keeps the latest settings itself, so a change is visible
    // right away instead of only once React passes the new settings down.
    const library = useRef<ComparisonLibrary | null>(null);
    if (library.current === null) {
        library.current = new ComparisonLibrary(settings, run, onChange);
    }

    if (editedComparison !== null) {
        // A comparison can use any comparison of the run and the other custom
        // comparisons, but not itself.
        const names = new Set([
            ...allComparisons,
            ...library.current.state().comparisons.map((c) => c.name),
        ]);
        if (editedComparison.index !== null) {
            names.delete(editedComparison.name);
        }
        return (
            <ComparisonEditor
                comparison={editedComparison}
                library={library.current}
                run={run}
                comparisons={[...names]}
                allComparisons={allComparisons}
                initialMethod={commandSink.currentTimingMethod()}
                lang={lang}
                onClose={() => onEditComparison(null)}
            />
        );
    }

    return (
        <div className={classes.view}>
            <h1 className={classes.viewTitle}>
                {resolve(Label.CustomComparisons, lang)}
            </h1>
            {problem !== null && (
                <p className={classes.viewProblem}>{problem}</p>
            )}
            <ComparisonList
                library={library.current}
                run={run}
                method={commandSink.currentTimingMethod()}
                lang={lang}
                onEdit={onEditComparison}
            />
        </div>
    );
}

function SideBar({
    callbacks,
    lang,
    editingComparison,
}: {
    callbacks: Callbacks;
    lang: Language | undefined;
    editingComparison: boolean;
}) {
    return (
        <>
            <h1>{resolve(Label.CustomComparisons, lang)}</h1>
            <hr />
            <button
                disabled={editingComparison}
                onClick={(_) => callbacks.openTimerView()}
            >
                <ArrowLeft strokeWidth={2.5} />
                {resolve(Label.Back, lang)}
            </button>
            {editingComparison && (
                <p className={classes.sidebarHint}>
                    {resolve(Label.CustomComparisonsSidebarEditingHint, lang)}
                </p>
            )}
        </>
    );
}

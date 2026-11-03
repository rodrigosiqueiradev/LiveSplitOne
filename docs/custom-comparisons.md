# Custom Comparisons in LiveSplit One

Custom comparisons are comparisons you build yourself out of blocks, like
"the median of my last 10 finished runs, never faster than my golds, gaps
filled from my PB". Once saved, they show up next to the Personal Best, Best
Segments and the other comparisons, and every component that works with a
comparison works with them.

They use the same file format as the desktop LiveSplit component *Custom
Comparisons*, so a comparison made in one opens in the other and gives the
same times.

This guide is for runners. How the feature is built is described in
livesplit-core's [`CUSTOM-COMPARISONS.md`](https://github.com/rodrigosiqueiradev/livesplit-core/blob/comparison-plugins/CUSTOM-COMPARISONS.md).

## Contents

1. [Where to find them](#1-where-to-find-them)
2. [Your first comparison](#2-your-first-comparison)
3. [Using a custom comparison](#3-using-a-custom-comparison)
4. [The list of comparisons](#4-the-list-of-comparisons)
5. [The block editor](#5-the-block-editor)
6. [How blocks fit together](#6-how-blocks-fit-together)
7. [Every block](#7-every-block)
8. [The preview](#8-the-preview)
9. [Import, export and sharing](#9-import-export-and-sharing)
10. [Coming from the desktop LiveSplit or an older LiveSplit One](#10-coming-from-the-desktop-livesplit-or-an-older-livesplit-one)
11. [Rules worth knowing](#11-rules-worth-knowing)
12. [Troubleshooting](#12-troubleshooting)

## 1. Where to find them

Open the menu next to the timer and click **Custom Comparisons**. It sits
right below the **Real Time** and **Game Time** buttons.

Your custom comparisons are **one list for all your splits**. They aren't
stored in your splits or in your layout but in LiveSplit One itself, on this
device. Loading other splits doesn't change them: every list of splits you
open gets the same custom comparisons.

Changes are saved the moment you make them. There is no separate save step
for the list. To take your comparisons to another device or browser, use
**Export All** and import the file there (see
[section 9](#9-import-export-and-sharing)).

Click **Back** to return to the timer. While you're editing a comparison,
Back is disabled until you save or cancel it, so you can't lose your blocks
by accident.

## 2. Your first comparison

1. Click **New…**.
2. Pick a starting point. Every one is a finished comparison you can use as
   it is or change:

   | Starting point | What it is |
   | --- | --- |
   | **Goal pace** | The median of your last 10 completed runs (gaps filled from your PB), stretched to finish exactly in a goal time. The goal starts just under your PB, rounded down to 10 seconds, but never below your sum of best. Without a PB it's 20:00. |
   | **Realistic pace** | Percentile 70 of your completed runs from the last 30 days, if a segment has at least 5 of them, otherwise your PB: times you beat about 70 % of the time. |
   | **Recent form** | The median of your last 10 completed runs, without the fastest and slowest 10 %, otherwise your PB. |
   | **Safe pace** | The slower of your golds + 2 s and the median of your last 20 completed runs, so it's never unrealistically fast. |
   | **Blank** | No blocks at all. |

3. Give it a name and change the blocks if you like. The preview below the
   blocks shows the times it gives for your current splits.
4. Click **Save** (or press Ctrl+S / ⌘S).

The new comparison is now in the list and available as a comparison.

## 3. Using a custom comparison

A saved custom comparison is a comparison like any other:

- Pick it under **Compare Against** in the timer's menu, or switch to it with
  the hotkeys for the previous and next comparison.
- Components that let you pick a comparison (Splits columns, Delta, Previous
  Segment, Current Pace, ...) can use it.

Custom comparisons are recalculated between attempts, just like Best
Segments or Average Segments. They don't change during an attempt.

When you load other splits, your custom comparisons are calculated for those
splits right away. If you were comparing against a custom comparison that no
longer exists (because you removed or renamed it), the timer switches to the
Personal Best.

## 4. The list of comparisons

The toolbar holds everything that adds comparisons:

| Button | What it does |
| --- | --- |
| **New…** | Makes a new comparison from a starting point. |
| **Import…** | Adds comparisons from a file. See [section 9](#9-import-export-and-sharing). |
| **Paste…** | Adds a comparison from text someone shared, for example in a chat. |
| **Export All…** | Saves all your comparisons as one file. |

Each row has an **Edit…** button (double-clicking the row does the same) and a
**⋮** menu with:

- **Rename…**: renames it and updates the other comparisons that use it, so
  they keep working.
- **Duplicate**: makes a copy named "… (Copy)".
- **Move Up** / **Move Down**: the order here is the order they are offered
  in as comparisons.
- **Export…**: saves this one comparison as a `.json` file.
- **Copy as Text**: copies it as a single line of text you can paste into a
  chat or forum post.
- **Remove**: removes it. If other comparisons use it, you're told how many,
  because they stop working without it.

Below a comparison's name you may see:

- **Used by N other comparisons**: other comparisons build on this one.
- A problem, like a name that clashes with a comparison stored in your
  current splits, or a loop between comparisons. The comparison is kept, but
  it doesn't show up as a comparison until the problem is fixed.
- **Can't be read**: the comparison was made with a newer version, or the
  file was damaged. It's kept exactly as it is and can still be exported,
  copied, moved and removed, but not edited or renamed.

### Names

A name has to be unique (ignoring upper and lower case), at most 64
characters, can't start with `[Race]`, and can't be one of LiveSplit's own
comparisons: Personal Best, None, Best Segments, Best Split Times, Average
Segments, Median Segments, Worst Segments, Balanced PB, Latest Run, and Golf
HCP (which the desktop LiveSplit has).

A custom comparison named like a comparison stored in the splits you have
open (say, a "World Record" you typed into the Splits Editor) isn't added to
those splits, just like on the desktop. The list shows that problem next to
it. It still works with other splits that don't have such a comparison.

## 5. The block editor

The editor takes the place of the list while you edit. From top to bottom:

- **Save**, **Cancel**, **Undo** and **Redo**, and the comparison's
  **Name**. Ctrl+Z, Ctrl+Y (or Ctrl+Shift+Z) and Ctrl+S work too, also with
  ⌘ on a Mac. Save is disabled until the comparison is complete and its name
  is allowed; hover over it to see why. Cancel asks before throwing away
  changes.
- A one-line **summary** of what the blocks calculate, in plain words.
- The **blocks**, as nested rows. The top row, "this comparison is", holds
  everything else.
- The **preview** (see [section 8](#8-the-preview)).

### Adding blocks

Every empty slot has a **Choose a block…** button that opens the block
picker. The picker only offers the blocks that fit that slot, grouped by
category, and has a search field.

On a wide screen, the **Blocks** rail lists every block. Drag one onto an
empty slot, or onto a block to replace it. Clicking one in the rail puts it
into the first empty slot it fits.

### Changing blocks

Each block has an **ⓘ** button that explains what it does and a menu with:

- **Preview This Block**: shows the times of just this block in the preview,
  which helps with understanding a big comparison piece by piece.
  **Show the Whole Comparison** goes back.
- **Replace With…**: swaps the block for another one that fits.
- **Put Inside…**: wraps the block in a new one, for example to put
  "add 2 s per segment to" around it.
- **Remove, Keep What's Inside**: the opposite of Put Inside.
- **Remove**: removes the block and everything in it.

Drag a block by its handle to move it to another slot, or onto another block
to swap them.

The numbers and times in a block are edited right in the row. Times are typed
like `20:00` or `1:05:30`. Segments are picked from your splits by name.

## 6. How blocks fit together

There are two kinds of blocks, and the shape of a block's icon tells them
apart:

- **A list of times for each segment.** The segment history is such a list:
  every time you ever got on each segment. Filters take a list and give a
  shorter list.
- **One time for each segment.** That's what a comparison needs in the end.
  Aggregates (median, average, percentile, ...) turn a list into one time per
  segment. Math and control blocks take one time per segment and give one
  time per segment.

So a typical comparison reads from the inside out:

```
this comparison is
└─ use
   ├─ median of
   │  └─ last 10 times of
   │     └─ from completed runs only
   │        └─ all my times for each segment
   └─ if empty, use
      └─ comparison Personal Best
```

"All my times, only from completed runs, the last 10 of them, the median of
those; where a segment has no times, the PB."

Everything is calculated **per segment** and only added up into split times
at the very end.

## 7. Every block

Blocks are grouped the way the picker shows them. The block's text is what
you see in the editor. The version is the file format version that
introduced the block (see [section 11](#11-rules-worth-knowing)).

### Sources: where the times come from

| Block | Gives | What it does | Version |
| --- | --- | --- | --- |
| **all my times for each segment** | list | Every time you've recorded for each segment. Skipped segments, and the combined segment right after a skip, are left out. | 1 |
| **comparison** *name* | one time | An existing comparison, segment by segment: your PB, a built-in one like Best Segments (your golds), one stored in your splits like a World Record, or another custom comparison. Built-ins work even if they're switched off. | 1 |
| **attempt #** *number* | one time | The segments of one past attempt, by its number in the attempt history. Empty where that run skipped a split or reset. | 3 |
| **my best run from the last** *N* **days** | one time | The segments of your fastest finished run from the last N days: a "recent PB" that moves as you play. Empty if no run finished in that time. | 4 |

### Filters: which runs count (list in, list out)

| Block | What it does | Version |
| --- | --- | --- |
| **last** *N* **times of** | Keeps the N most recent times of each segment. Counts times that segment was completed, not attempts. | 1 |
| **from completed runs only** | Keeps only times from attempts that finished the whole run. | 1 |
| **from the last** *N* **days** | Keeps only times from attempts that ended in the last N days, so old times stop counting. Attempts without a date are left out. | 2 |
| **drop the fastest and slowest** *P* **% of** | Drops that share (up to 45 %) of each segment's fastest and slowest times, to remove flukes. Rounded down, so with few times nothing is dropped. The remaining times stay in order, so a "last N" around it still means the most recent ones. | 3 |
| **from runs that finished under** *time* | Keeps only times from runs that finished faster than this, so only your good runs count. | 3 |
| **only if there are at least** *N* **times in** | Makes a segment empty if it has fewer than N times, so you can fill it with "if empty, use" instead of trusting too little data. | 3 |
| **from runs that reached** *segment* | Keeps only times from attempts that got at least as far as this segment (a time for it, or a skip). Like "completed runs only", for games where most runs reset early. | 4 |

### Aggregates: a list into one time

A segment without any times stays empty.

| Block | What it does | Version |
| --- | --- | --- |
| **median / average / best (min) / worst (max) of** | The middle, mean, fastest or slowest time. For an even number of times, the median is the mean of the two middle ones. | 1 |
| **percentile** *P* **of** | 0 is your fastest time, 100 your slowest and 50 the median, interpolating between neighbouring times. 70 means: you beat this about 70 % of the time. | 2 |
| **recent-weighted average of** … **weight halves every** *N* **older times** | An average where recent times count more. The newest time counts fully, one N times older counts half, 2N times older a quarter, and so on. | 4 |

### Math: adjust one time per segment

| Block | What it does | Version |
| --- | --- | --- |
| **add** *S* **s per segment to** | Adds (or, if negative, removes) up to an hour from every segment. Never goes below zero. | 1 |
| *P* **% of** | Scales every segment (1 % to 1000 %). 103 % is 3 % slower, 97 % is 3 % faster. | 1 |
| **stretch to finish in** *time* | Scales every segment by the same amount so the whole run adds up to exactly the goal time. If any segment is empty the whole result is empty, so fill gaps first. | 2 |
| **round to** *step* | Rounds every segment to the nearest step (like 0.1 s or 1 s; halves round up), so the split times are tidy too. | 4 |

### Control: combine rules

| Block | What it does | Version |
| --- | --- | --- |
| **use** … **if empty, use** … | Uses the first rule, and fills only the segments it leaves empty from the second one. | 1 |
| **for segments … use … otherwise …** | Different rules for different ranges of segments. Add as many ranges as you need (up to 100); the first range that contains a segment wins, and "otherwise" covers the rest. | 1 |
| *P* **% of the way from** … **to** … | Mixes two rules per segment. 0 % is all the first, 100 % all the second. Empty where either side is empty. | 2 |
| **the slower / faster of** … **and** … | Per segment, whichever of the two is slower (or faster). If one has no time for a segment, the other is used. Ties go to the first. | 2 |
| **keep** … **never faster than** … **never slower than** … | Holds each segment between two limits, like never faster than your golds and never slower than your PB. A limit that has no time for a segment doesn't apply there. If the limits cross, "never faster than" wins. | 4 |

## 8. The preview

The preview shows, for every segment of the splits you have open, the
segment time and split time the comparison gives, and how far it is from
another comparison:

- Switch between **Real Time** and **Game Time** at the top.
- **Difference from** picks the comparison to compare with (the Personal Best
  at first).
- Segments faster than your gold are marked. That's allowed, but you're
  warned, since such a pace may not be realistic.
- The line below the table tells you the final time, how it compares, and
  your sum of best.
- **Click a row** to see where its time comes from: the block that produced
  it is highlighted, through the choices made by "if empty, use", segment
  ranges, faster/slower and keep-between blocks (for example "filling a gap"
  or "held at the never faster than limit").
- If a segment is empty, every split after it is empty too, and the preview
  tells you so.

Warnings about the comparison itself also show up here, for example a range or
a "reached segment" block pointing past the end of your splits.

The preview needs every slot filled. Until then it asks you to fill the empty
slots.

## 9. Import, export and sharing

### Export

- **Export All…** saves your whole list as `Custom Comparisons.json`. This is
  the file to keep as a backup or to move your comparisons to another device.
- **Export…** in a comparison's ⋮ menu saves just that one, as
  `<name>.json`. The desktop LiveSplit can import this file too.
- **Copy as Text** copies one comparison as a single line, which survives
  being pasted into Discord or a forum post.

### Import

**Import…** accepts three kinds of files:

| File | What is added |
| --- | --- |
| A list made with **Export All** (`{"comparisons": [...]}`) | Every comparison in it. |
| A single comparison (`.json`), from LiveSplit One or the desktop LiveSplit | That comparison. |
| A desktop LiveSplit layout (`.lsl`) with the Custom Comparisons component | Every comparison stored in that component (in all of them, if the layout has more than one). |

**Paste…** adds a single comparison from text.

Imported comparisons are **added** to your list; nothing is replaced. If a
name is already taken, you're asked for another one (a free one is
suggested). Cancel to stop importing the rest of the file.

A comparison that can't be read (made with a newer version, say) is rejected
with a message that says exactly where the problem is, like
`root.source.count: must be a whole number from 1 to 10000.` An `.lsl` file
without custom comparisons, or one that isn't a layout, is reported as such.

## 10. Coming from the desktop LiveSplit or an older LiveSplit One

### From the desktop LiveSplit

On the desktop, custom comparisons live in the layout's Custom Comparisons
component. To bring them over, either:

- import your `.lsl` layout file with **Import…** in Custom Comparisons, or
- export each comparison on the desktop and import the `.json` files.

Importing an `.lsl` there doesn't change your LiveSplit One layout; only the
custom comparisons are taken. The desktop editor's block positions are kept
in the file, so a comparison you don't change opens on the desktop exactly as
it was. Once you change a comparison's blocks in LiveSplit One, the desktop
editor arranges them itself.

### From an older LiveSplit One build with the Custom Comparisons component

Earlier builds of this feature kept custom comparisons in a Custom
Comparisons layout component. That component no longer exists. Nothing is
lost:

- The first time LiveSplit One starts with a stored layout that still has
  the component, its comparisons become your list, and the component is
  taken out of the layout. This only happens if you don't have a list yet.
- Importing a LiveSplit One layout (`.ls1l`) that has the component works
  too: the component is left out, so the layout loads. To get its
  comparisons, import its exported list or the single comparisons.

## 11. Rules worth knowing

These rules are the same as on the desktop, so a comparison gives the same
times in both:

- **Nothing is made up.** An empty segment stays empty unless "if empty,
  use" fills it. Once a segment is empty, every later split time is empty
  too, so a comparison never shows split times that don't add up.
- **Skips follow LiveSplit's own rules.** A skipped segment is left out of
  the history, and so is the segment right after it, because its recorded
  time covers both.
- **Only your own attempts count.** Times that were made up when segments
  were added or the history was imported aren't part of "all my times".
- **"Last 30 days"** counts from now, using the time an attempt ended (or
  started, if no end was recorded).
- **Comparisons can use each other.** A loop (A uses B, B uses A) is an
  error and leaves the comparisons involved empty.
- **A broken comparison never affects the timer.** If a comparison can't be
  calculated, it's simply empty.
- **File versions.** A comparison is saved with the lowest format version
  that has all its blocks (see the tables above), so comparisons that don't
  use newer blocks still open in older releases of the desktop component.
  LiveSplit One reads versions 1 to 4.

## 12. Troubleshooting

**My comparison isn't listed under Compare Against.**
Look at the list in Custom Comparisons. A problem under its name says why:
usually its name clashes with a comparison stored in your current splits, or
it can't be read. Rename it, or remove the clashing comparison in the Splits
Editor.

**"The custom comparisons couldn't be loaded" at the top of the list.**
LiveSplit One couldn't load the part that calculates them (the message says
why, for example a failed download). Your list is still saved and can be
edited and exported. Reload the page.

**A comparison is empty for some segments.**
Click the row in the preview to see where the time comes from. Usually a
filter left no times for that segment. Add "use … if empty, use" with a
backup like your PB.

**The whole comparison is empty.**
Either the comparison has an error (the preview shows it, like a comparison
that doesn't exist or an attempt number your splits don't have), or a
"stretch to finish in" met an empty segment. Fill the gaps before stretching.

**My comparisons are gone on another device or browser.**
They're stored per device and browser. Use **Export All** and **Import** to
move them.

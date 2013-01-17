# Design guidelines

One of the ways we'd like to distinguish this GCS is by making it very user-resiliant, meaning that different people can pick it up and use it.  Design isn't beauty, but we want this to be attractive.  This file outlines some general principles we should keep in mind, and include in source code reviews.

## Device + interaction notes

Assume moderately-high-res tablet + touch screen used with a finger (resolution, 1280x960), along with high resolution desktop used with mouse/trackpad (1920x1280).

Never assume a hover indicator is available.  It won't be.

## Fonts

The project uses Source Sans Pro.  There should be a strong technical argument supporting the use of additional fonts (say, monospace fonts -- do we need that, really?).  Any graphics/SVG that also include text should use Source Sans Pro as well.

Font weights should be specified in terms of weight, not "bold."  Available weights are 200-900, where 400 should be considered default and 600 a wee heavy.  Don't combine more than 3 weights on one screen without good reason.  Consider the weight of the text in relationship to the size of the font: small fonts in light weights vanish.

It's not clear why italics are useful in the user interface elements, though they can be part of blocks of text (which, would exist why? not sure.  it's a GCS, not a goddamned book).

## Colors

Color conveys information, and in this program, colors should be identified by purpose, not color.  ```Less``` variables should be defined in the ```/assets/less/variables.less``` file.  There should be *no* color references hardcoded outside of that file.  (Awkward but workable way to access these named colors at runtime, before the *.less are compiled, will be to put some elements on the page with all the colors (a palette), hide them, then access their color value via some mixin to JQuery.)

When overlaying colored text or images on a map, shadows or other appropriate means should be used to ensure they remain visible.

## User interface components

We use Bootstrap for UI controls.

Buttons need to be big enough to touch.

There must never be scroll bars.  There is always a better way.

Don't show "nulls."  This means that if a device isn't connected, altitude/ground speed/etc shouldn't be displayed.  Only display *real* zeros.

Always show a "What is happening now" combined with a "What can happen next?"  This answers a user's question, "What is going on, and what could/should I do?"  _Always_ means _always_.  (This will fail, but hey.)

Don't show dead text.  Dead text are words that stay on the page but don't provide unique information.

Don't duplicate information on the screen.  Don't duplicate controls (x button + "close" button?  foolish).

## Programmer behavior

Programmer behavior means that, as coders, we have a sort of tendency to mess around with the design in one way or another without noticing we're doing so.  Here's things to avoid:

Tons of ```id```s used to achieve styling results.

Not reusing widget code implemented elsewhere (Bootstrap, etc).

Implementing a "feature" without being asked: for example, adding extra information to a display may seem obvious/helpful but may not help anyone, while it adds clutter to the existing display.  Features are generally shit.  Wait until someone is paying you extra.  Log ideas somewhere and review them with peers + beers, instead.


# Design guidelines

One of the ways we'd like to distinguish this GCS is by making it very user-resiliant, meaning that different people can pick it up and use it.  Design isn't beauty, but we want this to be attractive.  This file outlines some general principles we should keep in mind, and include in source code reviews.

## Fonts

The project uses Source Sans Pro.  There should be a strong technical argument supporting the use of additional fonts (say, monospace fonts -- do we need that, really?).  Any graphics/SVG that also include text should use Source Sans Pro as well.

Font weights should be specified in terms of weight, not "bold."  Available weights are 200-900, where 400 should be considered default and 600 a wee heavy.  Don't combine more than 3 weights on one screen without good reason.  Consider the weight of the text in relationship to the size of the font: small fonts in light weights vanish.

It's not clear why italics are useful in the user interface elements, though they can be part of text.

## Colors

Color conveys information, and in this program, colors should be identified by purpose, not color.  ```Less``` variables should be defined in the ```/assets/less/variables.less``` file.  There should be *no* color references hardcoded outside of that file.  (Awkward but workable way to access these named colors at runtime, before the *.less are compiled, will be to put some elements on the page with all the colors (a palette), hide them, then access their color value via some mixin to JQuery.)

When overlaying colored text or images on a map, shadows or other appropriate means should be used to ensure they remain visible.



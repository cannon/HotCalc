# HotCalc

![alt text](https://i.imgur.com/19NxR7E.png "screenshot")

Chrome extension to automatically solve math expressions typed into text fields. Works with TurboTax.

I came up with idea this while doing taxes - I kept having to calculate things like "$1324 per month times 12 months" using the windows calculator and thought "Wouldn't it be nice to just type `=1324*12` right into TurboTax and have the solution put itself there?"

So how this extension works is you type something like `=(6+3)*5` (note the equals sign as the first character) into a text field and when you tab to the next one or click out, the solution to that will automatically replace the content of the text field. The code to do that in a regular webpage is trivial, but it took me a good 2 hours to make it work with TurboTax because of all their new-age responsiveness voodoo.

**DISCLAIMER: USE THIS EXTENSION AT YOUR OWN RISK; I AM NOT RESPONSIBLE FOR ANY LOSSES/DAMAGES DUE TO ERRORS THAT THIS EXTENSION CAUSES. THE WAY IT WORKS AROUND TURBOTAX AUTOCORRECT IS HACKY AND I SUSPECT IT WILL CAUSE TROUBLE**

# Installation

Download as a zip and unzip, then go into the Chrome Settings -> Extensions menu, click "load unpacked extension" (you might need to enable developer mode first), and select the folder containing these files.

Submission to the Chrome app store is pending approval.

---
layout: page
title: Code
---
I've got lots of little projects [shared on Github](github.com/stevenbell/); below are brief descriptions of some of the more useful ones.

# animatetiming -- Generate signal propagation diagrams using VHDL+SVG
[animatetiming on Github](https://github.com/stevenbell/animatetiming)

The original impetus for this project was trying to create an in-class demonstration of why a carry-lookahead adder is faster than a ripple-carry adder.  Animating a circuit of realistic size would have been hopelessly tedious, so I wrote a little Python code to read a VCD file and generate a series of frames using SVG.  Essentially, you define nets as groups in your SVG file and write a short JSON file which maps the VCD net names to SVG group names.  Then the script reads the VCD and colors the SVG accordingly for each timestep.

# Script to upload QTI to Canvas

[upload_canvas_qti.py](https://gist.github.com/stevenbell/80d5f14b608e3392c068e822da48566d) (Github gist)

This script automates the upload and configuration of a QTI quiz to Canvas.

I use the excellent [text2qti](https://github.com/gpoore/text2qti) tool to  quickly write my course quizzes in a simple text-based format and convert them to QTI which Canvas understands.  Then I wrote the above `upload_canvas_qti` script to push it to Canvas.

# csirx -- CSI receiver for Raspberry Pi cameras
[csirx on Github](https://github.com/stevenbell/csirx)

Xilinx's CSI receiver IP is complex and proprietary, and I needed a simple receiver that would work with the Raspberry Pi camera.  This module does that --- and not much else.  It does have a simple control register which allows it to drop frames and to generate interrupts on frame start/end (both of which are fantastically useful for doing sub-frame synchronization).

# mkpdfs.py -- convert an Inkscape SVG into presentation slides
[mkpdfs.py](https://gist.github.com/stevenbell/909c79c9396f932942476e658b38d80c) (Github gist)

I use [Inkscape](http://inkscape.org) to create most of my presentation slides, since it generally makes it easy to do the things you should (explanatory figures, diagrams, and other visuals) and hard to do the things you shouldn't (slides full of bulleted lists).
Basically, every layer in the document becomes a slide in the resulting presentation.  Read the comments at the top of the file for a more complete description.


# scheduleinbox.gs -- Make Gmail arrive on a schedule
[scheduleinbox.gs](https://gist.github.com/stevenbell/4be4ba8f7ace2089c9f085ddac22347f) (Github gist)

I find I am much more productive with email if I check it only a few times a day and deal with it all at once, rather than breaking my focus every few minutes when a new message arrives.  I used Inbox Pause (now part of Boomerang for Gmail) for a while, but it wasn't as flexible as I wanted and I couldn't justify the cost once it was rolled into Boomerang.

This Google Apps script creates a separate label and adds a filter which moves all incoming mail to that filter.  On a schedule (defined at the top of the script), mail is moved from this label back to your inbox.  There's no UI, just edit the script to fit your needs.


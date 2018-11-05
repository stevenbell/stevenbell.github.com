---
layout: page
title: Code
---
# mkpdfs.py -- convert an Inkscape SVG into presentation slides
[mkpdfs.py](https://gist.github.com/stevenbell/909c79c9396f932942476e658b38d80c) (Github gist)

I use [Inkscape](http://inkscape.org) to create most of my presentation slides, since it generally makes it easy to do the things you should (explanatory figures, diagrams, and other visuals) and hard to do the things you shouldn't (slides full of bulleted lists).
Basically, every layer in the document becomes a slide in the resulting presentation.  Read the comments at the top of the file for a more complete description.


# scheduleinbox.gs -- Make Gmail arrive on a schedule
[scheduleinbox.gs](https://gist.github.com/stevenbell/4be4ba8f7ace2089c9f085ddac22347f) (Github gist)

I find I am much more productive with email if I check it only a few times a day and deal with it all at once, rather than breaking my focus every few minutes when a new message arrives.  I used Inbox Pause (now part of Boomerang for Gmail) for a while, but it wasn't as flexible as I wanted and I couldn't justify the cost once it was rolled into Boomerang.

This Google Apps script creates a separate label and adds a filter which moves all incoming mail to that filter.  On a schedule (defined at the top of the script), mail is moved from this label back to your inbox.  There's no UI, just edit the script to fit your needs.


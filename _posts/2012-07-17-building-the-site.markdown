---
layout: post
title: Building the site
tags: Technical
---
I've built a personal website several times, and while each one was a learning experience, I was never really happy with the end result.  This time, I actually like what I've got, and I intend to make it last longer than my other attempts.

I enjoy graphic design, but I'm not very good at designing good-looking layouts from scratch.  In my past website attempts, I generally dove right into the HTML and CSS, designing as I went.  Each time, I had a vague picture in my head, but as I tried to code it, it just didn't come together and I always settled for something less.

So this time, I started by creating the page in [Inkscape](http://www.inkscape.org), and went through several iterations there before I wrote any code.

I started with some colors and a layout I had in my head:

![First iteration](/assets/posts{{ page.id }}/sketch1.png)

But it didn't really work like I had hoped, so I tried some different colors.

![Second iteration](/assets/posts{{ page.id }}/sketch2.png)

And back to red:

![Third iteration](/assets/posts{{ page.id }}/sketch3.png)

At this point, I was out of ideas, so I took a look at some WordPress themes for inspiration.  I liked a couple of minimalist themes like [Origin](http://theme.wordpress.com/themes/origin/), so I went in that direction.

![Fourth iteration](/assets/posts{{ page.id }}/sketch4.png)

I tinkered a little more, and viola!

![Fifth iteration](/assets/posts{{ page.id }}/sketch5.png)

With the layout nailed down, I started building a template page with HTML and CSS.  I started using [Sass](http://sass-lang.com) instead of plain CSS, because as a programmer, the idea of hard-coding a constant (the accent color, or the font) in multiple places drives me nuts.

Then I sliced up my template and turned it into a Jekyll layout.  Finally, I wrote the actual pages in [markdown](http://daringfireball.net/projects/markdown), and pushed it to the web with Git.  And there you have it!


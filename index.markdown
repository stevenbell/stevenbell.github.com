---
layout: page
title: Welcome
---
# Welcome!
Welcome to my personal website, which is a somewhat eclectic repository of projects and bits of software mixed with a blog of musings, writings and rants.

# Recent blog posts

{% for post in site.posts | limit: 3 %}
## {{ post.title }}
  {{ post.content | strip_html | truncatewords: 75 }}
 
  <div class="postinfo">

  Posted {{ post.date | date_to_string }} &nbsp; &nbsp; <a href="{{post.url}}">Read more...</a>

  </div>
 
{% endfor %}




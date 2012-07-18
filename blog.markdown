---
layout: page
title: Blog
---
# Blog posts

{% for post in site.posts %}
## {{ post.title }}
  {{ post.content | strip_html | truncatewords: 75 }}

  <div class="postinfo">

  Posted {{ post.date | date_to_string }} &nbsp; &nbsp; <a href="{{post.url}}">Read more...</a>

  </div>
{% endfor %}



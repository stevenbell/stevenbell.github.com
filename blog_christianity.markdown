---
layout: page
title: Blog - Christianity
---
<h1>Blog - Christianity</h1>

{% include blogcategories.html %}

{% for post in site.categories.christianity | limit:5 %}
## {{ post.title }}
  {{ post.content | strip_html | truncatewords: 75 }}

  <div class="postinfo">

  Posted {{ post.date | date_to_string }} &nbsp; &nbsp; <a href="{{post.url}}">Read more...</a>

  </div>
{% endfor %}

Older posts are in the [archive](blogarchive.html).


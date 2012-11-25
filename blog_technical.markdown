---
layout: page
title: Blog - Technical
---
<h1>Blog - Technical</h1>

{% include blogcategories.html %}

{% for post in site.categories.technical %}
## {{ post.title }}
  {{ post.content | strip_html | truncatewords: 75 }}

  <div class="postinfo">

  Posted {{ post.date | date_to_string }} &nbsp; &nbsp; <a href="{{post.url}}">Read more...</a>

  </div>
{% endfor %}



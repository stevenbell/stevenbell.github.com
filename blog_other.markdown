---
layout: page
title: Blog - Other 
---
<h1>Blog - Everything else</h1>

{% include blogcategories.html %}

{% for post in site.categories.other %}
## {{ post.title }}
  {{ post.content | strip_html | truncatewords: 75 }}

  <div class="postinfo">

  Posted {{ post.date | date_to_string }} &nbsp; &nbsp; <a href="{{post.url}}">Read more...</a>

  </div>
{% endfor %}



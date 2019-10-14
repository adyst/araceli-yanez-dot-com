import React from "react"
import { Link } from "gatsby"

const PostPreview = ({ post }) => (
  <article class="media" data-aos="fade-up" data-aos-duration="500">
    <div class="media-content">
      <div class="content">
        <h2>
          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
        </h2>
        {post.frontmatter.description}
      </div>
    </div>

    <div class="media-right">
      <figure class="image">
        <img class="is-rounded" src="https://bulma.io/images/placeholders/480x480.png" alt="project details"/>
      </figure>
    </div>
  </article>
)

export default PostPreview
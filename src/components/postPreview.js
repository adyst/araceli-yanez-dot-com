import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const PostPreview = ({ post }) => (
  <article className="media" data-aos="fade-up" data-aos-duration="500">
    <div className="media-content">
      <div className="content">
        <h3>
          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
        </h3>
        {post.frontmatter.description}
      </div>
    </div>

    <div className="media-right">
      <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} alt="project details"/>
    </div>
  </article>
)

export default PostPreview
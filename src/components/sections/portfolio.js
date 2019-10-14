import React from "react"

import PostPreview from "../postPreview"

const Portfolio = ({ posts }) => (
  <section id="portfolio" class="section">
    <div class="container">
      <section class="posts">
        {posts.map((post, index) => {
          return (
            <PostPreview post={post} key={index}/>
          )
        })}
      </section>
    </div>
  </section>
)


export default Portfolio

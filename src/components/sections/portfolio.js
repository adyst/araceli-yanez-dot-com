import React from "react"

import PostPreview from "../postPreview"

const Portfolio = ({ posts }) => (
  <section id="portfolio" className="section">
    <div className="container" data-aos="fade-in">
      <h2 className="title">Projects</h2>
      <section className="posts">
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

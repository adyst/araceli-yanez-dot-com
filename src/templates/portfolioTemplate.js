import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

function PortfolioTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return(
    <Layout>
      <section class="post section">
        <div class="container">
          <header>
            <h1>{frontmatter.title}</h1>
            <div class="description">
              <em>{frontmatter.description}</em>
            </div>
            <div class="tags">
              {frontmatter.tags.map(tag => <span class="tag">{tag}</span>)}
            </div>
            <hr/>
          </header>
          <div dangerouslySetInnerHTML={{__html: html}}/>
        </div>
      </section>
    </Layout>
  )
}

export default PortfolioTemplate
export const portfolioQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      html
      frontmatter {
        date
        path
        title
        description
        tags
      }
    }
  }
`


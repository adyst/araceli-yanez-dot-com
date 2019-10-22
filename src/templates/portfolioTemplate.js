import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

function PortfolioTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return(
    <Layout>
      <section className="post section">
        <div className="container">
          <header>
            <h1>{frontmatter.title}</h1>
            <div className="description">
              <em>{frontmatter.description}</em>
            </div>
            <div className="tags">
              {frontmatter.tags.map(tag => <span className="tag">{tag}</span>)}
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


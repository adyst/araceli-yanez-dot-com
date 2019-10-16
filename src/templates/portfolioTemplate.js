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
          <h1>{frontmatter.title}</h1>
          <em>{frontmatter.description}</em>
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
      }
    }
  }
`


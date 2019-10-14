import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

function PortfolioTemplate({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return(
    <Layout>
      {frontmatter.title} 
      {frontmatter.date}
      <div dangerouslySetInnerHTML={{__html: html}}/>
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
      }
    }
  }
`


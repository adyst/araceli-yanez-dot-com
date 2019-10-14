import React from "react"
import { graphql } from "gatsby"
import AOS from 'aos'
import 'aos/dist/aos.css';
import "./index.sass"

import Layout from "../components/layout"
import Home from "../components/sections/home"
import About from "../components/sections/about"
import Portfolio from "../components/sections/portfolio"

const IndexPage = ({ data }) => {
  AOS.init()
  
  const posts = data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => edge.node)

  return (
    <Layout>
      <Home />
      <About />
      <Portfolio posts={posts}/>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date
            path
            title
            description
          }
        }
      }
    }
  }
`

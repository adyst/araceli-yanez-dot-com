import React from "react"
import { graphql } from "gatsby"
import AOS from 'aos'
import 'aos/dist/aos.css';
import "../assets/styles/index.sass"

import Layout from "../components/layout"
import Home from "../components/sections/home"
import About from "../components/sections/about"
import Portfolio from "../components/sections/portfolio"

class IndexPage extends React.Component {
  componentDidMount() {
    AOS.init()
  }

  render() {
    const posts = this.props.data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.date)
      .map(edge => edge.node)

    return (
      <Layout isHome="true">
        <Home />
        <About />
        <Portfolio posts={posts}/>
      </Layout>
    )
  }
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

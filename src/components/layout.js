import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import GlobalStyle from "../styles/GlobalStyle"
import Bio from "./bio"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description
        }
      }
    }
  `)

  return (
    <>
    <GlobalStyle/>
    <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
    <Bio></Bio>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

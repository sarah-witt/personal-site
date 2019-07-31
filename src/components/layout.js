import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import GlobalStyle from "../styles/GlobalStyle"
import Bio from "./bio"

const InfoContainer = styled.span`
  flex-direction: column;
  display: flex;
  padding: 15%;


  @media (min-width: 750px) {
    flex-direction: row;
  }
`

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
    <InfoContainer>
      <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
      <Bio/>
    </InfoContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

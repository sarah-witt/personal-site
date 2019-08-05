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
  padding: 3%;

  @media (min-width: 750px) {
    flex-direction: row;
    padding-left: 12%;
    padding-top: 12%;

  }
`

const StyledNote = styled.div`
  font-size: 1.5rem;
  padding-top: 3%;
  padding-bottom: 5%;
  padding-left: 12%;
  color: #fff0b5;
  line-height: 1.25rem;
`

const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
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
    <NoteContainer> 
    <InfoContainer>
      <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
      <Bio/>
    </InfoContainer>
    <StyledNote>
      *site currently under construction*
    </StyledNote>
    </NoteContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

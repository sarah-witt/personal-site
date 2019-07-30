import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons"

const StyledHeader = styled.div`
  font-size: 4rem;
  color: #fff0b5;
`
const TitleSection = styled.div`
  font-family: Verdana, Geneva, sans-serif;
  font-weight: bold; 
  padding: 15%;
`
const StyledDescription = styled.div`
  font-size: 1.5rem;
  padding-top: 3%;
  padding-bottom: 2%;
  color: #4d8a76;
  line-height: 1.25rem;

  &:hover {
    font-size: 1.25rem;
  }
`

const StyledLogo = styled(FontAwesomeIcon)`
  font-size: 1.5em;
  color: #fff0b5;

  &:hover {
    color: white;
  }
`

const SocialSection = styled.div`
  display: flex;
`
const StyledSocial = styled.div`
  padding-right: 1%;
  padding-left: 1%;
`

const ContactLink = ({ link, icon }) => {
  return (
    <StyledSocial> 
      <a href={link}>
        <StyledLogo icon={icon}> </StyledLogo>
      </a>
    </StyledSocial>
  )
}

const Header = ({ siteTitle, siteDescription }) => (
  <TitleSection>
    <StyledHeader>
      {siteTitle}
    </StyledHeader>
    <StyledDescription>
      {siteDescription}
    </StyledDescription>
    <SocialSection> 
      <ContactLink link={"https://github.com/sarah-witt"} icon={faGithub} ></ContactLink> 
      <ContactLink link={"mailto:witt.s@husky.neu.edu"} icon={faEnvelope} ></ContactLink> 
      <ContactLink link={"https://www.linkedin.com/in/sarah-witt/"} icon={faLinkedin}></ContactLink>
    </SocialSection>
  </TitleSection>
)

ContactLink.prototypes = {
  link: PropTypes.string,
  icon: PropTypes.string
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Sarah Witt`,
}

export default Header

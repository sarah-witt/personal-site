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
`

const StyledLogo = styled(FontAwesomeIcon)`
  font-size: 1.5em;
  color: #4d8a76;

  &:hover {
    color: white;
  }
`

const SocialSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 3%;


  @media (min-width: 750px) {
    padding: 2%;
    justify-content: left;
  }
`

const StyledSocial = styled.div`
  padding-right: 5%;
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

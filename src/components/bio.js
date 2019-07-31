import React from "react"
import styled from "styled-components"


const BioContainer = styled.div`
  display: flex;
`

const BioInfo = styled.li`
  color: #4d8a76;
  font-size: 1.3rem;
  padding-bottom: 3%;
  padding-top: 3%;
  font-family: Verdana, Geneva, sans-serif;

  &:hover {
    color: white;
  }
`

const BioSectionList = styled.ul`
  list-style: none;
  display: inline-block;
`

const StyledBio = styled.div`
  padding-left: 3%;
`

const VerticalLine = styled.div`
  width: 1px;
  background-color: #fff0b5;
  height: 90%; 
  float: left;
`

const Bio = () => {
  return (
    <StyledBio>
    <VerticalLine/>
    <BioContainer>
      <BioSectionList>
        <BioInfo>computer science student</BioInfo>
        <BioInfo>northeastern university</BioInfo>
        <BioInfo>boston, ma</BioInfo>
      </BioSectionList>
    </BioContainer>
    </StyledBio>
  )
}


export default Bio
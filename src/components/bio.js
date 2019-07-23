import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"


const BioContainer = styled.div`
  display: flex;
`

const BioInfo = styled.li`
`

const BioSectionList = styled.ul`
`

const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Line1 = styled.div`
  width: 100px;
  height: 50px;
  border-bottom: 1px solid black;
  position: absoute;

  content:"";
  transform: rotate(-40deg);
  transform-origin: 0% 0%;
`

const Line2 = styled.div`
  width: 100px;
  height: 50px;
  border-bottom: 1px solid black;
  position: absoute;

  content:"";
  transform: rotate(40deg);
  transform-origin: 0% 0%;
`

const Line3 = styled.div`
  width: 100px;
  height: 50px;
  border-bottom: 1px solid black;

`

const Bio = () => {
  return (
    <BioContainer>
      <LineContainer> 
        <Line1></Line1>
        <Line3></Line3>
        <Line2></Line2>
      </LineContainer>
      <BioSectionList>
        <BioInfo>computer science student</BioInfo>
        <BioInfo>northeastern university</BioInfo>
        <BioInfo>boston, ma</BioInfo>
      </BioSectionList>
    </BioContainer>
  )
}


export default Bio
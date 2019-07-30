import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"


const BioContainer = styled.div`
  display: flex;
`

const BioInfo = styled.li`
  padding-bottom: 10%;
`

const LineContainer = styled.div`
  display: flex;
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

const LineAndInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
`

const Bio = () => {
  return (
    <BioContainer>
      <LineAndInfo> 
        <Line1/>
        <BioInfo>computer science student</BioInfo>
      </LineAndInfo>
      <LineAndInfo>
        <Line2/>
        <BioInfo>northeastern university</BioInfo>
      </LineAndInfo>
      <LineAndInfo>
        <Line3/>
        <BioInfo>boston, ma</BioInfo>
      </LineAndInfo>
    </BioContainer>
  )
}


export default Bio
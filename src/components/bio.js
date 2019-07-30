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
  border-bottom: 2px solid #fff0b5;
  position: absoute;

  content:"";
  transform: rotate(-40deg);
  transform-origin: 0% 0%;
`

const Line2 = styled.div`
  width: 100px;
  height: 50px;
  border-bottom: 2px solid #fff0b5;
  position: absoute;

  content:"";
  transform: rotate(40deg);
  transform-origin: 0% 0%;
`

const Line3 = styled.div`
  width: 80px;
  height: 38px;
  border-bottom: 2px solid #fff0b5;
`

const LineAndInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
`

const LinePadding2 = styled.div`
  width: 65px;
  height: 50px;
`

const LinePadding3 = styled.div`
  width: 33px;
  height: 50px;
`

const Bio = () => {
  return (
    <BioContainer>
      <LineAndInfo> 
        <Line1/>
        <BioInfo>computer science student</BioInfo>
      </LineAndInfo>
      <LineAndInfo>
        <LinePadding2/>
        <Line2/>
        <BioInfo>northeastern university</BioInfo>
      </LineAndInfo>
      <LineAndInfo>
        <LinePadding3/>
        <Line3/>
        <BioInfo>boston, ma</BioInfo>
      </LineAndInfo>
    </BioContainer>
  )
}


export default Bio
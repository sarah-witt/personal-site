import React from "react"
import styled from "styled-components"

const BioContainer = styled.div`
  display: flex;
`

const BioInfo = styled.li`
  padding-bottom: 10%;
`
const Line1 = styled.div`
  width: 100px;
  height: 50px;
  border-bottom: 2px solid #fff0b5;
  position: absoute;

  content:"";
  transform: rotate(-40deg);
  transform-origin: 0% 0%;

  &:hover {
    border-color: white;
  }
`

const Line2 = styled.div`
  width: 100px;
  height: 50px;
  border-bottom: 2px solid #fff0b5;
  position: absoute;

  content:"";
  transform: rotate(40deg);
  transform-origin: 0% 0%;

  &:hover {
    border-color: white;
  }
`

const Line3 = styled.div`
  width: 80px;
  height: 38px;
  border-bottom: 2px solid #fff0b5;

  &:hover {
    border-color: white;
  }
`

const LineAndInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;

  &:hover {
    color: white;
    border-color: white;
  }
`

const LinePadding2 = styled.div`
  width: 65px;
  height: 50px;
`

const LinePadding3 = styled.div`
  width: 33px;
  height: 50px;
`

const BioInfo1 = styled.div`
  padding-top: 1%;
`

const BioInfo2 = styled.div`
  padding-top: 7%;
`

const BioInfo3 = styled.div`
  padding-top: 45%;
`

const Bio = () => {
  return (
    <BioContainer>
      <LineAndInfo> 
        <Line1/>
        <BioInfo1>computer science student</BioInfo1>
      </LineAndInfo>
      <LineAndInfo>
        <LinePadding2/>
        <Line2/>
        <BioInfo2>northeastern university</BioInfo2>
      </LineAndInfo>
      <LineAndInfo>
        <LinePadding3/>
        <Line3/>
        <BioInfo3>boston, ma</BioInfo3>
      </LineAndInfo>
    </BioContainer>
  )
}


export default Bio
import React from 'react'
import Styled from 'styled-components'
import img_0 from '../../Assets/Images/college_00.jpg'
import img_1 from '../../Assets/Images/college_01.jpg'
import Promoted from "../../Components/BasicComponents/Promoted"
import Rating from '../BasicComponents/Rating'

const Div = Styled.div`
width: 637.3px;
box-sizing: border-box;
height: 233.2px;
position:relative;
background: url('${props=>props.id%2===1?img_1:img_0}') no-repeat center center/cover;
padding-left:10px;

:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: #000000;
  }
  `
const OptionDiv = Styled.div`
width: 100%;
height: 45px;
position: absolute;
bottom:0px;`

const Option = Styled.div`
display:inline;
height: 34px;
border-radius:21px;
padding:10px 15px;
background-color:white;
font-size:13.5px;
color:#444444;
font-weight:500;
margin-left:10px;
text-align:center;
`

export default function Header(props) {
    console.log(props)
  return (
    <Div id = {props.id}>
        {props.promoted?<Promoted></Promoted>:null}
        <Rating rating = {props.rating} remark = {props.remark}></Rating>
        <OptionDiv>
            {props.tags.map((con,id)=><Option key = {id}>{con}</Option>)}
        </OptionDiv>
  <Option style = {{color:"white",background:'transparent',right:0,bottom:-5,position:"absolute"}}>{props.ranking}</Option>
    </Div>
  )
}

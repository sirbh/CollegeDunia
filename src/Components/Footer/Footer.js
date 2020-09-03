import React from 'react'
import cssClasses from './Footer.module.scss'
import Styled from 'styled-components'
import ReactStars from "react-rating-stars-component";
import Tag from '../../Components/BasicComponents/Tag'
const Option = Styled.div`
display:inline;
width:347px;
border-top-right-radius:21px;
border-bottom-right-radius:21px;
padding:10px 5px;
background-color:#ccf5e7;
font-size:13.5px;
line-height: 1.33;
font-weight:500;
text-align:center;
`

export default function Footer(props) {
  return (
    <div className={cssClasses.Footer}>
       <div className = {cssClasses.Left}>
           <div className={cssClasses.holder}>
  <h3>{props.name}</h3><ReactStars
    classNames = {cssClasses.Rating}
    count={5}
    size={16}
    activeColor="#444444"
    value={props.rating}
    edit={false}
  /></div>
          
  <p>{props.nearestPlace.join(' | ')}</p>
  <p><span>93% Match : </span>{props.fnp}</p>
  <Option>{props.offer}</Option>
       </div>
       <div className = {cssClasses.Right}>
           <div className = {cssClasses.Tag}>
  <p>&#x20B9; {props.originalFee}</p><Tag>{props.discount}</Tag>
           </div>
  <h2>&#x20B9; {props.discountedFee}</h2>
  <p>{props.feeCycle}</p>
          <Option style ={{background:'transparent',color:'teal',width:'fit-content',padding:0,display:'inline'}}>{props.amenties.join(' , ')}</Option>
       </div>
    </div>
  )
}

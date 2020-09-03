import React from 'react'
import Styled from 'styled-components'
import cssClasses from './Promoted.module.scss'


const Div = Styled.div`
width: 152px;
height: 0;
border-top: 18px solid #68a7ff;
border-left: 20px solid transparent;
border-bottom: 18px solid #68a7ff;
position:absolute;
box-sizing: border-box;
display:inline-block;
:After {
    content: 'PROMOTED';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(28px, -9px);
    color:white;
    font-size: 15px;
    font-weight: 500;
  }
  
}`
export default function Promoted() {
  return (
    <Div className={cssClasses.Promoted}></Div>
  )
}

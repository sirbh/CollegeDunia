import React from 'react'
import cssClasses from './Tag.module.scss'

export default function Tag(props) {
  return (
  <div className = {cssClasses.content}>&#8226;{props.children}</div>
  )
}

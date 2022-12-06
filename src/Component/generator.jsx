import React from 'react'
import "./generator.scss"

const Generator = (props) => {
  return (
    <div className="generator-container">
        <div className="die-face">
        <h2 className="die-num">{props.value}</h2>
        </div>
    </div>
  )
}

export default Generator
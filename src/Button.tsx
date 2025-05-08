import React from 'react'

const Button = ({text, onClick, color}) => {
  return (
    <button style={{outline:"1px solid", backgroundColor:"transparent", borderRadius:"2rem"}}onClick={onClick}>{text}</button>
  )
}

export default Button
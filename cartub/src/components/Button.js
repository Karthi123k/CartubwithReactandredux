import React from 'react'

const Button = (props) => {
  return (
    <div><button className="px-3 py-1 mx-2 bg-gray-200 rounded-lg">{props.name}</button></div>
  )
}

export default Button
import React from 'react'

export const Main = (props) => {
  return (
    <div>
      <button onClick={() => alert('clicked')}>Hi, I am {props.name}</button>
    </div>
  )
}
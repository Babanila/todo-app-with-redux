import React from 'react'

function SingleButton({ btnName, btnClick }) {
  return <button onClick={() => btnClick()}>{btnName}</button>
}

export default SingleButton

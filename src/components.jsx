import React from 'react'
import "src/App.css"
export default function DataComponent({image}) {
  return (
    <div>
        <img src={image} alt='elephant'/>
    </div>
  )
}
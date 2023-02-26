import React from 'react'
import './text.css'
function Text({input,setInput}) {

   
  return (
    <div className='text'>
        <textarea value={input} name="" id="" cols="30" rows="10" onChange={(e)=>{
            const newVAlue = e.target.value;
            setInput(newVAlue)
        }}></textarea>
    </div>
  )
}

export default Text
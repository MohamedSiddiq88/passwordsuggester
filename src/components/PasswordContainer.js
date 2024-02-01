import React, { useState } from 'react'

function PasswordContainer({ele}) {
    const [clicked,setClicked]=useState(true);
  const isClicked=()=>{
    setClicked(false);
    setTimeout(()=>{
    setClicked(true);
    },1000)
  }
  return (
    <div>
      <div className='password-container tooltip-1' onClick={()=>{window.navigator.clipboard.writeText(ele);isClicked()}}>
              {ele}
              <span className="tooltip-1text">{clicked?"Click to copy":"Copied"}</span>
            </div>
    </div>
  )
}

export default PasswordContainer

import React from 'react'

function Input(props) {
  return (
    <>
        

        <dvi className="col-lg-4 input-container">
      <label>{props.name}{props.require?<sup style={{ color: 'red' }}>*</sup>:""}</label>
        <input className='inputs' type={props.type} value={props.data} onChange={(e)=>props.setData(e.target.value)}></input>  
        </dvi>
    </>
  )
}

export default Input

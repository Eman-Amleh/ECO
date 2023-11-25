import React from 'react'

export default function Input({type='text',id,name,title,value,onChange}) {
  return (
    <>
    <div className="input-group mb-3 ">
    <label className='p-3' htmlFor={id}> {title}</label>
    <input className='form-control' name={name} id={id}type={type} onChange={onChange} value={value} />
    </div>
    </>
  )
}

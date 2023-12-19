import React from 'react'

export default function Input({type='text',id,name,title,value,onChange,errors, onBlur, touched  }) {
    console.log(touched);
  return (
    <>
    <div className="input-group mb-3 ">
    <label className='p-3' htmlFor={id}> {title}</label>
    <input className='form-control' name={name} id={id}type={type} onChange={onChange}
     value={value} onBlur={onBlur}  />
   {touched[name]&& errors[name] &&<p className='text text-danger'>{errors[name]}</p>}
    </div>
    </>
  )
}

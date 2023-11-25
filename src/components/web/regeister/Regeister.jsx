import React from 'react'
import { useFormik } from 'formik';
import Input from '../../pages/Input.jsx'

export default function Regeister() {
    const formik=useFormik({
        initialValues:{
            userName:'',
            email:'',
            password:''



        }
    })
    const inputs =[
        { 
            id:'username',
            type: 'text',
            name:'userName ',
            title:'User Name',
            value:formik.values.userName,
            onChange:formik.handleChange,
            
        },
        
        { 
            id:'useremail',
            type: 'email',
            name:'emeil',
            title:'User Email',
            value:formik.values.email,
            
            
        },
        {
            id:'userpassword',
            type :'password',
            name:'password',
            title:' Password',
           value: formik.values.password,
        },
       
       

    ];
    const renderinput = inputs.map((ele, index) => (
      <Input
        value={ele.value}
        type={ele.type}
        id={ele.id}
        name={ele.name}
        title={ele.title}
        key={index}
        onChange={formik.handleChange}
      
      />
    ));
          
  return (
    <div className='container'>
        <h2> create a account</h2>
        <form>
          {renderinput}
        </form>
      
    </div>
  )
}

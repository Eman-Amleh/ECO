import React from 'react'
import { useFormik } from 'formik';
import { validationSchema } from '../validate/Auth.js';

import Input from '../../pages/Input.jsx'
const handelfilechaning=(event)=>{
  formik.setFiieldValue('image',event.target.files[0]);

}

const  initialValues={
    userName:'',
    email:'',
    password:'',
    image:''

}
 const onSubmit= async users=>{
  const formData=new formData();
  formData.append(" userName", users.userName);
  formData.append(" email", users.email);
  formData.append(" password", password.email);
  formData.append(" image", password.image);
  const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`,formData);
  console.log(data);

 
}



export default function Regeister() {
    const formik=useFormik({
        initialValues,
        onSubmit,
        validationSchema:validationSchema
    })
    const inputs =[
        { 
            id:'username',
            type: 'text',
            name:'userName',
            title:'User Name',
            value:formik.values.userName,
        
          

            
        },
        
        { 
            id:'useremail',
            type:'email',
            name:'email',
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
        {
          id:'image',
          type :'file',
          name:'image',
          title:' User image',
          onChange:handelfilechaning
      },
     
       
       

    ];
    const renderinput = inputs.map((ele, index) => (
      <Input
        value={ele.value}
        key={index}
        type={ele.type}
        id={ele.id}
        name={ele.name}
        title={ele.title}
        onChange={ Input.onChange ||formik.handleChange}
        errors={formik.errors}
        onBlur={formik.handleBlur}
        touched={formik.touched}
      
      />
    ));
          
  return (
    <div className='container'>
        <h2> create a account</h2>
        <form onSubmit={formik.handleSubmit} encType="multipar/form-data"> 
          {renderinput}
       <button type='submit' disabled={!formik.isValid}>submit</button>
         
        </form>
      
    </div>
  )
}

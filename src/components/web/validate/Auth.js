import *as yup from 'yup'
 export const validationSchema =yup.object({
    userName:yup.string().required("username is required").min(3,"must de at least 3 char").max(30,"max is 30char "),
    email:yup.string().required("email is required").email(),
    password:yup.string().required("password is required").min(6,"must de at least 3 char").max(10,"max is 30char ")
   
   })

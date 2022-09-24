import {object,string} from 'yup'
import * as Yup from 'yup';


const regsVal = object(
    {
            firstname:string().required("must be at least 3 letters").min(3),
        lastname:string().required("must be at least 3 letters").min(3),
        username:string().required("must be at least 8 letters").min(8),
        email:string().required("not email format").email(),
        password:string().required("must be at least 8 letters").min(8),
        confirmPassword:Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    }
)


export default regsVal
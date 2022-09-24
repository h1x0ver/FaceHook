import {object,string} from 'yup'

const loginVal = object(
    {
        username:string().required("invalid username").min(3),
        password:string().required("you write invalid password idiot!!").min(6)
    }
)
export default loginVal
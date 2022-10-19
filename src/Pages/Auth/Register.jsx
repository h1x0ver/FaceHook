import React,{useState} from 'react'
import '../../Assets/Style/Register.css'
import {Formik,Form,Field} from 'formik'
import {useNavigate} from 'react-router-dom'
import regsVal from '../../Validation/regsValidation'
import {authService} from "../../APIs/Services/Auth";

function Registers() {
    const navigate = useNavigate()
    const handleRegister = (x) => {
        console.log("onSubmit event is wokrking!")

        let newuser =  {
            username:x.username,
            firstname:x.firstname,
            lastname:x.lastname,
            email:x.email,
            password:x.password,
            confirmPassword: x.confirmPassword
        };


        authService.register(newuser).then(() => {
            navigate('/')
        })

        setTimeout(() => {
        }, 4000);
    }

    return (
        <div className='reg-form'>
            <Formik
                initialValues={
                    {
                        firstname:'',
                        lastname:"",
                        username:"",
                        email:"",
                        password:"",
                        confirmPassword:""
                    }
                }
                onSubmit={values => handleRegister(values)}
                validationSchema={regsVal}
            >
                {({errors,touched})=>
                    (

                        <Form className="reg-part">
                            <div className="naming">
                                <div className="rg-field">
                                    <label className='rg-lbl' htmlFor="firstname">firstname</label>
                                    <Field className='rg-inp' id='firstname' placeholder="Enter your name" name='firstname'/>
                                    {errors.firstname&&touched.firstname?<div className='reg-err'>{errors.firstname}</div>:null}
                                </div>
                                <div className="rg-field">
                                    <label className='rg-lbl' htmlFor="lastname">lastname</label>
                                    <Field className='rg-inp' id='lastname' placeholder="Enter your surname" name='lastname'/>
                                    {errors.lastname&&touched.lastname?<div className='reg-err'>{errors.lastname}</div>:null}
                                </div>
                                <div className="rg-field">
                                    <label className='rg-lbl' htmlFor="username">Username</label>
                                    <Field className='rg-inp' id='username'  placeholder="Enter your Username" name='username'/>
                                    {errors.username&&touched.username?<div className='reg-err'>{errors.username}</div>:null}
                                </div>
                            </div>

                            <div className="numing">
                                <div className="rg-field">
                                    <label className='rg-lbl' htmlFor="name">E-mail</label>
                                    <Field className='rg-inp' id='email' placeholder="Enter your name" name='email'/>
                                    {errors.email&&touched.email?<div className='reg-err'>{errors.email}</div>:null}
                                </div>
                                <div className="rg-field">
                                    <label className='rg-lbl' htmlFor="password">Password</label>
                                    <Field className='rg-inp' id='password' placeholder="Enter your surname" name='password'/>
                                    {errors.password&&touched.password?<div className='reg-err'>{errors.password}</div>:null}
                                </div>
                                <div className="rg-field">
                                    <label className='rg-lbl' htmlFor="confirmPassword">Confirm Password</label>
                                    <Field className='rg-inp' id='confirmPassword'  placeholder="Enter your Username" name='confirmPassword'/>
                                    {errors.confirmPassword&&touched.confirmPassword?<div className='reg-err'>{errors.confirmPassword}</div>:null}
                                </div>
                                <div className="rg-field">
                                    <input className='rg-sub-inp' value='submit' type="submit"/>
                                    <p className='rg-sub-inp inpp' onClick={()=> navigate("/login")}>Do you have Account?</p>
                                </div>
                            </div>

                        </Form>
                    )}
            </Formik>
        </div>
    )
}

export default Registers
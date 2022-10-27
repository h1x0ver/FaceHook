import React, {useEffect, useState} from 'react';
import '../../Assets/Style/Profile.css'
import {Formik, Form, Field} from 'formik'
import {Link, useNavigate} from 'react-router-dom'
import {useJwt, isExpired, decodeToken} from "react-jwt"
import ProfileSidebar from "../../Components/SiderBars/ProfileSidebar";

const ResetPassword = ({id}) => {
    const [pd, setPd] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        setPd(decodeToken(JSON.parse(localStorage.getItem("Utoken"))))
    }, [])

    return (
        <div className="container-fluid bg__home">
            <div className="row">
                <div className="col-lg-2 leftSideBarWrapper">
                    <ProfileSidebar/>
                </div>
                <div className="col-lg-10 feed__wrapper d-flex">
                    <div className='profile-s'>
                        <div className="p-div">
                            <Formik
                                initialValues={{
                                    oldPassword: "",
                                    newPassword: "",
                                    confirmPassword: ""
                                }}
                                onSubmit={(x) => {
                                    let newPassword =
                                        {
                                            id: pd.id,
                                            oldPassword: x.oldPassword,
                                            newPassword: x.newPassword,
                                            confirmPassword: x.confirmPassword
                                        }
                                    // console.log(newPassword)
                                    let token = JSON.parse(localStorage.getItem("Utoken"))
                                    let url = "https://localhost:44347/api/User/changePassword"
                                    fetch(url, {
                                        method: 'post',
                                        headers:
                                            {
                                                "Content-Type": "application/json",
                                                Authorization:"Bearer "+token
                                            },
                                        body: JSON.stringify(newPassword)
                                    }).then(resp => {
                                       alert('Password Changed succesfuly')
                                    })


                                }}
                            >
                                <Form className='p-form'>

                                    <div className="p-field">
                                        <label className='p-label' htmlFor="p-name">Current Password</label>
                                        <Field className='p-inp' id='p-name' name='oldPassword'/>
                                    </div>

                                    <div className="p-field">
                                        <label className='p-label' htmlFor="p-name">New Password</label>
                                        <Field className='p-inp' id='p-name' name='newPassword'/>
                                    </div>

                                    <div className="p-field">
                                        <label className='p-label' htmlFor="p-name">Confirm Password</label>
                                        <Field className='p-inp' id='p-name' name='confirmPassword'/>
                                    </div>

                                    <input type="submit" value='Reset Password' className='p-sub'/>

                                </Form>
                            </Formik>
                            <Link className='ch-psw' to='/profile'>Go Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ResetPassword;
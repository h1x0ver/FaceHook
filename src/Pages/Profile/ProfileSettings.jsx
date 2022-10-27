import React, {useEffect, useState} from 'react';
import '../../Assets/Style/Profile.css'
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {decodeToken} from "react-jwt";
import ProfileSidebar from "../../Components/SiderBars/ProfileSidebar";


const ProfileSettings = ({id}) => {
    const [pd, setPd] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        setPd(decodeToken(JSON.parse(localStorage.getItem("Utoken"))))
    }, [])

    const handleLogOut = () => {
        localStorage.removeItem("Utoken")
        navigate("/login")
    }


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
                                enableReinitialize={true}
                                initialValues={{
                                    prname: "",
                                    prsurname: "",
                                    prusername: "",
                                    prmail: "",

                                }}


                                onSubmit={(x) => {
                                    let editUser =
                                        {
                                            id: pd.id,
                                            firstname: x.prname,
                                            lastname: x.prsurname,
                                            username: x.prusername,
                                            email: x.prmail,
                                        }

                                    // console.log(editUser)

                                    let token = JSON.parse(localStorage.getItem("Utoken"))
                                    let url = "https://localhost:44347/api/User/userUpdate"
                                    fetch(url, {
                                        method: 'POST',
                                        headers:
                                            {
                                                "Content-Type": "application/json",
                                                Authorization:"Bearer "+token

                                            },
                                        body: JSON.stringify(editUser)
                                    }).then(resp => {
                                        alert('Profile Updatet Succesfuly')
                                    })


                                }}
                            >
                                <Form className='p-form'>

                                    <div className="p-field">
                                        <label className='p-label' htmlFor="firstname">Firstname</label>
                                        <Field className='p-inp' id='firstname' name='prname'/>
                                    </div>

                                    <div className="p-field">
                                        <label className='p-label' htmlFor="lastname">Lastname</label>
                                        <Field className='p-inp' id='lastname' name='prsurname'/>
                                    </div>

                                    <div className="p-field">
                                        <label className='p-label' htmlFor="email">E-mail</label>
                                        <Field className='p-inp' id='email' name='prmail'/>
                                    </div>
                                    <div className="p-field">
                                        <label className='p-label' htmlFor="username">Username</label>
                                        <Field className='p-inp' id='username' name='prusername'/>
                                    </div>

                                    <input type="submit" value='Edit' className='p-sub'/>


                                </Form>
                            </Formik>
                            <Link className='ch-psw' to='/reset'>Change Password</Link>
                            <p onClick={handleLogOut} className='ch-psw'>Log out</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default ProfileSettings;
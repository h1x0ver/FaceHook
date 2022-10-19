import React, {useEffect, useState} from 'react';
import '../../Assets/Style/Profile.css'
import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {decodeToken} from "react-jwt";
import ProfileSidebar from "../../Components/SiderBars/ProfileSidebar";


const ProfileSettings = () => {
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
                                    prname: pd?.name,
                                    prsurname: pd?.surname,
                                    prmail: pd?.email,
                                    prphone: pd?.phone
                                }}
                                onSubmit={(x) => {
                                    let editUser =
                                        {
                                            id: pd.id,
                                            name: x.prname,
                                            surName: x.prsurname,
                                            username: pd.username,
                                            email: x.prmail,
                                            phoneNumber: x.prphone
                                        }


                                    let url = "http://ejtacmalik-001-site1.btempurl.com/api/Accounts/update"
                                    fetch(url, {
                                        method: 'post',
                                        headers:
                                            {
                                                "Content-Type": "application/json",
                                            },
                                        body: JSON.stringify(editUser)
                                    }).then(resp => {
                                        console.log(resp.status);
                                    })


                                }}
                            >
                                <Form className='p-form'>

                                    <div className="p-field">
                                        <label className='p-label' htmlFor="p-name">Name</label>
                                        <Field className='p-inp' id='p-name' name='prname'/>
                                    </div>

                                    <div className="p-field">
                                        <label className='p-label' htmlFor="p-name">Surname</label>
                                        <Field className='p-inp' id='p-name' name='prsurname'/>
                                    </div>

                                    <div className="p-field">
                                        <label className='p-label' htmlFor="p-name">E-mail</label>
                                        <Field className='p-inp' id='p-name' name='prmail'/>
                                    </div>

                                    <div className="p-field">
                                        <label className='p-label' htmlFor="p-name">Phone</label>
                                        <Field className='p-inp' id='p-name' name='prphone'/>
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
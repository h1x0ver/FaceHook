import React,{useEffect,useState} from 'react'
import '../../Assets/Style/ProfileSettings.css'
import {Formik,Form,Field} from 'formik'
import {Link,useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useJwt,isExpired,decodeToken } from "react-jwt";

function ProfileSettings() {

    const [pd,setPd] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>
    {
        setPd(decodeToken(JSON.parse(localStorage.getItem("Utoken"))))
    },[])

    const handleLogOut = ()=>
    {
        localStorage.removeItem("Utoken")
        navigate("/")
    }
    console.log("vuqar",pd);

    return (
        <div className='profile'>
            <div className="p-div">
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        prfirstname:pd?.firstname,
                        prlastname:pd?.lastname,
                        prmail:pd?.email,
                        prusername:pd?.username

                    }}
                >
                    <Form className='p-form'>

                        <div className="p-field">
                            <label className='p-label' htmlFor="p-name">Name</label>
                            <Field className='p-inp'  id='p-name' name='prfirstname'/>
                        </div>

                        <div className="p-field">
                            <label className='p-label' htmlFor="p-name">Surname</label>
                            <Field className='p-inp' id='p-name' name='prlastname' />
                        </div>

                        <div className="p-field">
                            <label className='p-label' htmlFor="p-name">E-mail</label>
                            <Field className='p-inp' id='p-name' name='prmail'/>
                        </div>

                        <div className="p-field">
                            <label className='p-label' htmlFor="p-name">username</label>
                            <Field className='p-inp' id='p-name' name='prusername'  />
                        </div>
                        <input type="submit" value='Edit' className='p-sub'/>

                    </Form>
                </Formik>
                <Link className='ch-psw' to='/reset'>Change Password</Link>
                <p onClick={handleLogOut}  className='ch-psw'>Log out</p>
            </div>
        </div>
    )
}

export default ProfileSettings;
import React, {useEffect, useState} from 'react';
import './Assets/Style/App.css'
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Base from './Router/BaseRoutes'
import HomePage from "./Pages/Home/HomePage";
import Profile from "./Pages/Profile/Profile";
import SavedPost from "./Pages/SavedPost/SavedPost";
import Register from './Pages/Auth/Register'
import Login from "./Pages/Auth/Login";
import Messanger from "./Pages/Messanger/Messanger";
import AllUsers from "./Pages/Friends/AllUsers";
import Friends from "./Pages/Friends/Friends";
import FriendsRequest from "./Pages/Friends/FriendsRequest";
import ProtectedRoutes from "./Router/ProtectedRoutes";
import ProfileSettings from "./Pages/Profile/ProfileSettings";
import ResetPassword from "./Pages/Profile/ResetPassword";

const App = () => {

    const [auth,setAuth] = useState(JSON.parse(localStorage.getItem("auth")))
    useEffect(()=>
    {
        if(JSON.parse(localStorage.getItem("auth"))===null)
        {
            localStorage.setItem("auth",JSON.stringify(false))
            setAuth(JSON.parse(localStorage.getItem("auth")))
        }
    },[])
    console.log(auth)

    return (
            <Router>
                <Routes>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login setAuth={setAuth}/>}/>
                    <Route element={<ProtectedRoutes auth={auth}/>}>
                    <Route path='/messanger' element={<Messanger/>}/>
                    <Route path='/' element={<Base><HomePage/></Base>}/>
                    <Route path='/profile' element={<Base><Profile/></Base>}/>
                    <Route path='/users' element={<Base><AllUsers/></Base>}/>
                    <Route path='/add-friends' element={<Base><AllUsers/></Base>}/>
                    <Route path='/friends' element={<Base><Friends/></Base>}/>
                    <Route path='/requests' element={<Base><FriendsRequest/></Base>}/>
                    <Route path='/savedPost' element={<Base><SavedPost/></Base>}/>
                    <Route path='/reset' element={<Base><ResetPassword/></Base>}/>
                    <Route path='/profileSettings' element={<Base><ProfileSettings/></Base>}/>
                    </Route>
                </Routes>
            </Router>
    );
};

export default App;
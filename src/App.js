import React from 'react';
import './Assets/Style/App.css'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Base from './Router/BaseRoutes'
import HomePage from "./Pages/Home/HomePage";
import Profile from "./Pages/Profile/Profile";
import SavedPost from "./Pages/SavedPost/SavedPost";
import Register from './Pages/Auth/Register'
import Login from "./Pages/Auth/Login";
import ResetPassword from "./Components/ResetPassword";
import ProfileSettings from "./Pages/Profile/ProfileSettings";
import Messanger from "./Pages/Messanger/Messanger";
import AllUsers from "./Pages/Friends/AllUsers";
import Friends from "./Pages/Friends/Friends";
import FriendsRequest from "./Pages/Friends/FriendsRequest";

const App = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path='/messanger' element={<Messanger/>}/>
                    <Route path='/' element={<Base><HomePage/></Base>}/>
                    <Route path='/settings' element={<Base><ProfileSettings/></Base>}/>
                    <Route path='/profile' element={<Base><Profile/></Base>}/>
                    <Route path='/reset' element={<Base><ResetPassword/></Base>}/>
                    <Route path='/users' element={<Base><AllUsers/></Base>}/>
                    <Route path='/add-friends' element={<Base><AllUsers/></Base>}/>
                    <Route path='/friends' element={<Base><Friends/></Base>}/>
                    <Route path='/requests' element={<Base><FriendsRequest/></Base>}/>
                    <Route path='/SavedPost' element={<Base><SavedPost/></Base>}/>
                </Routes>
            </BrowserRouter>
    );
};

export default App;
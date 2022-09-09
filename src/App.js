import React from 'react';
import './Assets/Style/App.css'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/Home/HomePage";
import Chat from "./Pages/Chat/Chat";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import FriendsPage from "./Pages/Friends/FriendsPage";
import FriendsRequest from "./Pages/Friends/FriendsRequest";

const App = () => {
    return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/friends" element={<FriendsPage/>}/>
                    <Route path='/FriendsRequest' element={<FriendsRequest/>}/>
                </Routes>
            </BrowserRouter>
    );
};

export default App;
import React from 'react';
import './Style/App.css'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/Home/HomePage";
import Chat from "./Pages/Chat/Chat";
import Login from "./Components/Auth/Login";

const App = () => {
    return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/chat" element={<Chat/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
    );
};

export default App;
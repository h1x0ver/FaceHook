import React from 'react';
import './Style/App.css'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import HomePage from "./Pages/Home/HomePage";

const App = () => {
    return (
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                </Routes>
            </BrowserRouter>
    );
};

export default App;
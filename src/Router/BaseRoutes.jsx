import React from 'react'
import Nav from '../Components/Header/Header'
import Footer from "../Components/Footer/Footer";

function BaseRoutes({children}) {
    return (
        <div>
            <Nav/>
            {children}
        </div>
    )
}

export default BaseRoutes
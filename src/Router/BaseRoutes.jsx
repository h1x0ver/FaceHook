import React from 'react'
import Nav from '../Components/Header/Header'

function BaseRoutes({children}) {
    return (
        <div>
            <Nav/>
            {children}
        </div>
    )
}

export default BaseRoutes
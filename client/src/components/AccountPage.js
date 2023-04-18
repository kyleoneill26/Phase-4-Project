import React from 'react'
import { NavLink } from'react-router-dom'

function AccountPage() {
    return (
        <div>
            <div>AccountPage</div>
            <NavLink className='NavLink' exact to = '/register'>Create an Account</NavLink>
        </div>
    )
}

export default AccountPage
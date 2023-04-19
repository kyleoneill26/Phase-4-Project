import React from 'react'
import { NavLink } from'react-router-dom'

function AccountPage({currentUser, setCurrentUser, onLogout}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return (
        <div>
            <div>AccountPage</div>
            <br />
            <NavLink className='NavLink' exact to = '/login'>Login</NavLink>
            <br />
            <NavLink className='NavLink' exact to = '/register'>Create an Account</NavLink>
            <br />
            <NavLink className='NavLink' exact to = '/update_account'>Update My Account</NavLink>
            <br />
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default AccountPage
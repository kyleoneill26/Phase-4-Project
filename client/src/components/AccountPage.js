import React from 'react'
import { NavLink } from'react-router-dom'

function AccountPage({currentUser, onLogout}) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
        }

    return (
        <div>
            <br />
            <div>My Account</div>
            <br />
            
            { currentUser ? (
                <div>
                    <div>Logged in as:</div>
                    <div>Name: {currentUser.fname} {currentUser.lname}</div>
                    <div>Email: {currentUser.email}</div>
                    <div>Phone: {currentUser.phone}</div>
                    <div>City: {currentUser.city}</div>
                    <div>Age: {currentUser.age}</div>
                    <br />
                    <NavLink className='NavLink' exact to = '/update_account'>Update My Account</NavLink>
                    <br />
                    <button onClick={handleLogout}>Logout</button>
                </div>) : (
                <div>
                    <NavLink className='NavLink' exact to = '/login'>Login</NavLink>
                    <br />
                    <NavLink className='NavLink' exact to = '/register'>Create an Account</NavLink>
                </div>)}
                <div>
                    <NavLink className='NavLink' exact to = '/my_rentals'>My Rentals</NavLink>
                </div>
        </div>
    )
}

export default AccountPage
import React from 'react'
import { NavLink, useHistory } from'react-router-dom'
import { Form, InputGroup, Row, Button } from 'react-bootstrap';

function AccountPage({currentUser, onLogout}) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
    }
    
    const history = useHistory();

    return (
        <div>
            { currentUser ? (
                <div>
                    <div className="container mt-3 mb-3"><h2>Logged in as:</h2></div>
                    <div className="container">Name: {currentUser.fname} {currentUser.lname}</div>
                    <div className="container">Email: {currentUser.email}</div>
                    <div className="container">Phone: {currentUser.phone}</div>
                    <div className="container">City: {currentUser.city}</div>
                    <div className="container">Age: {currentUser.age}</div>
                    <div className="container mt-2 mb-2"><NavLink className='NavLink' exact to = '/my_rentals'>My Rentals</NavLink></div>
                    <div className="container mt-2 mb-2"><NavLink className='NavLink' exact to = '/update_account'>Update My Account</NavLink></div>
                    <div className="container mt-2 mb-2"><button onClick={handleLogout} className="me-4 btn btn-danger btn-md btn-block">Logout</button></div>
                </div>) : (
                <div>
                    <NavLink className='NavLink' exact to = '/login'>Login</NavLink>
                    <br />
                    <NavLink className='NavLink' exact to = '/register'>Create an Account</NavLink>
                </div>)}
                
        </div>
    )
}

export default AccountPage
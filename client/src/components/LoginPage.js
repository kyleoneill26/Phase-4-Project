import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function LoginPage({currentUser, onLogin, onLogout}) {

    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const handleEmail = e => setNewEmail(e.target.value)
    const handlePassword = e => setNewPassword(e.target.value)

    const history = useHistory();

    function handleLoginResult(customer) {
        console.log(customer);
        if (customer.hasOwnProperty('id')) {
            onLogin(customer);
        } else {
            history.push('/login');
        }
    }

	function handleLoginSubmit(e) {
        e.preventDefault();

        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: newEmail,
                    password: newPassword
                })
            };
            fetch('/login', requestOptions)
                .then((r) => r.json())
                .then((customer) => {
                    handleLoginResult(customer);
                })
        } catch (err) {
            console.log(err);
        }
    
    }
    
    return (
        <div>
            { currentUser ? (
                <div>
                    <br />
                    <div>Logged in as:</div>
                    <div>Name: {currentUser.fname} {currentUser.lname}</div>
                    <div>Email: {currentUser.email}</div>
                    <div>Phone: {currentUser.phone}</div>
                    <div>City: {currentUser.city}</div>
                    <div>Age: {currentUser.age}</div>
                    <br />
                    <button onClick={onLogout}>Logout</button>
                </div>) : (
                    <div>
                        <br />
                        <div>Enter your login info:</div>
                        <br />
                        <form onSubmit={handleLoginSubmit}>
                            <input type="text" email="email" placeholder="Email" onChange={handleEmail} /><br />
                            <input type="text" password="password" placeholder="Password" onChange={handlePassword} /><br />
                            <input type="submit" value="Login" />
                        </form>
                    </div>
                )}
        </div>
	)
}

export default LoginPage;

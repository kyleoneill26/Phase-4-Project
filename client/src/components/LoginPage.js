import React, { useEffect, useState } from "react";

function LoginPage({currentUser, setCurrentUser, onLogin}) {

    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const handleEmail = e => setNewEmail(e.target.value)
    const handlePassword = e => setNewPassword(e.target.value)

	function handleLoginSubmit(e) {
        e.preventDefault();

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
            .then((customer) => onLogin(customer))
            .then (e.target.reset())
    }
    
    return (
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
	)
}

export default LoginPage;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function UpdateAccount({currentUser, onLogout, onDeleteAccount}) {

    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newCity, setNewCity] = useState('')
    const [newAge, setNewAge] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const handleFirstName = e => setNewFirstName(e.target.value)
    const handleLastName = e => setNewLastName(e.target.value)
    const handleEmail = e => setNewEmail(e.target.value)
    const handlePhone = e => setNewPhone(e.target.value)
    const handleCity = e => setNewCity(e.target.value)
    const handleAge = e => setNewAge(e.target.value)
    const handlePassword = e => setNewPassword(e.target.value)

	function handleUpdateAccountSubmit(e) {
        e.preventDefault();

        const updatedCustomer = {
            fname: newFirstName,
            lname: newLastName,
            email: newEmail,
            phone: newPhone,
            city: newCity,
            age: newAge,
            password: newPassword
        }

        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fname: newFirstName,
                lname: newLastName,
                email: newEmail,
                phone: newPhone,
                city: newCity,
                age: newAge,
                password: newPassword
            })
        };
        fetch(`/customers/${currentUser.id}`, requestOptions)
            //.then( addCustomerToState )
            .then (e.target.reset())
    }
    
    return (
        <div>
            { currentUser ? (
                <div>
                    <br />
                    <div>Enter your account information:</div>
                    <br />
                    <form onSubmit={handleUpdateAccountSubmit}>
                        <input type="text" fname="fname" placeholder={currentUser.fname} onChange={handleFirstName} /><br />
                        <input type="text" lname="lname" placeholder="Last Name" onChange={handleLastName} /><br />
                        <input type="text" email="email" placeholder="Email" onChange={handleEmail} /><br />
                        <input type="text" phone="phone" placeholder="Phone" onChange={handlePhone} /><br />
                        <input type="text" city="city" placeholder="City" onChange={handleCity} /><br />
                        <input type="text" city="age" placeholder="Age" onChange={handleAge} /><br />
                        <input type="text" password="password" placeholder="Password" onChange={handlePassword} /><br />
                        <br />
                        <input type="submit" value="Update Account" />
                        <br />
                        <button onClick={onLogout}>Logout</button>
                        <br />
                        <button onClick={onDeleteAccount}>Delete My Account</button>
                    </form>
                </div>) : (
                    <div>
                        <br />
                        <div>Please <NavLink className='NavLink' exact to = '/login'>Login</NavLink> to update your account</div>
                    </div>
                )}
        </div>
	)
}

export default UpdateAccount;

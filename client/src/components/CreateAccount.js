import React, { useEffect, useState } from "react";

function CreateAccount({currentUser, onLogout}) {

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

	function handleCreateAccountSubmit(e) {
        e.preventDefault();

        const newCustomer = {
            fname: newFirstName,
            lname: newLastName,
            email: newEmail,
            phone: newPhone,
            city: newCity,
            age: newAge,
            password: newPassword
        }

        const requestOptions = {
            method: 'POST',
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
        fetch('/customers', requestOptions)
            //.then( addCustomerToState )
            .then (e.target.reset())
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
                </div> ) : (
                <div>
                    <br />
                    <div>Enter your account information:</div>
                    <br />
                    <form onSubmit={handleCreateAccountSubmit}>
                        <input type="text" fname="fname" placeholder="First Name" onChange={handleFirstName} /><br />
                        <input type="text" lname="lname" placeholder="Last Name" onChange={handleLastName} /><br />
                        <input type="text" email="email" placeholder="Email" onChange={handleEmail} /><br />
                        <input type="text" phone="phone" placeholder="Phone" onChange={handlePhone} /><br />
                        <input type="text" city="city" placeholder="City" onChange={handleCity} /><br />
                        <input type="text" city="age" placeholder="Age" onChange={handleAge} /><br />
                        <input type="text" password="password" placeholder="Password" onChange={handlePassword} /><br />
                        <input type="submit" value="Create Account" />
                    </form>
                </div>
                )}
        </div>
	)
}

export default CreateAccount;

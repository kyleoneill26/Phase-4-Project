import React, { useEffect, useState, Component } from "react";
import { useHistory } from 'react-router-dom';
import { Form, InputGroup, Row, Button } from 'react-bootstrap';

function CreateAccount({currentUser, onLogout, onCreateAccount}) {

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
    const history = useHistory();

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
            .then(onCreateAccount)
            .then(history.push('/login'))
    }

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
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
                    <button onClick={handleLogout}>Logout</button>
                </div> ) : (
                <div>
                    <br />
                    <div className="container mt-3 mb-3"><h1>Create My Account</h1></div>
                    <form className="container mt-3 mb-3" onSubmit={handleCreateAccountSubmit}>
                        <Row className="mb-3">
                            <Form.Group controlId="formGridText" className="col col-sm-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control className="form-control"type="name" name="fname" placeholder="First Name" onChange={handleFirstName} />
                            </Form.Group>
                            <Form.Group controlId="formGridText" className="col col-sm-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control className="form-control" type="name" name="lname" placeholder="Last Name" onChange={handleLastName} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="formGridPhone" className="col col-sm-3">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control className="form-control" type="text" name="phone" placeholder="Phone Number" onChange={handlePhone} />
                            </Form.Group>
                            <Form.Group controlId="formGridEmail" className="col col-sm-3">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control className="form-control" type="text" name="email" placeholder="Email Address" onChange={handleEmail} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="formGridCity" className="col col-sm-3">
                                <Form.Label>City</Form.Label>
                                <Form.Control className="form-control" type="text" name="city" placeholder="City" onChange={handleCity} />
                            </Form.Group>
                            <Form.Group controlId="formGridAge" className="col col-sm-3">
                                <Form.Label>Age</Form.Label>
                                <Form.Control className="form-control" type="text" name="age" placeholder="Age" onChange={handleAge} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="formGridPassword" className="col col-sm-3">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control className="form-control" type="text" name="password" placeholder="New Password" onChange={handlePassword} />
                            </Form.Group>
                            <Form.Group controlId="formGridConfirmPassword" className="col col-sm-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control className="form-control" type="text" name="confirmpassword" placeholder="Confirm Password" />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group controlId="formGridCheckbox" className="col col-sm-3">
                                <input type="submit" value="Create Account" className="me-4 btn btn-success btn-md btn-block" />
                            </Form.Group>
                        </Row>
                    </form>
                </div>
                )}
        </div>
	)
}

export default CreateAccount;

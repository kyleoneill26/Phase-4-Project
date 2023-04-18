import React from 'react'

function CreateAccount() {

	return (
        <div>
            <div>Enter your account information:</div>
            <form>
                <input type="text" fname="fname" placeholder="First Name" />
                <input type="text" lname="lname" placeholder="Last Name" />
                <input type="text" email="email" placeholder="Email" />
                <input type="text" phone="phone" placeholder="Phone" />
                <input type="text" city="city" placeholder="City" />
                <input type="text" city="age" placeholder="Age" />
                <input type="text" password="password" placeholder="Password" />
                <input type="submit" value="Create Account" />
            </form>
        </div>
	)
}

export default CreateAccount;

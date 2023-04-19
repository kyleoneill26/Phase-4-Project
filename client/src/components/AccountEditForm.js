import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



function AccountEditForm({ handleHideCustomerEditForm,  }) {


    ////// WE NEED TO PASS THE FILTERED USER DATA TO THIS FUNCTION ///// TODO
    const [ fname, setFName ] = useState()
    const [ lname, setLName ] = useState()
    // const [ password, setPassword ] = useState() should we make a password change form?
    const [ age, setAge ] = useState()
    const [ phone, setPhone ] = useState()
    const [ address, setAddress ] = useState()

    const handleFName = (e) => {setFName(e.target.value)}
    const handleLName = (e) => {setLName(e.target.value)}
    // const handlePassword = (e) =>{setPassword(e.target.value)}
    const handleAge = (e) => {setAge(e.target.value)}
    const handlePhone = (e) => {setPhone(e.target.value)}
    const handleAddress = (e) => {setAddress(e.target.value)}





    return (
        <Form className='editForm' onSubmit={handlePatchSubmit}>
            <div>
                <Form.Control onChange={handleTitle} type='text' name='title' placeholder='Title'/>
                <Form.Control onChange={handleImage} type='text' name='image' placeholder='Image'/>
                <Form.Control onChange={handleGenre} type='text' name='genre' placeholder='Genre'/>
                <Form.Control onChange={handleYear} type='text' name='year' placeholder='Year'/>
                <Form.Control onChange={handleRating} type='text' name='rating' placeholder='Rating'/>
            </div>
            <Button className='add-button' type='submit'>Add A Movie</Button>
            <Button className='add-button' onClick={handleHideMovieForm}>Close Form</Button>
        </Form>
    )
}

export default AccountEditForm
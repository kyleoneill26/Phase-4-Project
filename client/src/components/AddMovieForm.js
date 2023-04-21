import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


function AddMovieForm({addMovie, handleHideMovieForm}) {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [genre, setGenre] = useState('')
    const [year, setYear] = useState('')
    const [rating, setRating] = useState('')
    const [in_stock, setIn_stock] = useState(true)

    const handleTitle = (e) => {setTitle(e.target.value)}
    const handleImage = (e) => {setImage(e.target.value)}
    const handleGenre = (e) => {setGenre(e.target.value)}
    const handleYear = (e) => {setYear(e.target.value)}
    const handleRating = (e) => {setRating(e.target.value)}
    const handleIn_stock = (e) => {setIn_stock(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault()

        const newMovie ={
            title: title,
            image: image,
            genre: genre,
            year: year,
            rating: rating,
            in_stock: in_stock,
        }

        addMovie(newMovie)

        fetch('http://localhost:5555/movies', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newMovie)
        })

        setTitle('')
        setImage('')
        setGenre('')
        setYear('')
        setRating('')
        setIn_stock('')

        handleHideMovieForm()
    }


    return (
        <Form className='addForm' onSubmit={handleSubmit}>
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

export default AddMovieForm
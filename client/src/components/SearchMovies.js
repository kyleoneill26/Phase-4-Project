import React from 'react'
import { Form,Button } from 'react-bootstrap'


function SearchMovies({changeSearch}) {

    const handleSearch = e => changeSearch(e.target.value)

    return (
        <Form onSubmit={handleSearch} id='form' className=' d-flex gap-3 w-50'>
    <Form.Control 
    className='search-box py-2'
    placeholder='search movies' onChange={handleSearch}/>
    <Button
    onClick={handleSearch}
    style={{
        background:"#00CE79",
        border:'none',
        color:'black'
    }}
    className='search-btn'>Search</Button>
</Form>
    

    )
}

export default SearchMovies

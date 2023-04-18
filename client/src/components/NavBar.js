import React from 'react'
import {NavLink} from 'react-router-dom'



export default function NavBar() {
    return(
        <nav classname=''>
            <a href= "">we can put a logo of some sort here</a>
            <NavLink className='NavLink' exact to = '/'>Home</NavLink>
            <NavLink className="NavLink" to = "/movies">Movies</NavLink>
            <NavLink className='NavLink' to = '/account'>Account</NavLink>
            <NavLink className="NavLink" to = "/aboutme">About Me</NavLink>
        </nav>
    )
}

import React from 'react'
import RentalCard from './RentalCard';

function RentalsPage({rentals, currentUser, onLogout}) {

    const rentalsComponents = rentals.map(rental => <RentalCard key={rental.id} rental={rental} movie={rental.movie}/>)



    return (
        <main>
            <div className= "card-div">
                {rentalsComponents}
            </div>
        </main>
    )
}

export default RentalsPage
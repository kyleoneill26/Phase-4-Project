import React from 'react'
import RentalCard from './RentalCard';

function RentalsPage({rentals, currentUser, onLogout}) {

    const rentalsComponents = rentals.filter(rental => rental.customer === currentUser).map(rental => <RentalCard key={rental.id} rental={rental} movie={rental.movie}/>)
    
 //// rental.customer_id = current suer

    return (
        <main>
            <div className= "card-div">
                {rentalsComponents}
            </div>
        </main>
    )
}

export default RentalsPage
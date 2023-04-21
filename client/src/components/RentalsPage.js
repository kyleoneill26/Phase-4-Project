import React from 'react'
import RentalCard from './RentalCard';

function RentalsPage({rentals, currentUser, onLogout}) {

    // const rentalsComponents = rentals.filter(rental => {
    //     console.log(currentUser)
    //     return 
    // })
    console.log( "current user", currentUser)
    console.log( "current user.rentals", currentUser.rentals)
    const rentalMap = currentUser.rentals.map(rental => <RentalCard key={rental.id} rental={rental} movie={rental.movie}/>)

    // console.log(rentalsComponents);
 //// rental.customer_id = current suer
    console.log(rentals)
    return (
        <main>
            <div className= "card-div">
                {rentalMap}
            </div>
        </main>
    )
}

export default RentalsPage
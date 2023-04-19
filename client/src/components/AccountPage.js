import React from 'react'
<<<<<<< HEAD
import { NavLink } from'react-router-dom'

function AccountPage({currentUser, setCurrentUser, onLogout}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

=======
import AccountEditForm from './AccountEditForm'

function AccountPage() {



    const customerComponents = customer.map() // TODO

    const [hideCustomerEditForm, setHideCustomerEditForm] = useState(true)
    const handleHideCustomerEditForm = () => {
        setHideCustomerEditForm(hideCustomerEditForm => !hideCustomerEditForm)
    } // FIXME 

    function FormButton({handleHideCustomerEditForm}) {
        return(
            <button onClick={handleHideCustomerEditForm} className="hideFormButton">Edit Account Info</button>
        )
    }






>>>>>>> main
    return (
        <div>
            <div>AccountPage</div>
            <br />
            <NavLink className='NavLink' exact to = '/login'>Login</NavLink>
            <br />
            <NavLink className='NavLink' exact to = '/register'>Create an Account</NavLink>
            <br />
            <NavLink className='NavLink' exact to = '/update_account'>Update My Account</NavLink>
            <br />
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default AccountPage
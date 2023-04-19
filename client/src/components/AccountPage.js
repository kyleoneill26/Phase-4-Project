import React from 'react'
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






    return (
        <div>AccountPage</div>
    )
}

export default AccountPage
import './css/Contacts.scss'
import EmailForm from '../components/sendMailForm/EmailForm.jsx'

function Contacts() {
    return (
    <div id="contacts" className='contactsContainer'>
        <div  className="Contacts">
            <div className="FormContainer">
                <h3 className='ContactFormHeader'>PLEASE GET IN TOUCH</h3>
                <EmailForm />
            </div>

        </div>
    </div>
    )
}

export default Contacts;
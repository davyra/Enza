import './style.scss'
import MyButton from '/src/components/MyButton/MyButton'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import BigSnake from '/src/assets/BigSnake.png'
import Map from '/src/assets/map.png'
import Pointer from '/src/assets/pointer.svg'
import Time from '/src/assets/time.svg'
import Call from '/src/assets/call.svg'
import Insta from '/src/assets/insta.svg'
import Face from '/src/assets/face.svg'

const ContactPage = () => {
    const notify = () => toast.success('Thank you for your message!')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handler = () => {
        setName('')
        setSurname('')
        setEmail('')
        setMessage('')

        notify()
    }

    return (
        <div className="contact-page">
            <img src={BigSnake} className="snake" alt="Snake" />
            <h1>CONTACT</h1>
            <div className="form">
                Fill out this form and we will get back to you
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} placeholder="Surname" />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
            </div>
            <MyButton className="button" onClick={() => handler()} disabled={!name || !surname || !email || !message}>
                SUBMIT
            </MyButton>
            <div className="text">
                <div className="content">
                    <div className="small">
                        <img alt="pointer" src={Pointer} /> 80 Romily St,London
                    </div>
                    <div className="small">
                        <img alt="time" src={Time} />
                        <span>
                            Monday-Friday: from 08:00 to 20:00 <br /> Saturday-Sunday: from 10:00 to 17:00
                        </span>
                    </div>
                    <div className="small">
                        <img alt="call" src={Call} />
                        (020) 234 678
                    </div>
                    <div style={{ marginTop: '24px' }}>
                        <img alt="instagram" src={Insta} />
                        <img alt="Facebook" src={Face} />
                    </div>
                </div>
                <img alt="map" src={Map} className="map" />
            </div>

            <ToastContainer />
        </div>
    )
}

export default ContactPage

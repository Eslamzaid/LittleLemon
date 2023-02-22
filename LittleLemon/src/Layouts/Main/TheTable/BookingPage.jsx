import React from 'react'
import BookingForm from './BookingPage/BookingForm'
import './BookingPage.css'

function BookingPage(props) {
    return (
        <article className='TheEnorumusFather'>
            <BookingForm sendItUp={props.connectMenu}/>
        </article>
    )
}

export default BookingPage

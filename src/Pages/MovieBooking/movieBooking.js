/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './movieBooking.css'
import { useState } from 'react';
import swal from 'sweetalert';

const movieBooking = () => {
    
    const [form , showForm] = useState(false);
    // const show=()=>{showForm(true)}

     const success = () => {
        swal({
            title: "Booked!",
            text: "Enjoy the movie!",
            icon: "success",
            button: "Thank you!",
          });
     }  

        const Form = () => {
            return (
            <div className="form">
                <input type="text" placeholder="Enter your name" className="form-input"></input>
                <input type="text" placeholder="Enter your email" className="form-input"></input>
                <label className="form-label"> Ticket for : {localStorage.getItem('movieName')}</label>
                <button className="form-button" onClick={success}>Book Now</button>
            </div> 
    )}

    return (
        <div className='movieBooking'>
            <h1 className='movie-booking-title'>Movie Booking</h1>
            <div className='movie-booking-content'>
                <div className='movie-booking-content-image'>
                    <img src={localStorage.getItem('movieImage')} alt=""></img>
                </div>
                <div className='movie-booking-content-details'>
                    <div className="movieName">Name : {localStorage.getItem('movieName')}</div>
                    <div className="movieSumary"> Summary : {localStorage.getItem('movieSumary')}</div>
                    <button className="book-button" onClick={()=>{showForm(!form)}}>Book Ticket</button>
                    {form ? <Form /> : null}
                </div>
            </div>
        </div>
    )
}

export default movieBooking

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../components/HireMe.css"
import Navbar from '../components/Navbar';
import { SuccessAlert, ErrorAlert } from '../components/raw/Alerts';
import axios from 'axios';
import Hnav from '../components/Hnav';

axios.defaults.baseURL = 'http://localhost:8080';

function SignUp() {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        eventDate: '',
        eventTime: '',
        eventLocation: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        eventDate: '',
        eventTime: '',
        eventLocation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post('https://photoboot360.vercel.app/api/users', formData);
            console.log('Response Status:', response.status); // Debugging line
            if (response.status === 201) {
                SuccessAlert('User details saved successfully!');
                // Clear the form fields
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    eventDate: '',
                    eventTime: '',
                    eventLocation: '',
                });
            }
        } catch (error) {
            console.error('Error:', error); // Debugging line
            ErrorAlert('Failed to save user details.');
        }
    };
    return (
        <>
        <Hnav/>

            <div id="flexer1"className="font-display tracking-tight w-full h-screen bg-[url('img\logo\logo.svg')] flex items-center justify-center ">
                <div id="rt22" className="lg:w-1/3 lg:h-3/4 flex flex-col justify-evenly items-center rounded-xl bg-[#CDEA68]">
                    <h1 className='font-condensed lg:text-5xl text-zinc-900'>CONTACT  NOW</h1>
                    <form className="max-w-md mx-auto" method='POST' onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                autocomplete="off"
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="firstName"
                                    className={`peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.firstName && 'text-red-500'}`}
                                >
                                    First name
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input
                                autocomplete="off"
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="lastName"
                                    className={`peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.lastName && 'text-red-500'}`}
                                >
                                    Last name
                                </label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                            autocomplete="off"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className={`peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.email && 'text-red-500'}`}
                            >
                                Email address
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                            autocomplete="off"
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="phoneNumber"
                                className={`peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.phoneNumber && 'text-red-500'}`}
                            >
                                Phone Number 
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                            autocomplete="off"
                                type="date"
                                name="eventDate"
                                value={formData.eventDate}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="eventDate"
                                className={`peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.eventDate && 'text-red-500'}`}
                            >
                                Event Date
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                            autocomplete="off"
                                type="time"
                                name="eventTime"
                                value={formData.eventTime}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="eventTime"
                                className={`peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.eventTime && 'text-red-500'}`}
                            >
                                Event Time
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                            autocomplete="off"
                                type="text"
                                name="eventLocation"
                                value={formData.eventLocation}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="eventLocation"
                                className={`peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.eventLocation && 'text-red-500'}`}
                            >
                                Event Location
                            </label>
                        </div>
                        <div className="flex items-center justify-center">
                    
                            <input
                            autocomplete="off"
                            type="submit"
                            value="Submit"
                            className="w-full py-2.5 px-5 text-sm font-medium border-2 text-zinc-900 border-zinc-900 rounded-md hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-0 focus:border-zinc-900"
                        />
                        </div>
                    </form>
                 
                </div>
            </div>
        </>
    )
}

export default SignUp;

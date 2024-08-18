import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Hnav from './Hnav';
import './Login.css'; 
axios.defaults.baseURL = 'http://localhost:8080';

const Login = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();  // React Router hook for navigation

    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
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
            const response = await axios.post('/api/users/login', formData);
            console.log('Login successful:', response.data);

            // If login is successful, navigate to the ClientDashboard
            if (response.status === 200) {
                navigate('/Dashboard');
            }
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
     <Hnav/>
            <div className="font-display tracking-tight w-full h-screen bg-[url('img/logo/logo.svg')] flex items-center justify-center">
                <div id="rt22" className="lg:w-1/3 lg:h-3/4 flex flex-col justify-evenly items-center rounded-xl bg-[#CDEA68]">
                    <h1 id="lol1"className='font-condensed lg:text-5xl text-zinc-900'>Login</h1>
                    <form id="jk1" className="max-w-md mx-auto" method='POST' onSubmit={handleSubmit}>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                            id="in1"
                            autocomplete="off"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="name"
                                className={`peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.name && 'text-red-500'}`}
                            >
                                Name
                            </label>
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
                        <div className="flex items-center justify-center">
                            <input
                                type="submit"
                                value="Submit"
                                className="w-full py-2.5 px-5 text-sm font-medium border-2 text-zinc-900 border-zinc-900 rounded-md hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-0 focus:border-zinc-900"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;

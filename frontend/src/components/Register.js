import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (firstName && lastName && username && email && password) {
            sessionStorage.setItem('user', JSON.stringify({firstName, lastName, username, email, password}));
            alert('User registered successfully!');
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } else {
            alert('Please fill out all fields');
        }
    };

    return (
        <div
            className="max-w-lg mx-auto bg-white dark:bg-white rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
            <h1 className="text-xl font-bold text-center text-black-700 dark:text-black-200 mb-8">
                Welcome to AI Powered
            </h1>
            <form onSubmit={handleRegister} className="w-full flex flex-col gap-4">
                <div className="flex items-start flex-col justify-start">
                    <label htmlFor="firstName" className="text-sm text-black-700 dark:text-black-200 mr-2">
                        First Name:
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3 dark:text-black-200 dark:bg-black-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label htmlFor="lastName" className="text-sm text-black-700 dark:text-black-200 mr-2">
                        Last Name:
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3 dark:text-black-200 dark:bg-black-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label htmlFor="username" className="text-sm text-black-700 dark:text-black-200 mr-2">
                        Username:
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-3 dark:text-black-200 dark:bg-black-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label htmlFor="email" className="text-sm text-black-700 dark:text-black-200 mr-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 dark:text-black-200 dark:bg-black-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label htmlFor="password" className="text-sm text-black-700 dark:text-black-200 mr-2">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 dark:text-black-200 dark:bg-black-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="flex items-start flex-col justify-start">
                    <label htmlFor="confirmPassword" className="text-sm text-black-700 dark:text-black-200 mr-2">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-3 dark:text-black-200 dark:bg-white-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
                >
                    Register
                </button>
            </form>

            <div className="mt-4 text-center">
                <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
                <a href="/login" className="text-blue-500 hover:text-blue-600">
                    Login
                </a>
            </div>
        </div>
    );
};

export default Register;

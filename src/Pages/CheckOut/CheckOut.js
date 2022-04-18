import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
const CheckOut = () => {
    const [user] = useAuthState(auth)
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handleNameBlur = (event) => {
        setName(event.target.value);
    }
    const handleAddressBlur = (event) => {
        setAddress(event.target.value);
    }
    const handlePhoneBlur = (event) => {
        setPhone(event.target.value);
    }

    const checkoutButton = () => {
        alert('Your Request is Accepted');
        navigate('/')
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        const shipping = { name, email, address, phone }
        console.log(shipping);

    }
    return (

        <div className="w-1/3 mx-auto border-2 shadow-md rounded-md bg-gray-300 mt-5">

            <h1 className="text-center text-xl font-semibold p-4">Information Please !!</h1>
            <form onSubmit={handleCreateUser} className="ml-32">
                <div>
                    <h4 htmlFor="name">Name: </h4>
                    <input onBlur={handleNameBlur} type="text" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Name" required />
                </div>
                <div>
                    <h4 htmlFor="email">Email: </h4>
                    <input value={user?.email} read only type="email" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Email" required />
                </div>


                <div className="mt-2">
                    <h4 htmlFor="address">Address: </h4>
                    <input onBlur={handleAddressBlur} type="text" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="address" required />
                </div>

                <div className="mt-2">
                    <h4 htmlFor="phone">Phone Number: </h4>
                    <input onBlur={handlePhoneBlur} type="number" className="placeholder-shown:border-gray-500 border-2 text-center px-2 w-80 h-12 rounded-2" placeholder="Phone Number" required />
                </div>

                <p className="text-center text-xl text-red-600 mr-16 mt-3">{error}</p>

                <button className="mx-auto w-80 h-12 border-3 mt-3 mb-3 bg-purple-600 text-white font-semibold rounded-md" onClick={checkoutButton}>Add Service</button>

            </form>
        </div>
    );
};

export default CheckOut;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleServices = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();

    const singleServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-2  mx-auto">
                <div class="xl:w-full md:w-full p-4">
                    <div class="bg-gray-100 p-6 rounded-lg text-left ">
                        <img class="h-40 rounded w-full object-cover object-center mb-6" src={img} alt="content" />
                        <h3 className="font-semibold text-2xl  text-indigo-500 ">{name}</h3>
                        <h4 className="font-semibold text-lg text-gray-900  title-font my-1">Price: {price} $</h4>
                        <p className="leading-relaxed text-base text-justify my-1">{description}</p>

                        <Link to="/checkout">
                            <button onClick={() => singleServiceDetail(id)} className="text-white bg-indigo-500 mt-3  py-2 px-12 hover:bg-gray-600 ease-in duration-300 rounded text-lg">Enroll Your Subject</button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleServices;
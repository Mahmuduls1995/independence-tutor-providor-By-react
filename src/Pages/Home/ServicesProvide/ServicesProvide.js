import React, { useEffect, useState } from 'react';
import SingleServices from '../SingleServices/SingleServices';

const ServicesProvide = () => {
    const [services,setServices]=useState([])



    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data =>setServices(data))
        
    },[])
    return (
        <div>
            <span className="text-indigo-500 font-bold underline d-block  text-center mt-5 text-3xl">My Tuition Subject</span>
            <div class="lg:grid-cols-3 grid md:grid-cols-2 sm:grid-cols-1">
                {
                    services.map(service =><SingleServices
                    key={service.id}
                    service={service}

                    ></SingleServices>)
                }
            </div>
        </div>
    );
};

export default ServicesProvide;
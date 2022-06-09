import React from 'react';
import Cart from './Cart';


const Service = () => {
    const services = [
        {
            id: 1,
            name: `React Project`,
            about: `The most popular javascript library for building web applications`,
        },
        {
            id: 2,
            name: 'Node.js Project',
            about: 'The most open source server environment for bulding a full stack web application'
        },
        {
            id: 3,
            name: 'MongoDB Project',
            about: 'The most popular noSQL database for storing data'
        }
    ]
    return (
        <div className='container my-5 mx-auto'>
            <h1 className='uppercase text-3xl font-bold text-teal-500 text-center'>you may hire me for</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-3'>
                {
                    services.map(service => <Cart
                        key={service.id}
                        service={service}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Service;
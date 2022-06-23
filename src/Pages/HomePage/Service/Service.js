import React from 'react';
import Cart from './Cart';
import gif1 from '../../../assets/react.gif';
import gif2 from '../../../assets/nodejs.gif';
import gif3 from '../../../assets/mongo.gif';


const Service = () => {
    const services = [
        {
            id: 1,
            name: `React Project`,
            about: `The most popular javascript library for building web applications`,
            gif: gif1
        },
        {
            id: 2,
            name: 'Node.js Project',
            about: 'Popular open source server environment for bulding a full stack web application',
            gif: gif2
        },
        {
            id: 3,
            name: 'MongoDB Project',
            about: 'The most popular noSQL database for storing data',
            gif: gif3
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
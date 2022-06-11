import React from 'react';

const Cart = ({ service }) => {
    const { name, about, gif } = service;
    return (
        <div>
            <div class="card lg:max-w-lg sm:max-w-4/5 bg-base-300 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-2xl">{name}</h2>
                    <p>{about}.</p>
                </div>
                <figure><img src={gif} style={{ width: '400px', height: '225px' }} alt="Shoes" /></figure>
            </div>
        </div>
    );
};

export default Cart;
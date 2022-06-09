import React from 'react';

const Cart = ({ service }) => {
    const { name, about } = service;
    return (
        <div>
            <div className={`card lg:card-side shadow-xl bg-secondary`}>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{about}.</p>
                </div>
            </div>

        </div>
    );
};

export default Cart;
import React from 'react';
import './Banner.css';
import img from '../../../../assets/zead01.png';

const Banner = () => {
    const resume = 'https://drive.google.com/uc?export=download&id=1cvwLB7jmqRfBTgb-wBsznSms3R58fb0m';
    return (
        <div>
            <div className="hero bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} style={{ height: '400px', width: '250px' }} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <div className="view_port">
                            <div className="polling_message">
                                <h1 className="lg:text-5xl font-bold sm:text-4xl uppercase">welcome to my portfolio</h1>
                            </div>
                            <div className="cylon_eye"></div>
                        </div>
                        <a href={resume} rel="noopener noreferrer">
                            <button className="btn btn-primary mt-4">Get Resume</button>
                        </a>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
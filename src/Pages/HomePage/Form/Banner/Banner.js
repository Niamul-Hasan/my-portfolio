import React from 'react';
import './Banner.css';
import img from '../../../../assets/zead01.jpg';
import { BsFillCloudDownloadFill } from 'react-icons/bs';
import Typewriter from './Typewriter';

const Banner = () => {
    const resume = 'https://drive.google.com/uc?export=download&id=1_AziCHIPtW-XbCCGV_Hf7g8bZq8E-YA8';
    return (
        <div>
            <div className="hero bg-white">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} style={{ height: '400px', width: '250px' }} className="mask mask-hexagon max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <div className="view_port">
                            <div className="polling_message">
                                <h1 className="lg:text-5xl font-bold sm:text-4xl uppercase">welcome to my portfolio</h1>
                            </div>
                            <div className="cylon_eye"></div>
                        </div>

                        <Typewriter></Typewriter>

                        <a href={resume} rel="noopener noreferrer">
                            <button className="btn btn-primary mt-4 text-xl"><span className='mr-3'>Download Resume</span> <BsFillCloudDownloadFill /></button>
                        </a>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import './About.css';
import img from '../../assets/zead.jpeg';
import { HiDocumentDownload } from 'react-icons/hi';
import Skills from './Skills';
import Footer from '../Shared/Footer';


const About = () => {
    const resume = 'https://drive.google.com/uc?export=download&id=1cvwLB7jmqRfBTgb-wBsznSms3R58fb0m';
    return (
        <div>
            <div class="hero  bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={img} style={{ width: '260px', height: '400px' }} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-3xl font-bold mb-2">I AM NIAMUL HASAN ZEAD</h1>
                        <div class="card w-96 bg-base-200 shadow-xl">
                            <div class="card-body text-lg">
                                <p>I have dream of being a <strong>MERN</strong> full-stack web developer.Hence I starded my journey to complete the web development couse with Jhankar Mahbub.Recently I have acomplished the first step of being a web developer. Now I have a courage in my mind to do the best in this field.
                                </p>
                                <p> I have  web development skills which are very needed to complete a full-stack website .Now I am ready to learn any new technology by facing very new challenges.
                                </p>

                            </div>
                        </div>

                        <a href={resume} rel="noopener noreferrer">
                            <button className="btn btn-sm btn-warning mt-4 text-xl hover:btn-success"><span className='mr-3'>Download Resume </span>< HiDocumentDownload /></button>
                        </a>
                    </div>
                </div>
            </div>

            <Skills></Skills>
            <Footer></Footer>

        </div >
    );
};

export default About;
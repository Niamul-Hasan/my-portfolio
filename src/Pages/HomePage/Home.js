import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';
import file from '../../assets/Niamul Hasan Zead_Resume.pdf';

const Home = () => {
    const resume = 'https://drive.google.com/uc?export=download&id=1cvwLB7jmqRfBTgb-wBsznSms3R58fb0m';
    return (
        <div>
            <div className='welcome-text'>
                <h1 className='text-uppercase'>Hi! Welcome to my portfolio...</h1>
            </div>
            <a href={resume} rel="noopener noreferrer">
                <Button>
                    Download File
                </Button>
            </a>

            <a href={file} target="_blank" rel="noopener noreferrer" download>
                <Button className='bg-warning'>
                    Download
                </Button>
            </a>

            <div className="view_port">
                <div className="polling_message text-uppercase fs-2">
                    Hi! Welcome to my portfolio...
                </div>
                <div className="cylon_eye"></div>
            </div>


        </div>
    );
};

export default Home;
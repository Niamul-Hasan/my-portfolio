import React from 'react';
import { useParams } from 'react-router-dom';
import pic1 from '../../assets/pchunk/c1.PNG';
import pic2 from '../../assets/pchunk/c2.PNG';
import pic3 from '../../assets/pchunk/c3.PNG';
import pic4 from '../../assets/hiking/c1.PNG';
import pic5 from '../../assets/hiking/c2.PNG';
import pic6 from '../../assets/hiking/c3.PNG';
import pic7 from '../../assets/dentist/c1.PNG';
import pic8 from '../../assets/dentist/c2.PNG';
import pic9 from '../../assets/dentist/c3.PNG';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { FaStripeS } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { DiGit } from 'react-icons/di';
import { SiFirebase } from 'react-icons/si';

const ProjectDetails = () => {
    const { id } = useParams();
    const projectID = parseInt(id);
    const projectDb = [
        {
            id: 1,
            name: 'PC HUNK',
            features: <ul style={{ listStyleType: 'disc' }}>
                <li>This project is based on react and node.js</li>
                <li>This project has admin base authentication and authorization methods.</li>
                <li>User can able to pay via test card</li>
                <li>User dashboard is implemented here to view orders,manage orders,manage users,give a review and so on.</li>
            </ul>,
            technologies: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-blue-500' data-tip='React'>
                    <FaReact /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-green-500' data-tip='Nodejs'>
                    <FaNodeJs /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-warning' data-tip='javascript'>
                    <DiJavascript1 /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip ' data-tip='Expressjs'>
                    <SiExpress /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-purple-500' data-tip='Stripe'>
                    <FaStripeS /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-lime-500' data-tip='mongodb'>
                    <SiMongodb /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-sky-500' data-tip='Tailwind'>
                    <SiTailwindcss /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-red-500' data-tip='Git'>
                    <DiGit /></button>

            </>,
            url: 'https://pc-hunk.web.app/',
            img: [pic1, pic2, pic3]
        },
        {
            id: 2,
            name: 'Hiking House',
            features: <ul style={{ listStyleType: 'disc' }}>
                <li>This project is based on react and node.js</li>
                <li>JWT is implemented for the purpose of acknowledgement base data transfer form database to client side.</li>
                <li>MongoDB is used to storage and managing data</li>
                <li>Firebase hosting is used to deploy data</li>
            </ul>,
            technologies: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-blue-500' data-tip='React'>
                    <FaReact /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-green-500' data-tip='Nodejs'>
                    <FaNodeJs /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-warning' data-tip='javascript'>
                    <DiJavascript1 /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip ' data-tip='Expressjs'>
                    <SiExpress /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-lime-500' data-tip='mongodb'>
                    <SiMongodb /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-purple-500' data-tip='Bootstrap'>
                    <FaBootstrap /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-yellow-500' data-tip='Firebase'>
                    <SiFirebase /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-red-500' data-tip='Git'>
                    <DiGit /></button>

            </>,
            url: 'https://hiking-house.web.app/',
            img: [pic4, pic5, pic6]
        },
        {
            id: 3,
            name: 'Ami R Tmi',
            features: <ul style={{ listStyleType: 'disc' }}>
                <li>This project is based on react</li>
                <li>This is a siplme SPA project.</li>
                <li>Firebase and react firebase hooks are implemented for login method</li>
                <li>User can sign up with both email & password and google account. </li>
            </ul>,
            technologies: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-blue-500' data-tip='React'>
                    <FaReact /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-warning' data-tip='javascript'>
                    <DiJavascript1 /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-yellow-500' data-tip='Firebase'>
                    <SiFirebase /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-purple-500' data-tip='Bootstrap'>
                    <FaBootstrap /></button>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-red-500' data-tip='Git'>
                    <DiGit /></button>

            </>,
            url: 'https://your-private-dentist.web.app/',
            img: [pic7, pic8, pic9]
        }
    ];

    const project = projectDb.find(project => project.id === projectID);
    const images = project.img;


    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-3xl text-orange-500 uppercase font-semibold'>Project details</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-3'>
                {
                    images.map(img => <img src={img} alt='' />)
                }
            </div>
            <div className='text-center'>
                <a href={project.url} target='_blank' rel="noopener noreferrer"><button className='btn btn-sm btn-success font-bold mt-12 w-1/4'>Live Site</button></a>

            </div>

            <div className=' mx-auto text-xl w-4/5 grid lg:grid-cols-2 sm:grid-cols-1 gap-8 my-12'>
                <div className='text-zinc-800 bg-base-100 shadow-2xl px-8 text-clip'>
                    <h1 className='uppercase text-teal-600 font-semibold text-2xl'>Name: {project.name}</h1>
                    <h1 className='uppercase text-emerald-700 font-semibold text-2xl'>Key Features</h1>
                    {project.features}
                </div>
                <div className='px-5'>
                    <h1 className='uppercase text-2xl font-semibold text-teal-600 mb-5'>Tools and Technologies</h1>
                    {project.technologies}

                </div>

            </div>
        </div>
    );
};

export default ProjectDetails;
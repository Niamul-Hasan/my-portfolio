import React from 'react';
import gif from '../../assets/dev_Skills.gif';
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
import { GrHeroku } from 'react-icons/gr';
import { SiNetlify } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaFigma } from 'react-icons/fa';


const Skills = () => {
    const skills = [
        {
            id: 1,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-blue-500' data-tip='React'>
                    <FaReact /></button>
            </>
        },
        {
            id: 2,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-green-500' data-tip='Nodejs'>
                    <FaNodeJs /></button>
            </>
        },
        {
            id: 3,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-warning' data-tip='javascript'>
                    <DiJavascript1 /></button>
            </>
        },
        {
            id: 4,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip ' data-tip='Expressjs'>
                    <SiExpress /></button>
            </>
        },
        {
            id: 5,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-purple-500' data-tip='Stripe'>
                    <FaStripeS /></button>
            </>
        },
        {
            id: 6,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-lime-500' data-tip='mongodb'>
                    <SiMongodb /></button>
            </>
        },
        {
            id: 7,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-sky-500' data-tip='Tailwind'>
                    <SiTailwindcss /></button>
            </>
        },
        {
            id: 8,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-red-500' data-tip='Git'>
                    <DiGit /></button>
            </>
        },
        {
            id: 9,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-purple-500' data-tip='Bootstrap'>
                    <FaBootstrap /></button>
            </>
        },
        {
            id: 10,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-yellow-500' data-tip='Firebase'>
                    <SiFirebase /></button>
            </>
        },
        {
            id: 11,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-rose-600' data-tip='HTML5'>
                    <FaHtml5 /> </button>
            </>
        },
        {
            id: 12,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-lime-500' data-tip='CSS3'>
                    <FaCss3Alt /></button>
            </>
        },
        {
            id: 13,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-emerald-600' data-tip='NETLIFY'>
                    <SiNetlify /></button>
            </>
        },
        {
            id: 14,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-violet-500' data-tip='HEROKU'>
                    <GrHeroku /></button>
            </>
        },
        {
            id: 15,
            icon: <>
                <button className='btn btn-gray-600 text-center text-5xl mx-2 tooltip text-rose-500' data-tip='Figma'>
                    <FaFigma /></button>
            </>
        },


    ]
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={gif} style={{ width: '300px', height: '450px' }} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 class="text-3xl font-bold uppercase text-emerald-600">My Skills</h1>
                        <div className='grid grid-cols-3 gap-5 mt-5'>
                            {
                                skills.map(skill => <div
                                    key={skill.id}
                                >
                                    {skill.icon}
                                </div>)
                            }
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Skills;
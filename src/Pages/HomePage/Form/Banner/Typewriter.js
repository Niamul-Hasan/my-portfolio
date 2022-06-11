import React from 'react';
import './Typewriter.css';

const Typewriter = () => {
    return (
        <div className='body'>
            <div class="wrapper">
                <div class="static-txt">I'm a</div>
                <ul class="dynamic-txts">
                    <li><span className='text-indigo-600'>Web Developer</span></li>
                    <li><span className='text-violet-600'>Web Designer</span></li>
                    <li><span className='text-pink-600'>Web Debuger</span></li>
                    <li><span className='text-rose-600'>Coder</span></li>
                </ul>
            </div>
        </div >
    );
};

export default Typewriter;
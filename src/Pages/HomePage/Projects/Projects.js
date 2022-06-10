import React from 'react';
import pic1 from '../../../assets/pchunk.PNG';
import pic2 from '../../../assets/hiking.PNG';
import pic3 from '../../../assets/dental.PNG';
import Project from './Project';

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: ' PC HUNK',
            img: pic1
        },
        {
            id: 2,
            name: 'Hiking House',
            img: pic2
        },
        {
            id: 3,
            name: 'Your Private Dentist',
            img: pic3
        }
    ]
    return (
        <div className='container my-5 mx-auto'>
            <h1 className='text-center uppercase text-3xl font-bold text-teal-500'>Here is my projects</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-3'>
                {projects.map(project => <Project
                    key={project.id}
                    project={project}
                ></Project>)}
            </div>

        </div>
    );
};

export default Projects;
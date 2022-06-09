import React from 'react';

const Project = ({ project }) => {
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={project.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{project.name}</h2>
                    <div class="card-actions">
                        <button class="btn btn-primary">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
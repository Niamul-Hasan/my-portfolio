import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const navigate = useNavigate();
    const showDetails = id => {
        navigate(`/details/${id}`)
    }
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={project.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{project.name}</h2>
                    <div class="card-actions">
                        <button
                            onClick={() => showDetails(project.id)}
                            class="btn btn-primary">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
import React from 'react';
import './Project.css';
import projectData from "./ProjectData"
import ProjectCard from './ProjectCard';
const Project = () => {
    return (
        <div className='container mx-auto py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {projectData.map((value, index) => <ProjectCard key={index} image={value.image} totalLike={value.totalLike} category={value.category} title={value.title} />
                )}
            </div>
        </div>
    );
};

export default Project;
import React, { useEffect, useState } from 'react';
import './Project.css';
import projectData from "./ProjectData"
import ProjectCard from './ProjectCard';
import useProject from '../../Hook/useProject';
const Project = () => {
    const [project, setProject] = useState([])
    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, [])
    console.log(project);
    return (
        <div className='container mx-auto py-12'>
            <div className='heading text-center '>
                <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
                <h1>My Portfolio</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 Portfolio content'>
                {project.map((value, index) => <ProjectCard key={index} value={value} />
                )}
            </div>
        </div>
    );
};

export default Project;
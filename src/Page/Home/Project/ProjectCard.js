import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ value }) => {
    // console.log(value.id);
    return (
        <div className="card  bg-base-100 shadow-xl box">
            <figure className="px-4 pt-4 ">
                <img src={value.image} alt="Shoes" className="rounded-xl " />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{value.title}</h2>
            </div>
            <Link to={`/project/${value.id}`}>
                <button className='btn_shadow w-full'>
                    MORE  DETAILS <i className='fa fa-long-arrow-right'></i>
                </button>
            </Link>

        </div>
    );
};

export default ProjectCard;
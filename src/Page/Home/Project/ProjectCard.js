import React from 'react';

const ProjectCard = (props) => {
    console.log(props);
    return (
        <div className="card  bg-base-100 shadow-xl border-2 border-orange-500">
            <figure className="px-4 pt-4">
                <img src={props.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-title">
                    Price:
                    <div className="badge badge-secondary">Per Pics</div>
                </p>
                <p>Available Quantity:  Pcs</p>
                <p>Minimum Order:  Pcs</p>
                <p><small></small></p>

            </div>

            <button className=' btn btn-primary w-full max-w-xl flex items-center'>Visit here</button>
        </div>
    );
};

export default ProjectCard;
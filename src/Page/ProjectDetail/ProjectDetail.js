import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProject from '../Hook/useProject';

const ProjectDetail = () => {
    const { projectId } = useParams()

    const [projectDetail, setProjectDetail] = useState([])
    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => setProjectDetail(data))
    }, [])

    console.log(projectDetail);
    // console.log(projectId);
    return (
        <div className=' mx-auto'>
            {
                projectDetail.map(project => <>
                    {
                        parseInt(project.id) === parseInt(projectId) && <div>

                            <div class="hero container min-h-screen mx-auto ">
                                <div class="hero-content  flex-col lg:flex-row">
                                    <div class="flex items-center justify-center -mx-4 lg:pl-8">
                                        <div class="flex flex-col items-end px-3">
                                            <img
                                                class="object-center mb-6 rounded shadow-lg  xl:h-40  w-80 xl:w-70"
                                                src={project.image}
                                                alt=""
                                            />
                                            <img class="object-cover w-80  rounded shadow-lg  xl:h-40  xl:w-70" src={project.image2} alt="" />
                                        </div>
                                        <div class="px-3">
                                            <img class="object-cover  rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-full" src={project.image1} alt="" />
                                        </div>
                                    </div>
                                    <div className='pr-8'>
                                        <h1 class="text-5xl font-bold">{project.title}</h1>
                                        <p class="py-6">{project.detail}.</p>
                                        <ul>
                                            <li className='list-disc list-inside'>{project.description}</li>
                                            <li className='list-disc list-inside'>{project.description1}</li>
                                            <li className='list-disc list-inside'>
                                                {project.description2}</li>

                                        </ul>
                                        <h1 className='text-xl'>Technology</h1>
                                        <ul>
                                            <li className='list-disc list-inside'>{project.technology}</li>
                                            <li className='list-disc list-inside'>{project.technology1}</li>
                                        </ul>
                                        <div className='grid grid-cols-6 mt-6'>
                                            <div className=''><button className='btn_shadow'>
                                                <a href={project.live} target="_blank">Live Site<i className='fa fa-long-arrow-right'></i></a>
                                            </button></div>
                                            <div className=''><button className='btn_shadow'>
                                                <a href={project.client} target="_blank">Client <i className='fa fa-long-arrow-right'></i></a>
                                            </button></div>
                                            {
                                                project.description2 ? <div className=''><button className='btn_shadow'>
                                                    <a href={project?.server} target="_blank">Server <i className='fa fa-long-arrow-right'></i></a>
                                                </button></div> : ''
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </>
                )
            }
        </div>
    );
};

export default ProjectDetail;
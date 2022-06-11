import React from 'react';
import './Banner.css';
import hero from "../../../pic/bnanner1.jpg"
import { Typewriter } from "react-simple-typewriter"

const Banner = () => {
    return (
        <div>
            <section className='hero container' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h4>WELCOME TO MY WORLD</h4>
                        <h1 className='md:text-3xl lg:text-5xl font-bold'>
                            I’m Zehadul Islam
                        </h1>
                        <h2 className='md:text-3xl'>

                            <span>

                                <Typewriter words={[" Web Developer.", "Full Stack developer"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                            </span>
                        </h2>

                        <p> I am a front-end web application developer, and I am especially proﬁcient with Javascript and React.js frameworks..</p>

                        <div className=' d_flex mt-12 '>
                            <div className='col_1 '>
                                <h4>FIND WITH ME</h4>
                                <div className='button grid gap-1'>
                                    <button className='btn_shadow'>

                                        <a href="https://www.linkedin.com/in/zehadul-islam/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin"></i></a>

                                    </button>
                                    <button className='btn_shadow'>
                                        <a href="https://github.com/zayanahmed925" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-github"></i></a>

                                    </button>

                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>About me</h4>
                                <button className='btn_shadow'>
                                    <a href="https://drive.google.com/file/d/1Audnj2KrRDs5HZO3bbN1NpQD0u7MB_Rq/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume <i className='fa fa-long-arrow-right'></i></a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className=''>
                            <img src={hero} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
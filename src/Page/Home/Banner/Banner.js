import React from 'react';
import './Banner.css';
import hero from "../../../pic/banner-00.png"
import skill1 from "../../../pic/skill1.png"
import skill2 from "../../../pic/skill2.png"
import skill3 from "../../../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Banner = () => {
    return (
        <div>
            <section className='hero container' id='home'>
                <div className='container f_flex top'>
                    <div className='left top'>
                        <h4>WELCOME TO MY WORLD</h4>
                        <h1>
                            I’m Zehadul Islam
                        </h1>
                        <h2>

                            <span>

                                <Typewriter words={[" Web Developer.", "Full Stack developer"]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                            </span>
                        </h2>

                        <p> I am a front-end web application developer, and I am especially proﬁcient with Javascript and React.js frameworks..</p>

                        <div className='hero_btn d_flex'>
                            <div className='col_1'>
                                <h4>BEST SKILL ON</h4>
                                <div className='button'>
                                    <button className='btn_shadow'>
                                        <i class="fa-brands fa-js"></i>

                                    </button>
                                    <button className='btn_shadow'>
                                        <i class="fa-brands fa-react"></i>
                                    </button>
                                    <button className='btn_shadow'>
                                        <i class="fa-brands fa-node"></i>
                                    </button>
                                </div>
                            </div>
                            <div className='col_1'>
                                <h4>About me</h4>
                                <button className='btn_shadow'>
                                    <a href="https://drive.google.com/file/d/1Audnj2KrRDs5HZO3bbN1NpQD0u7MB_Rq/view?usp=sharing" target="_blank" rel="noopener noreferrer">My Resume <i className='fa fa-long-arrow-right'></i></a>
                                </button>
                                {/* <button className='btn_shadow'>
                                    <img src={skill2} alt='' />
                                </button>
                                <button className='btn_shadow'>
                                    <img src={skill3} alt='' />
                                </button> */}
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <div className='right_img'>
                            <img src={hero} alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
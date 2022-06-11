import React from 'react';
import profile from '../../pic/bnanner1.jpg'
const Aboutme = () => {
    return (
        <div>
            <section className='Contact mt-2' id='contact'>
                <div className='container top'>
                    <div className='heading text-center'>
                        <h4>CONTACT</h4>
                        <h1>Contact With Me</h1>
                    </div>

                    <div className='content d_flex'>
                        <div className='left'>
                            <div className='box box_shodow'>
                                <div className='img'>
                                    <img src='' alt='' />
                                </div>
                                <div className='details'>
                                    <h1>Hi, This is Zehadul Islam</h1>
                                    <p>Full Stack web developer</p>
                                    <p>I am a front-end web application developer, and I am especially proﬁcient with Javascript and React.js frameworks.</p> <br />
                                    <p>Phone: 01621074325</p>
                                    <p>Email: zehadul925@gmail.com</p> <br />
                                    <span >BEST SKILL ON</span>
                                    <div className='button '>
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
                            </div>
                        </div>

                        <div className='right  px-6'>

                            <img className='max-h-96' src={profile} alt="" />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Aboutme;
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const form = useRef();
    const formSubmit = (event) => {
        event.preventDefault()
        // const name = event.target.name.value;
        // const email = event.target.email.value;
        // const phone = event.target.phone.value;
        // const message = event.target.message.value;
        // console.log(name, email);
        emailjs.sendForm('service_jw9jhu4', 'template_f0uvo69', form.current, 'Gt7GPVaUxFu4f03VT')
            .then((result) => {
                toast.success('message sent')
                event.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div>
            <section className='Contact' id='contact'>
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
                                    <span >FIND WITH ME</span>
                                    <div className='button '>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-facebook-f'></i>
                                        </button>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-instagram'></i>
                                        </button>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-twitter'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='right box_shodow'>
                            <form ref={form} onSubmit={formSubmit}>

                                <div className='input'>
                                    <span>YOUR NAME</span>
                                    <input type='text' placeholder='Enter Your Name' name="user_name" required />
                                </div>


                                <div className='input'>
                                    <span>EMAIL </span>
                                    <input type='email' placeholder='Enter Your Email' name="user_email" required />
                                </div>
                                <div className='input'>
                                    <span>YOUR MESSAGE </span>
                                    <textarea name="message" placeholder='Enter Your message' required></textarea>
                                </div>
                                <button className='btn_shadow'>
                                    SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                                </button>
                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
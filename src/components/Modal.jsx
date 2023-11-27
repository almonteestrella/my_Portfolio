import React, { useRef } from 'react';
import { socialLinks } from '@/utils';
import {
    ModalHeader,
    Article1,
    FlexDiv1,
    Article2,
} from './componentStyles/ComponentsStyles';
import { FaTimes } from 'react-icons/fa';
import { BsEnvelopeFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm(
    //             process.env.NEXT_PUBLIC_SERVICE_ID,
    //             process.env.NEXT_PUBLIC_TEMPLATE_ID,
    //             form.current,
    //             process.env.NEXT_PUBLIC_PUBLIC_KEY
    //         )
    //         .then(
    //             (result) => {
    //                 console.log(result.text);
    //             },
    //             (error) => {
    //                 console.log(error.text);
    //             }
    //         );

    //     e.target.reset();
    // };
    return (
        <main className='modal'>
            <ModalHeader>
                <div>
                    <h2>get in touch</h2>
                    <button
                        type='button'
                        onClick={onClose}
                        className='modal-close'
                    >
                        <FaTimes />
                    </button>
                </div>

                <p>let's colaborate on your next project</p>
            </ModalHeader>
            <FlexDiv1>
                <Article1>
                    <form>
                        <div className='div'>
                            <label htmlFor='user_name'>your name</label>
                            <input
                                type='text'
                                name='user_name'
                                id='user_name'
                                placeholder='enter your name'
                                required
                            />
                        </div>
                        <div className='div'>
                            <label htmlFor='user_email'>your email</label>
                            <input
                                type='email'
                                name='user_email'
                                id='user_email'
                                placeholder='enter your email'
                                required
                            />
                        </div>
                        <div className='div'>
                            <label htmlFor='message'>
                                write something about your project goals and
                                timeframe
                            </label>
                            <textarea
                                name='message'
                                id='message'
                                placeholder='enter your message'
                            />
                        </div>
                        <div className='div'>
                            <label htmlFor='message'>
                                How to reach out to you back?
                            </label>
                            <textarea
                                name='message'
                                id='message'
                                placeholder='eg.phone number or email'
                            />
                        </div>

                        <input type='submit' value='Send' />
                    </form>
                </Article1>
                <Article2>
                    <h3>my socials</h3>
                    <div>
                        {socialLinks.map(({ icon, id }) => {
                            return (
                                <ul key={id}>
                                    <li>{icon}</li>
                                </ul>
                            );
                        })}
                    </div>
                    <h3>email address</h3>
                    <div className='div1'>
                        <span>
                            <BsEnvelopeFill />
                        </span>
                        <h4>almonteestrella@gmail.com</h4>
                    </div>
                </Article2>
            </FlexDiv1>
        </main>
    );
};

export default Modal;

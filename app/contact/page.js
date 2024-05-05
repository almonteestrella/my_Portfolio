'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
    const form = useRef();
    const { toast } = useToast();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )

            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSending(false);
                    toast({
                        description:
                            'Thank you for your message; I will get back to you soon!',
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );

        e.target.reset();
    };
    return (
        <main className='mt-4'>
            <div className='text-center mb-8'>
                <h2 className='text-4xl font-bold capitalize mb-3'>
                    get in <span className='underline-header'>touch</span>{' '}
                </h2>

                <p className='text-[#6F74A7] dark:text-white'>
                    Let &apos;s colaborate on your next project
                </p>
            </div>
            <section className='bg-white dark:bg-[#192333]'>
                <form
                    className='py-10 px-5 lg:max-w-4xl lg:mx-auto'
                    onSubmit={sendEmail}
                    ref={form}
                >
                    <div className='mb-10'>
                        <label htmlFor='user_name' className='block mb-2'>
                            Your name
                        </label>
                        <input
                            type='text'
                            name='user_name'
                            id='user_name'
                            placeholder='enter your name'
                            required
                            className='bg-[#F3F8FF] dark:bg-[#2C3C56] w-full rounded-md px-1 py-3 outline-1 dark:outline-0 outline-[#CCE1FF]'
                        />
                    </div>
                    <div className='mb-10'>
                        <label htmlFor='user_email' className='block mb-2'>
                            Your email
                        </label>
                        <input
                            type='email'
                            name='user_email'
                            id='user_email'
                            placeholder='enter your email'
                            required
                            className='bg-[#F3F8FF] dark:bg-[#2C3C56] w-full rounded-md px-1 py-3 outline-1 outline-[#CCE1FF] dark:outline-0'
                        />
                    </div>
                    <div className='mb-10'>
                        <label htmlFor='message' className='block mb-2'>
                            Write something about your project goals and
                            timeframe
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            placeholder='enter your message'
                            className='bg-[#F3F8FF] dark:bg-[#2C3C56] w-full rounded-md px-1 py-3 outline-1 outline-[#CCE1FF] dark:outline-0'
                        />
                    </div>
                    <div className='mb-10'>
                        <label htmlFor='message' className='block mb-2'>
                            How to reach out to you back?
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            placeholder='eg.phone number or email'
                            className='bg-[#F3F8FF] dark:bg-[#2C3C56] w-full rounded-md px-1 py-3 outline-1 outline-[#CCE1FF] dark:outline-0'
                        />
                    </div>

                    <input
                        type='submit'
                        value={`${isSending ? 'Sending...' : 'Send'}`}
                        disabled={isSending}
                        className='w-full bg-gradient-to-r from-[#3563e9] to-[#4ae2c9] rounded-md p-2 transition-all cursor-pointer text-white lg:w-48 hover:text-slate-300'
                    />
                </form>
                <h1></h1>
            </section>
        </main>
    );
};

export default ContactPage;

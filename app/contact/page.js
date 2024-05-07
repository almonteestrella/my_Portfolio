'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import Link from 'next/link';
import { socialLinks } from '../utils';
import { MapPinned } from 'lucide-react';

const ContactPage = () => {
    const form = useRef();
    const { toast } = useToast();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        const userName = form.current['user_name'].value.trim();
        const userEmail = form.current['user_email'].value.trim();
        const message = form.current['message'].value.trim();

        // Basic validation
        if (!userName || !userEmail || !message) {
            toast({
                action: (
                    <ToastAction altText='Missing fields'>
                        Missing fields
                    </ToastAction>
                ),
                description: 'Please fill in all fields.',
            });
            setIsSending(false);
            return;
        }

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )

            .then(
                () => {
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
            <section className='bg-white dark:bg-[#192333] flex justify-between container gap-x-10 lg:flex-row flex-col-reverse gap-y-8 lg:gap-y-0 lg:py-8 lg:px-10'>
                <article className='lg:w-2/5 flex flex-col gap-12 w-full'>
                    <div className=''>
                        <h3 className='text-xl capitalize mb-4 text-[#778295] dark:text-white'>
                            my socials
                        </h3>
                        <ul className='flex gap-x-6'>
                            {socialLinks.map(({ icon, id }) => {
                                return (
                                    <li key={id}>
                                        <Link
                                            href={'#'}
                                            className='custom-transition hover:text-[#778295] dark:hover-text-[#f1f3f4]'
                                        >
                                            {icon}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-xl capitalize mb-4 text-[#778295] dark:text-white'>
                            location
                        </h3>
                        <h4 className='text-xl capitalize flex items-center'>
                            <span className='mr-2'>
                                <MapPinned />
                            </span>
                            hamilton, ON
                        </h4>
                    </div>
                </article>
                <form
                    className='lg:w-3/5 w-full'
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

                    <input
                        type='submit'
                        value={`${isSending ? 'Sending...' : 'Send'}`}
                        disabled={isSending}
                        className='w-full bg-gradient-to-r from-[#3563e9] to-[#4ae2c9] rounded-lg p-2 transition-all cursor-pointer text-white lg:w-48 hover:text-slate-300'
                    />
                </form>
            </section>
            <h3 className='capitalize text-[#778295] dark:text-white text-center bg-white dark:bg-[#192333] lg:p-6 p-10'>
                &copy; <span>{new Date().getFullYear()}</span> juan almonte. All
                rights reserved
            </h3>
        </main>
    );
};

export default ContactPage;

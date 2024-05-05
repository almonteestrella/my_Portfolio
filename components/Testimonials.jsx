'use client';

import { Members } from '@/app/utils';
import Image from 'next/image';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
    const [group, setGroup] = useState(Members);
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1;

            if (index > group.length - 1) {
                index = 0;
            }
            return index;
        });
    };
    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1;

            if (index < 0) {
                index = group.length - 1;
            }
            return index;
        });
    };
    return (
        <main id='testimonials' className='py-12 dark:bg-[#192333]'>
            <section className='container'>
                <h1 className='text-3xl font-bold text-center mb-8'>
                    What <span className='underline-header'>they say</span>{' '}
                    <br className='lg:hidden' /> about me
                </h1>

                <div className='relative overflow-hidden h-[460px] lg:h-[210px]'>
                    {Members.map((testimonial, personIndex) => {
                        const { id, title, image, name, quote } = testimonial;

                        //dynamic css
                        let position = 'nextSlide';

                        if (personIndex === index) {
                            position = 'activeSlide';
                        }

                        if (
                            personIndex === index - 1 ||
                            (index === 0 && personIndex === group.length - 1)
                        ) {
                            position = 'lastSlide';
                        }
                        return (
                            <article
                                className={`${position} flex gap-4 flex-col lg:flex-row w-11/12 mx-auto slider-article justify-center`}
                                key={id}
                            >
                                <Image
                                    src={image}
                                    width={200}
                                    height={200}
                                    alt={name}
                                    className='rounded-md mb-2 mx-auto lg:m-0'
                                />

                                <div className='lg:max-w-4xl flex flex-col gap-2'>
                                    <Image
                                        src='/stars.svg'
                                        height={150}
                                        width={150}
                                        alt='stars-rating'
                                        className=''
                                    />
                                    <p className='quote text-[#6F74A7] dark:text-white'>
                                        {quote}
                                    </p>
                                    <div>
                                        <h4 className='capitalize font-semibold'>
                                            <span>---</span>
                                            {name}
                                        </h4>
                                        <h5 className='text-[#6F74A7] dark:text-white'>
                                            {title}
                                        </h5>
                                    </div>
                                </div>
                            </article>
                        );
                    })}

                    <button
                        className='prev bg-white dark:text-white dark:bg-[#151E2C] custom-transition hover:text-slate-500'
                        onClick={prevSlide}
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <button
                        className='next bg-white dark:text-white dark:bg-[#151E2C] custom-transition hover:text-slate-500'
                        onClick={nextSlide}
                    >
                        <ArrowRight size={24} />
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Testimonials;

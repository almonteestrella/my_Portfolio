import ProjectList from '@/components/ProjectList';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProjectPage = () => {
    return (
        <main className='dark:bg-[#192333]'>
            <section className='container'>
                <div>
                    <h2 className='text-4xl font-bold capitalize text-center mt-4 mb-8'>
                        featured{' '}
                        <span className='underline-header'>projects</span>
                    </h2>

                    <p className='text-center max-w-4xl mx-auto text-[#6F74A7] dark:text-white'>
                        Dive into my top projects, showcasing my expertise and
                        impact in driving business growth. These highlights
                        demonstrate my commitment to delivering exceptional
                        results for clients.
                    </p>
                </div>

                <section className='flex flex-col lg:flex-row gap-4'>
                    <ProjectList />
                    <ProjectList />
                    <ProjectList />
                    <ProjectList />
                </section>
            </section>
        </main>
    );
};

export default ProjectPage;

// grid grid-rows-2 lg:grid-cols-2 gap-4

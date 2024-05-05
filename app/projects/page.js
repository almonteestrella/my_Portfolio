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

                <div>
                    {/* <Link href={`/projects/${project}`}>
                        <Image
                            src='/sampleProject.svg'
                            width={678}
                            height={595}
                            alt='xxx'
                        />
                    </Link> */}
                    <ProjectList />
                </div>
            </section>
        </main>
    );
};

export default ProjectPage;

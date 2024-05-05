import Link from 'next/link';
import React from 'react';

const ProjectDetailPage = async ({ params }) => {
    const project = params.project;

    return (
        <main>
            <h2 className='text-4xl font-semibold'>{project}</h2>
            <p>description</p>
            <Link href={'#'}>live site</Link>
        </main>
    );
};

export default ProjectDetailPage;

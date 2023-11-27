import Contact from '@/sections/Contact/Contact';
import Footer from '@/sections/Footer/Footer';
import Header from '@/sections/Header/Header';
import Projects from '@/sections/Projects/Projects';
import Service from '@/sections/Service/Service';

import Skills from '@/sections/Skills/Skills';
import Testimonials from '@/sections/Testimonials/Testimonials';
import Work_Experience from '@/sections/workExperience/Work_Experience';
import React from 'react';

import { createClient } from 'next-sanity';

const Index = () => {
    return (
        <main>
            <Header />
            <Skills />
            <Service />
            <Work_Experience />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
};

// const client = createClient({
//     projectId: 'c1dufpqu',
//     dataset: 'production',
//     title: 'My Wersonal Portfolio',
//     apiVersion: '2023-11-01',
//     useCdn: false,
// });

// export async function getStaticProps() {
//     const pets = await client.fetch(`*[_type == "pet"]`);

//     return {
//         props: {
//             pets,
//         },
//     };
// }
export default Index;

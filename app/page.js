import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    return (
        <main className='dark:bg-[#192333]'>
            <section className='lg:flex lg:items-center container'>
                <div className='flex-1 flex flex-col gap-y-4'>
                    <h3 className='text-[#0252CD] uppercase tracking-widest font-medium dark:text-[#428DFF]'>
                        hi, i am juan almonte
                    </h3>
                    <h1 className='capitalize lg:text-6xl text-5xl font-bold leading-tight'>
                        let &apos;s turn your{' '}
                        <span className='underline-header'>
                            vision and ideas
                        </span>
                        <br />
                        into a web reality
                    </h1>
                    <p className='text-[#6F74A7] dark:text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Optio eum, at explicabo enim doloremque iure sit quidem
                        repellendus exercitationem asperiores
                    </p>

                    <div className='flex gap-4 items-center flex-col text-center lg:flex-row'>
                        <Link
                            href='#projects'
                            className='bg-gradient-to-r from-[#562BFF] to-[#7DA5FF] px-6 py-3 rounded-full text-[#ffffff] capitalize w-full'
                        >
                            my work
                        </Link>
                    </div>
                </div>

                <div>
                    <Image
                        src='/hero.svg'
                        width={678}
                        height={595}
                        alt='hero-img'
                    />
                </div>
            </section>

            <Services />
            <Testimonials />
        </main>
    );
}

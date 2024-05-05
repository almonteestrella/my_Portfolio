import ServiceCard from '@/components/ServiceCard';

const Service = () => {
    return (
        <main className='container py-12 bg-white dark:bg-[#192333]'>
            <h1 className='text-3xl font-bold text-center mb-8'>
                What <span className='underline-header'>service</span>{' '}
                <br className='lg:hidden inline' /> do i provide
            </h1>

            <div className='flex flex-col lg:flex-row gap-4'>
                <ServiceCard
                    title='analitys & SEO'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi qui sapiente beatae adipisci libero dolorum'
                    iconA='/icon6.svg'
                    iconB='/icon5.svg'
                />
                <ServiceCard
                    title='front-end dev'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi qui sapiente beatae adipisci libero dolorum'
                    iconA='/icon8.svg'
                    iconB='/icon7.svg'
                />
                <ServiceCard
                    title='back-end dev'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi qui sapiente beatae adipisci libero dolorum'
                    iconA='/icon4.svg'
                    iconB='/icon3.svg'
                />
                <ServiceCard
                    title='web optimization'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi qui sapiente beatae adipisci libero dolorum'
                    iconA='/icon2.svg'
                    iconB='/icon1.svg'
                />
            </div>
        </main>
    );
};

export default Service;

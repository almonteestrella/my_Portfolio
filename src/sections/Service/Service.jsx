import ServiceCard from '@/components/ServiceCard';
import { H1, Span, ServicesDiv, Main, Br } from './ServiceStyles';

const Service = () => {
    return (
        <Main>
            <H1>
                what <Span>service</Span> <Br /> do i provide
            </H1>

            <ServicesDiv>
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
            </ServicesDiv>
        </Main>
    );
};

export default Service;

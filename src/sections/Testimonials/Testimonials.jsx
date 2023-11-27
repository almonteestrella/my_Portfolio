import Image from 'next/image';

import {
    H1,
    Span,
    Container,
    FlexSection,
    Main,
    ContentDiv,
} from './Testimonials_Styled';
import { Members } from '@/utils';
import { useState } from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

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
        <Main id='testimonials'>
            <Container>
                <H1>
                    What <Span>they say</Span> <br /> about me
                </H1>

                <div className='contentDiv'>
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
                            <article className={position} key={id}>
                                <Image
                                    src={image}
                                    width={0}
                                    height={0}
                                    alt={name}
                                    className='person-img'
                                />

                                <div>
                                    <Image
                                        src='/stars.svg'
                                        height={0}
                                        width={0}
                                        alt='stars-rating'
                                        className='stars-img'
                                    />
                                    <p className='quote'>{quote}</p>
                                    <div>
                                        <h4 className='name'>
                                            <span>___</span>
                                            {name}
                                        </h4>
                                        <h5 className='title'>{title}</h5>
                                    </div>
                                </div>
                            </article>
                        );
                    })}

                    <button className='prev' onClick={prevSlide}>
                        <BsArrowLeft />
                    </button>
                    <button className='next' onClick={nextSlide}>
                        <BsArrowRight />
                    </button>
                </div>
            </Container>
        </Main>
    );
};

export default Testimonials;

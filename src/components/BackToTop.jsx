import { useEffect, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import { ButtomDiv } from './componentStyles/ComponentsStyles';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <ButtomDiv>
            <button
                onClick={scrollToTop}
                className={`scroll ${isVisible ? 'show' : 'hide'}`}
            >
                <span>
                    <BsArrowUp />
                </span>
            </button>
        </ButtomDiv>
    );
};

export default BackToTop;

import Image from 'next/image';
import { Container } from './componentStyles/ComponentsStyles';

const TechLogo = ({ image }) => {
    return (
        <Container>
            <Image
                src={image}
                alt='tech logo'
                width={0}
                height={0}
                className='logo-img'
            />
        </Container>
    );
};

export default TechLogo;

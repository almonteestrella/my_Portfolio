import Image from 'next/image';

const TechLogo = ({ image, name }) => {
    return (
        <main>
            <Image
                src={image}
                alt='tech logo'
                width={50}
                height={50}
                name={name}
                className='logo-img'
            />
        </main>
    );
};

export default TechLogo;

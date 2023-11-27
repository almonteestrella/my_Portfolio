import Image from 'next/image';
import Link from 'next/link';
import { ProjectCardDiv, Div1 } from './componentStyles/ComponentsStyles';

const ProjectCard = ({
    title,
    image,
    imageInfo,
    icon,
    color,
    tech,
    caseStudy,
    bg_color,
    left = false,
}) => {
    const imgClass = left ? 'img-left' : 'img-right';
    return (
        <ProjectCardDiv color={color}>
            <article>
                <div>
                    <h2>{title}</h2>

                    <div className='techs-container'>
                        {tech?.map((techItem, index) => (
                            <ul key={index}>
                                <Div1 bg_color={bg_color}>
                                    <li className='tech-li'>{techItem}</li>
                                </Div1>
                            </ul>
                        ))}
                    </div>

                    <div className='link' bg_color={bg_color}>
                        <Link href={caseStudy} target='_blank'>
                            see case study <span>{icon}</span>
                        </Link>
                    </div>
                </div>
            </article>

            <article className='img-container'>
                <Image
                    src={image}
                    alt={imageInfo}
                    width={0}
                    height={0}
                    className={`project-img ${imgClass}`}
                />
            </article>
        </ProjectCardDiv>
    );
};

export default ProjectCard;

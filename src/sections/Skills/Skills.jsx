import TechLogo from '@/components/TechLogo';
import React from 'react';
import { Section, H1, Div1, SkillsDiv, Main } from './SkillsStyles';

const Skills = () => {
    return (
        <Main>
            <Section>
                <Div1>
                    <H1>my skills</H1>
                </Div1>
                <SkillsDiv>
                    <TechLogo image='/js.svg' name='javascript' />
                    <TechLogo image='/react.svg' name='react' />
                    <TechLogo image='/redux.svg' name='redux' />
                    <TechLogo image='/next.svg' name='next' />
                    <TechLogo image='/ts.svg' name='typescript' />
                    <TechLogo image='/tailwind.svg' name='tailwind' />
                    <TechLogo image='/framerMotion.svg' name='framer motion' />
                    <TechLogo image='/git.svg' name='git' />
                    <TechLogo image='/github.svg' name='github' />
                    <TechLogo image='/node.svg' name='node' />
                    <TechLogo image='/express.svg' name='express' />
                    <TechLogo image='/mongodb.svg' name='mongo' />
                </SkillsDiv>
            </Section>
        </Main>
    );
};
export default Skills;

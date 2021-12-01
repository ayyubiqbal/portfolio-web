import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg'
import intelligence from '../img/intelligence.svg'
import gamedev from '../img/game-dev.svg'

const About = () => {
    return (
        <div className="AboutPage">
            <Tittle title="About Me" span={"About Me"} />
            <ImageSection />
            <Tittle title="My Skills" span={"My Skills"} />
            <div className="skills-container">
                <SkillsSection skill={'JavaScript'} progress={'70%'} width={"70%"} />
                <SkillsSection skill={'ReactJS'} progress={'80%'} width={"80%"} />
                <SkillsSection skill={'Tailwind CSS'} progress={'75%'} width={"75%"} />
                <SkillsSection skill={'SASS'} progress={'90%'} width={"90%"} />
                <SkillsSection skill={'Node'} progress={'60%'} width={"60%"} />
                <SkillsSection skill={'ExpressJS'} progress={'65%'} width={"65%"} />
                <SkillsSection skill={'MongoDB'} progress={'70%'} width={"70%"} />
                <SkillsSection skill={'Figma'} progress={'50%'} width={"50%"} />
            </div>
            <Tittle title="Services" span={"Services"} />
            <div className="services-container">
                <ServicesSection image={design} title={'Web Development'} text={"Lorem ipsum dolor sit amet consectetur."} />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} text={"Lorem ipsum dolor sit amet consectetur."} />
                <ServicesSection image={gamedev} title={'Game Development'} text={"Lorem ipsum dolor sit amet consectetur."} />
            </div>
        </div>
    );
};

export default About;
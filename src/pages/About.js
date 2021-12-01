import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from './ImageSection';

const About = () => {
    return (
        <div className="AboutPage">
            <Tittle title="About Me" span={"About Me"} />
            <ImageSection />
        </div>
    );
};

export default About;
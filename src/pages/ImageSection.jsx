import React from 'react';
import about from '../img/portfolio-man.jpg';

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am <span>Ayyub Iqbal</span></h4>
                <p className="about-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque beatae deserunt commodi eius officia ea voluptatem? Magnam expedita aliquid sit.
                </p>
                <div className="about-details">
                    <div className="name-details">
                        <p>Full Name</p>
                        <p>: Ayyub Iqbal</p>
                    </div>
                    <div className="name-details">
                        <p>Nationality</p>
                        <p>: Bangladeshi</p>
                    </div>
                    <div className="name-details">
                        <p>Languages</p>
                        <p>: Bangla, English, Hindi, Urdu </p>
                    </div>
                    <div className="name-details">
                        <p>Address</p>
                        <p>: Noakhali, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageSection;
import React from 'react';
import about from '../img/propic2.png';

const ImageSection = () => {
    return (
        <div className="ImageSection">
            {/* <div className="img">
                <img src={about} alt="" />
            </div> */}
            <div className="about-info">
                <h4>I am <span>Ayyub Iqbal</span></h4>
                <p className="about-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque beatae deserunt commodi eius officia ea voluptatem? Magnam expedita aliquid sit.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Nationality</p>
                        <p>Address</p>
                        <p>Email</p>
                        <p>Languages</p>
                    </div>
                    <div className="right-section">
                        <p>: Ayyub Iqbal</p>
                        <p>: Bangladeshi</p>
                        <p>: Noakhali, Bangladesh</p>
                        <p>: abuayubiqbal@gmail.com</p>
                        <p>: Bangla, English, Hindi, Urdu</p>
                    </div>
                </div>
                {/* <button className="btn">Resume</button> */}
            </div>
        </div>
    );
};

export default ImageSection;
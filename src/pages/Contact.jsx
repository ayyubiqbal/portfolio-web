import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from "../img/phone.svg"
import email from "../img/emailme.svg"
import location from "../img/location.svg"
import Tittle from '../Components/Tittle';
import Form from '../Components/Form';

const Contact = () => {
    return (
        <div>
            <div className="title">
                <Tittle title="Contact Me" span={"Contact Me"} />
            </div>
            <Form />
            <div className="ContactPage">
                {/* <div className="map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.27923991057244!3d23.780573258035957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1638414405996!5m2!1sen!2sbd" width="600" height="450" style={{ "border": 0 }} allowFullScreen="" loading="lazy"></iframe>
                </div> */}
                {/* <div className="contact-section">
                    <ContactItem icon={phone} text1={"+880 1949219218"} title={"Phone"} />
                    <ContactItem icon={email} text1={"abuayubiqbal@gmail.com"} title={"Email"} />
                    <ContactItem icon={location} text1={"Noakhali, Bangladesh"} title={"Address"} />
                </div> */}
            </div>
        </div>
    );
};

export default Contact;
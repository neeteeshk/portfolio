import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';
import ContactUs from '../Components/ContactUs';
function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29009.90295462909!2d85.48895632238964!3d24.649939385816403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f305f65a03442b%3A0x5c0f2c487cb0e376!2sRajauli%2C%20Bihar!5e0!3m2!1sen!2sin!4v1623486049041!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 6260807946'} text2={'+91 9262316971'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'neeteesh205@gmail.com'} text2={'neeteesh0@outlook.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'near Purani Bus Stand Rajauli, Nawada, Bihar'} text2={'India'} title={'Address'}/>
                </div>
            </div>
            <ContactUs/>
        </div>
    )
}

export default ContactPage;

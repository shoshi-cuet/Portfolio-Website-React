import React from "react";

import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                {/* CONTACT OPTIONS */}
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail />
                        <h4>Email</h4>
                        <h5>sk8ergirl70@gmail.com</h5>
                        <a href="mailto:sk8ergirl70@gmail.com">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine />
                        <h4>Messenger</h4>
                        <h5>Fatema Tuz Zohora</h5>
                        <a href="http://m.me/fatemazohra.shoshi">Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp />
                        <h4>WhatsApp</h4>
                        <h5>Shoshi</h5>
                        <a href="http://api.whatsapp.com/send?phone=+8801681986716">Send a Message</a>
                    </article>
                </div>

                {/* DIRECT MESSAGE FORM */}
                <form action="">
                    <input type='text' name="name" placeholder="Your Full Name" required/>
                    <input type='text' name="email" placeholder="Your Email Address" required/>
                    <textarea name="message" rows={7} placeholder="Your Meaasege" />
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;
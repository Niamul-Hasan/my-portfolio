import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const service_ID = 'service_hgerqid';
        const templet_ID = "template_ukahikh";
        const public_key = '79VXY97ZOADEmzONs';

        emailjs.sendForm(service_ID, templet_ID, form.current, public_key)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <div >
            <form ref={form} onSubmit={sendEmail}
                className='d-flex flex-column justify-content-center align-items-center p-5'
            >
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" className='mt-2' />
            </form>


        </div>
    );
};

export default ContactForm;
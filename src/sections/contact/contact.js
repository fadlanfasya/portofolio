import React from 'react'

import "./contact.scss";

function Contact() {
    return (
        <section id="contact">
            <h3 className="title">Contact</h3>
            <h1 className="strokeText scrol_anime">Get In Touch</h1>
            <div>
            <p className="scrol_anime">
            Feel free to contact me, my inbox is always open. Whether you have an opportunity for me,
             or you have a question or maybe just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="btn_container scrol_anime">
            <a aria-label="link to email"className="btn" href="mailto:barrougmeryem@gmail.com">Contact Me</a>
            </div>
            </div>
          
        </section>
    )
}

export default Contact

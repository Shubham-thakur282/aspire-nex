import React from "react";
import { faEnvelope, faPhoneVolume, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import ContactBox from "./ContactBox";

const contactJson = [
    {
        id: 1,
        icon: faLocationDot,
        heading: "Address",
        content: "Mandi, Himachal Pradesh"
    },
    {
        id: 2,
        icon: faEnvelope,
        heading: "Email",
        content: "shubham58188@gmail.com"
    },
    {
        id: 3,
        icon: faPhoneVolume,
        heading: "Phone",
        content: "7018058188"
    },

]

const Contact = () => {
    return (
        <section className="contact" id="contact">

            <div className="album py-5 contact-container">
                <div className="container">
                    <div className="box-heading">
                        <h1 className="nav-heading">Contact</h1>
                        <p>Feel free to reach out and let's connect! I'm excited to hear from you and explore potential
                            collaborations or opportunities.</p>
                    </div>

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {contactJson.map((contact) => {
                            return (<ContactBox key={contact.id} icon={contact.icon} heading={contact.heading} content={contact.content} />)
                        })}
                    </div>
                </div>
            </div>
        </section>)
}

export default Contact;
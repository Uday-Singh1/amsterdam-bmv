import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className="contact-container">
            <article className="contact-info">
                <address className="address">
                    <h3>Bezoekadres</h3>
                    <p>Weesperstraat 432</p>
                    <p>1018 DN Amsterdam</p>
                    <p>E: <a href="mailto: info.pmb@amsterdam.nl"> info.pmb@amsterdam.nl</a></p>
                </address>

                <address className="address">
                    <h3>Postadres</h3>
                    <p>Postbus 1269</p>
                    <p>1000 BG Amsterdam</p>
                </address>

                <div className="email">
                    <h3>Informatie over inhuur</h3>
                    <p>Neem contact op met Dilia Schouten van de afdeling Markt en Capaciteit:</p>
                    <p>E: <a href="mailto:d.schouten@amsterdam.nl">d.schouten@amsterdam.nl</a></p>
                </div>
            </article>

            <article className="map">
                <div className="map-container">
                    <iframe
                        title="Google Maps"
                        loading="lazy"
                        allowFullScreen
                        className="map-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.2010757652584!2d4.916166215640133!3d52.35996027977995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c939e6d275%3A0x83e1d62b6f3a6549!2sWeesperstraat%20432%2C%201018%20DN%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1642598554119!5m2!1sen!2sus"
                    ></iframe>
                </div>
            </article>
        </section>
    );
};

export default Contact;

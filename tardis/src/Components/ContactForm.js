import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <>
      <section id="contact">
        {/* <!-- <div className="contact container"> --> */}
        <div className="left-contact">
          <div className="left-img"></div>
        </div>
        <div className="right-contact">
          <div className="contact-item">
            <div className="sectionheader">
              <h1>CONTACT US</h1>
            </div>
            <article>
              <p>
                “While we’re good with TIME & SPACE signals, there are simpler
                ways for us to get in touch and answer your questions”
              </p>

              <label htmlFor="checkcontact" className="contactbutton">
                <div className="mail"></div>
              </label>
              <input id="checkcontact" type="checkbox" />

              <form action="" method="post" className="contactform">
                <p className="input_wrapper">
                  <input
                    type="text"
                    name="contact_nom"
                    value=""
                    id="contact_nom"
                  />
                  <label htmlFor="contact_nom">NAME</label>
                </p>
                <p className="input_wrapper">
                  <input
                    type="text"
                    name="contact_email"
                    value=""
                    id="contact_email"
                  />
                  <label htmlFor="contact_email">EMAIL</label>
                </p>
                <p className="input_wrapper">
                  <input
                    type="text"
                    name="contact_sujet"
                    value=""
                    id="contact_sujet"
                    placeholder="Step on the TARDIS and reach your next step !!"
                  />
                  <label htmlFor="contact_sujet">SUBJECT</label>
                </p>
                <p className="textarea_wrapper">
                  <textarea
                    name="contact_message"
                    id="contact_message"
                  ></textarea>
                </p>
                <p className="submit_wrapper">
                  <input
                    type="submit"
                    value="CAPITULATE"
                    placeholder="Step on the TARDIS and reach your next step !!"
                  />
                </p>
              </form>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

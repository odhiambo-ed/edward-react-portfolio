import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h2>Contact</h2>
        <p>
          You can contact me at the addresses listed below for consultation,
          other services or enquiries. Alternatively, you could leave me a
          message at the tab below, to which I will respond promptly.
        </p>
      </div>
      <div className="row" data-aos="fade-in">
        <div className="col-lg-5 d-flex align-items-stretch">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt" />
              <h4>Location:</h4>
              <p>Nairobi, Kenya</p>
            </div>
            <div className="email">
              <i className="bi bi-envelope" />
              <h4>Email:</h4>
              <p>
                <span>
                  <a
                    href="mailto:odhiambo.edward111@gmail.com"
                    onclick={`gtag('event', 'click', { event_category: 'Mailto Link', event_action: 'Email Click', event_label:'#'})`}
                  >
                    Click to send mail
                  </a>
                </span>
              </p>
            </div>
            <div className="phone">
              <i className="bi bi-phone" />
              <h4>Call:</h4>
              <span>
                <a
                  href="tel:254726900598"
                  onclick={`ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'})`}
                >
                  <p className="call-button">Click to Call 254-726-900XXX</p>
                </a>
              </span>
            </div>
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.818378363915!2d36.813880413746915!3d-1.2827958359817255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d23912632b%3A0xa3e642f1ab7822a8!2sView%20Park%20Towers%2C%20Utalii%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1648738478290!5m2!1sen!2ske"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-lg-7 mt-5 pt-4 mt-lg-0 d-flex justify-content-center">
          <form action="https://formspree.io/f/mgedlnkw" method="POST">
            <div className="row">
              <div className="form-group col-md-6 pt-4">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="form-group col-md-6 pt-4">
                <label htmlFor="name">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  required
                />
              </div>
            </div>
            <div className="form-group pt-4">
              <label htmlFor="name">Subject</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                required
              />
            </div>
            <div className="form-group pt-4">
              <label htmlFor="name">Message</label>
              <textarea
                className="form-control"
                name="message"
                rows={10}
                required
                defaultValue={""}
              />
            </div>
            <div className="my-3"></div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

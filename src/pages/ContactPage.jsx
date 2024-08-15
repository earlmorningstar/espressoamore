import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { PiChatsCircle } from "react-icons/pi";
import "./Styles.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-parent">
      <div className="navlink-container" id="twin-nav-btn">
        <NavLink className="navlinkBtn" to="/homePage">
          <button id="contact-btn-color" className="all-back-btn">Home</button>
        </NavLink>
      </div>


      <span className="contact-header-text">
        <h2>Contact our team</h2>
        <h4>
          Got any question about our products or scaling on our platform? We're
          here to help.
        </h4>
      </span>

      <div className="contact-info">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contactNamesHolder">
            <div className="each-input-holder">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="each-input-holder">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="each-input-holder">
            <label htmlFor="email">Email:</label>
            <input
              placeholder="you@company.com"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="each-input-holder">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>

          <div className="each-input-holder">
            <label htmlFor="message">Message:</label>
            <textarea
              placeholder="Leave a message..."
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Send Message</button>
        </form>

        <div className="customerCare-info-holder">
          <span className="contact-headers">
            <h3>Chat with us</h3>
            <h4>Speak to our friendly team.</h4>
          </span>

          <div className="contactUs-holder">
            <span><PiChatsCircle size={17}/> Start a live chat</span>
            <span>
              <FiSend size={17}/> Shoot us an email
            </span>
            <span>
              <RiTwitterXLine size={17}/> Message us on X
            </span>
          </div>

          <span className="contact-headers">
            <h3>Call us</h3>
            <h4>Call our team Mon-Fri from 8am to 5pm.</h4>
          </span>

          <div className="contactUs-holder">
            <span>
              <FiPhoneCall size={17}/> +123 456 789 0
            </span>
          </div>
          <span className="contact-headers">
            <h3>Visit us</h3>
            <h4>Chat to us in person at our Earth HQ.</h4>
          </span>

          <div className="contactUs-holder">
            <span>
              <CiLocationOn size={17}/> Address To Be Placed Here.
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ContactPage;

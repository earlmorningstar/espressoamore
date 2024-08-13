import { useState } from "react";
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
      <div>
        <h3>Chat with us</h3>
        <h4>Speak to our friendly team.</h4>
      </div>
      </div>
      
    </div>
  );
}

export default ContactPage;

import React from "react";

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or need assistance, feel free to reach out to
        us:
      </p>

      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        <h3>Our Contact Information</h3>
        <p>
          If you prefer, you can also contact us through the following channels:
        </p>
        <ul>
          <li>
            Email: <a href="mailto:info@example.com">info@example.com</a>
          </li>
          <li>
            Phone: <a href="tel:+1234567890">+1 234 567 890</a>
          </li>
          <li>Address: 123 Example Street, City, Country</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;

import React,{useEffect} from "react";
import contactphoto from "../assets/WhatsApp_Image_2023-12-07_at_17_upscaled.jpeg";
import "../styles/Contact.css";

function Contact() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contactphoto})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST" action="mailto:contact@thepuredevotion.in" enctype="text/plain" autocomplete="on" >
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text"/>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email"/>
          <label htmlFor="message">Message</label>
          <textarea
            rows="4"
            cols="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <input type="submit" value="Send Message"/>
        </form>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import "./Contact.css";

function Contact() {
  const email = "tomcourt94@icloud.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="page-content">
      <br />
      <h2>Contact</h2>
      <p>
        Tom Court
        <br />
        London
        <br />
        EC1V
        <br />
        <br />
        <button onClick={handleEmailClick} className="email-button">
         <strong>Email<br />Me</strong>
        </button>
        <br />
      </p>

      <a href="https://www.facebook.com/mrcourtiscool/">
        <img
          className="sm-profile"
          src="https://www.rpc.ox.ac.uk/wp-content/uploads/2021/10/Facebook-Logo.png"
          alt="Link to Facebook"
        />
      </a>
      <a href="https://www.instagram.com/tomtenniscourt/">
        <img
          className="sm-profile"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png"
          alt="Link to Instagram"
        />
      </a>
      <a href="https://www.linkedin.com/in/tom-court/">
        <img
          className="sm-profile"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
          alt="Link to LinkedIn"
        />
      </a>
      <a href="https://twitter.com/TomTennisCourt">
        <img
          className="sm-profile"
          src="https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png"
          alt="Link to Twitter"
        />
      </a>
    </div>
  );
}

export default Contact;

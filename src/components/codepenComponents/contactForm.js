// This is a reference form https://codepen.io/rickyeckhardt/pen/rNVOrBL
// If you are interest in this PromiseRejectionEvent, please visit codepen for more info

import React from "react";
import styled from "styled-components";

const ContactForm = () => {
  return (
    <Wrapper>
      <div class="contact-form-container">
        <div class="contact-us">
          <div class="contact-header">
            <h1>&#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;CONTACT</h1>
          </div>
          <div class="social-bar">
            <ul>
              <li>
                <i class="fab fa-facebook-f"></i>
              </li>
              <li>
                <i class="fab fa-twitter"></i>
              </li>
              <li>
                <i class="fab fa-instagram"></i>
              </li>
              <li>
                <i class="fab fa-dribbble"></i>
              </li>
            </ul>
          </div>
        </div>
        <div class="header">
          <h2>Contact Me!</h2>
        </div>

        <div class="contact-form">
          <form>
            <input placeholder="Name" type="text" />
            <input placeholder="Email" type="email" />
            <textarea placeholder="" rows="4"></textarea>
            <button className="submit-button" type="button">
              SEND
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Pretty Stuff */
  .contact-form-container {
    background: #f4f3f3;
    font-family: "Lato", sans-serif;
  }

  .contact-us {
    position: relative;
    width: 250px;
    background: #c3e0ec;
    overflow: hidden;
  }
  .contact-us:before {
    position: absolute;
    content: "";
    bottom: -50px;
    left: -100px;
    height: 250px;
    width: 400px;
    background: #f8b7d8;
    transform: rotate(25deg);
  }
  .contact-us:after {
    position: absolute;
    content: "";
    bottom: -80px;
    right: -100px;
    height: 270px;
    width: 400px;
    background: #9ed8eb;
    transform: rotate(-25deg);
  }

  .contact-header {
    color: white;
    position: absolute;
    transform: rotate(-90deg);
    top: 120px;
    left: -40px;
  }
  .contact-header h1 {
    font-size: 1.5rem;
  }

  .social-bar {
    position: absolute;
    bottom: 20px;
    left: 75px;
    z-index: 1;
    width: 100px;
  }
  .social-bar ul {
    list-style-type: none;
  }
  .social-bar ul li {
    display: inline-block;
    color: white;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    margin-right: -4px;
    font-size: 1.2rem;
  }

  .header {
    text-align: center;
    padding: 20px 0;
    color: #444;
  }
  .header h1 {
    font-weight: normal;
  }
  .header h2 {
    margin-top: 10px;
    font-weight: 300;
  }

  .address,
  .email,
  .phone {
    text-align: center;
    padding: 20px 0;
    color: #444;
  }
  .address h3,
  .email h3,
  .phone h3 {
    font-size: 1rem;
    font-weight: 300;
  }
  .address i,
  .email i,
  .phone i {
    color: #f8b7d8;
    font-size: 1.7rem;
    margin-bottom: 20px;
  }

  form {
    position: relative;
    width: 440px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    background: white;
  }
  form input,
  form textarea {
    background: white;
    display: block;
    margin: 20px auto;
    width: 100%;
    border: 0;
  }
  form input {
    height: 40px;
    line-height: 40px;
    outline: 0;
    border-bottom: 1px solid rgba(68, 68, 68, 0.3);
    font-size: 1rem;
    color: rgba(68, 68, 68, 0.8);
  }
  form textarea {
    border-bottom: 1px solid rgba(68, 68, 68, 0.3);
    resize: none;
    outline: none;
    font-size: 1rem;
    font-family: lato;
    color: rgba(68, 68, 68, 0.8);
  }
  form button {
    position: absolute;
    display: block;
    height: 40px;
    width: 250px;
    left: 95px;
    border: 0;
    border-radius: 20px;
    bottom: -20px;
    background: #9ed8eb;
    color: white;
    font-size: 1.1rem;
    font-weight: 300;
    outline: none;
  }

  .contact-form {
    padding-bottom: 40px;
  }

  /* Layout Stuff */
  body {
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-2042508-jpeg.jpg");
    height: 100vh;
    width: 100vw;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    justify-items: center;
    align-items: center;
  }

  .contact-form-container {
    width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr 2fr;
    grid-template-areas: "contact-us header header header" "contact-us address phone email" "contact-us contact-form contact-form contact-form";
  }

  .contact-us {
    grid-area: contact-us;
  }

  .header {
    grid-area: header;
  }

  .address {
    grid-area: address;
  }

  .phone {
    grid-area: phone;
  }

  .email {
    grid-area: email;
  }

  .contact-form {
    grid-area: contact-form;
  }

  .submit-button {
    &:hover {
      transition: all 0.3s linear;
      transform: scale(1.02);
    }
    cursor: pointer;
  }
`;
export default ContactForm;

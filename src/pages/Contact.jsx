import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      class="d-flex bg d-flex flex-column w-100 h-100 justify-content-center"
    >
      <div class="p-5 contact container">
        <h1 class="d-flex justify-content-center text-white">CONTACT US</h1>
        <p class="d-flex justify-content-center text-white pb-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div class="">
          <div class="row-lg-9 d-lg-flex gap-3">
            <div class="col">
              <input
                type="text"
                class="form-control col-md-6 mb-2 "
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div class="col">
              <input
                type="email"
                class="form-control col-md-6 mb-2"
                placeholder="Email or Mobile Number"
                aria-label="Email"
              />
            </div>
            <div class="col">
              <input
                type="text"
                class="form-control col-md-6 mb-2"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label"></label>
            <textarea
              type="text"
              class="form-control"
              placeholder="Messages"
              aria-label="message"
              id="message"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>

      <footer
        class="d-flex justify-content-center vertical-align-bottom"
        style={{ height: "50px" }}
      >
        <h5>MINI PROJECT OF NICK ANTHONY ESCOBIDO. ALL RIGHTS RESERVED.</h5>
      </footer>
    </section>
  );
};

export default Contact;

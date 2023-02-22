import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="d-flex bg d-flex flex-column w-100 h-100 justify-content-center"
    >
      <div className="p-5 contact container">
        <h1 className="d-flex justify-content-center text-white">CONTACT US</h1>
        <p className="d-flex justify-content-center text-white pb-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="">
          <div className="row-lg-9 d-lg-flex gap-3">
            <div className="col">
              <input
                type="text"
                className="form-control col-md-6 mb-2 "
                placeholder="First name"
                aria-label="First name"
              />
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control col-md-6 mb-2"
                placeholder="Email or Mobile Number"
                aria-label="Email"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control col-md-6 mb-2"
                placeholder="Last name"
                aria-label="Last name"
              />
            </div>
          </div>
          <div className="mb-3">
            <label type="message" className="form-label"></label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Messages"
              aria-label="message"
              id="message"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>

      <footer
        className="d-flex justify-content-center vertical-align-bottom"
        style={{ height: "50px" }}
      >
        <h5>MINI PROJECT OF NICK ANTHONY ESCOBIDO. ALL RIGHTS RESERVED.</h5>
      </footer>
    </section>
  );
};

export default Contact;

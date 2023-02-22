import React from "react";
import "./About.css";
import Nick from "../assets/images/nick.png";
import {
  TelephoneFill,
  GeoAltFill,
  EnvelopeAtFill,
} from "react-bootstrap-icons";
const About = () => {
  return (
    <section id="about" className="d-flex w-100 h-100">
      <div className="container mt-5">
        <div className="row justify-content-around d-flex">
          <div
            className="col-lg-6 flex-column pt-lg-0 order-2 order-lg-1 about-me  px-3 py-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="pt-4">
              NICK ANTHONY ESCOBIDO <h3>WD55P - ADAPTA</h3>
            </h1>
            <p>
              As a student of web development, I have learned a lot about the
              latest technologies and how to use them to create websites and web
              applications. I have also gained a lot of experience in working
              with different coding languages and frameworks. In addition, I
              have also acquired excellent problem-solving skills that have
              helped me troubleshoot various issues that I have faced while
              working on projects. Overall, I am confident in my abilities as a
              web developer and believe that I have the skills and knowledge
              necessary to build high-quality websites and applications.
            </p>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2  container_1 ps-5"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img src={Nick} className="img-fluid container_1" />
          </div>
        </div>
        <div className="card-group ">
          <p>
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#telephone"
              aria-expanded="false"
              aria-controls="telephone"
            >
              <TelephoneFill /> Phone Number
            </button>
          </p>
          <div className="collapse" id="telephone">
            <div className="card card-body">
              <p>+63 926 4562 971 </p>
              <p>+63 945 048 2369</p>
            </div>
          </div>
          <p>
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#location"
              aria-expanded="false"
              aria-controls="location"
            >
              <GeoAltFill /> Address
            </button>
          </p>
          <div className="collapse" id="location">
            <div className="card card-body">
              <p>
                Brgy. Carmen,
                <br />
                Cagayan de Oro,
                <br />
                Misamis Oriental 9000
              </p>
            </div>
          </div>
          <p>
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#email"
              aria-expanded="false"
              aria-controls="email"
            >
              <EnvelopeAtFill /> Email Address
            </button>
          </p>
          <div className="collapse" id="email">
            <div className="card card-body">
              <p>
                nickanthony.escobido@gmail.com <br />
                iplay.ninjasometimes@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

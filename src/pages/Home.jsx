import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section
      id="home"
      className="bg bg-dark cover-container d-flex w-100 h-100 p-3 mx-auto text-align-center mt-5"
    >
      <div className="px-3">
        <div
          className="flex-column justify-content-center pt-4 pt-lg-0  position-absolute top-50 start-50 translate-middle container_2 bg-black bg-opacity-75 px-3 my-3"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3>HELLO, I AM</h3>
          <h1>NICK ANTHONY</h1>
          <p>
            I AM STUDENT OF{" "}
            <a href="https://kodego.ph/" target="_blank">
              KODEGO
            </a>
            , BATCH WD35P-ADAPTA.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Home;

import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section
      id="experience"
      class="d-flex d-flex w-100 h-100 justify-content-center"
    >
      <div class="mt-lg-5">
        <div class="row justify-content-center d-flex text-align-center mt-2">
          <h1>Experience</h1>
          <p class="text-white exp">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="col-lg-8 col-md-6 d-flex justify-content-center container mt-4">
          <div class="container text-white me-5">
            <h3 style={{ fontSize: "23px" }}>GRAPHIC ARTIST</h3>
            <h5>2020 - 2022</h5>
          </div>
          <div>
            <p class="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quia
              saepe unde molestiae totam suscipit neque magnam facere molestias?
              Aperiam aliquam illum iure excepturi, repudiandae dicta dolor
              assumenda voluptates animi?
            </p>
          </div>
        </div>
        <div class="col-lg-8 col-md-6 d-flex justify-content-center container mt-4">
          <div class="me-5">
            <p class="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quia
              saepe unde molestiae totam suscipit neque magnam facere molestias?
              Aperiam aliquam illum iure excepturi, repudiandae dicta dolor
              assumenda voluptates animi?
            </p>
          </div>
          <div className="container text-white">
            <h3 style={{ fontSize: "23px" }}>GRAPHIC ARTIST</h3>
            <h5>2022 - Present</h5>
          </div>
        </div>
        <div class="col-lg-8 col-md-6 d-flex justify-content-center container mt-4">
          <div class="container text-white me-5">
            <h3 style={{ fontSize: "23px" }}>WEB DEVELOPER STUDENT</h3>
            <h5>2022 - Present</h5>
          </div>
          <div>
            <p class="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quia
              saepe unde molestiae totam suscipit neque magnam facere molestias?
              Aperiam aliquam illum iure excepturi, repudiandae dicta dolor
              assumenda voluptates animi?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

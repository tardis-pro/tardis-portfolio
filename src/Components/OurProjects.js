import React from "react";
import "./OurProjects.css";
import app from "./img/app.png";

const OurProjects = () => {
  return (
    <div>
      <section id="project">
        <div className="project container">
          <div className="project-top">
            <h1 className="project-title">
              {" "}
              Our <span>P</span>rojects{" "}
            </h1>
          </div>
          <div className="project-bottom">
            <div className="project-bottom">
              <div className="project-item">
                <div className="picon">
                  <img src={app} alt="app" />;
                </div>
                <div className="pdesc">
                  <h2><b style={{ fontSize: "20px" }}> NPhub</b> <br /></h2>
                  <p>
                    
                    Technologies used - Angular,Node, Mongo <br /> Project
                    Description: Find the perfect preceptor &amp; speed through
                    your paperwork process. <br /> • Developed UI screens from
                    mockups provided. <br />• Created and integrated APIs with
                    frontend.
                    <br /> • Interfaced with different 3rd party services such
                    as Stripe, PandaDocs.
                  </p>
                </div>
              </div>
              <div className="project-item">
                <div className="picon">
                  <img src={app} alt="app" />;
                </div>
                <div className="pdesc">
                  <h2><b style={{ fontSize: "20px" }}> Welgo</b> <br /></h2>
                  <p>
                    
                    Technologies - Python,Django, AngularJs,NodeJS <br />{" "}
                    Project Description: Welgo's pharmaceutical dispensing
                    system allow physicians to dispense prescriptions in-house,
                    leading to increased patient compliance and satisfaction.{" "}
                    <br />• Worked with Django to develop REST endpoints for
                    different services and data. <br />• Worked on integrating
                    wacom signature device with the frontend. <br />• Integrated
                    Twilio for sending out notifications. <br />• Used
                    Websockets for real time notifications. <br /> • Worked with
                    AngularJs to develop reusable components used across the
                    product.
                  </p>
                </div>
              </div>
              <div className="project-item">
                <div className="picon">
                  <img src={app} alt="app" />;
                </div>
                <div className="pdesc">
                  <h2><b style={{ fontSize: "20px" }}> Measure </b> <br /></h2>
                  <p>
                    
                    Technologies - NodeJS, React, Python, Postgis.
                    Cloudformation, AWS <br /> Project Description: Everything
                    you need to automate your operations, fly safely, and
                    analyze your data with the power of Pix4D. <br />• Worked on
                    different ETL workflows.
                    <br /> • Designed and developed various microservices for
                    handling big data. <br />• Developed a generic map interface
                    for the frontend with support for multiple visualization
                    options <br />• Set up automated provisioning and deployment
                    pipelines for each component in the stack. <br />• Worked
                    with different satellite/drone imagery datasets for
                    historical data and predictive analysis.
                  </p>
                </div>
              </div>
              <div className="project-item">
                <div className="picon">
                  <img src={app} alt="app" />;
                </div>
                <div className="pdesc">
                  <h2><b style={{ fontSize: "20px" }}> Geospoc </b> <br /></h2>
                  <p>
                    • Worked
                    on different stacks around cloud computing. <br />• Designed and
                    developed various enterprise grade solutions <br />• Contributed
                    to inhouse built SaaS and Paas platforms.<br /> • Started as an
                    individual contributor, currently leading a team of 7
                    developers.<br /> • Working experience in major phases of product
                    development like requirement gathering, design, development,
                    deployment, and unit testing. <br />• Setup CI-CD pipelines for
                    inhouse products and services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurProjects;

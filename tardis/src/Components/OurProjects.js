import React from "react";
import "./OurProjects.css";
import app from './img/app.png';

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
                  <h2>Project#1</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Deleniti porro fugiat ducimus incidunt vitae sequi, nemo
                    aspernatur quo non, provident debitis minima a, odio nisi
                    laborum! Numquam et omnis aperiam.iat ducimus incidunt vitae
                    sequi, nemo aspernatur quo non, provident debitis minima a,
                    odio nisi laborum! Numquam et omnis aperiam.
                  </p>
                </div>
              </div>
              <div className="project-item">
                <div className="picon">
                <img src={app} alt="app" />;
                </div>
                <div className="pdesc">
                  <h2>Project#2</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Deleniti porro fugiat ducimus incidunt vitae sequi, nemo
                    aspernatur quo non, provident debitis minima a, odio nisi
                    laborum! Numquam et omnis aperiam.iat ducimus incidunt vitae
                    sequi, nemo aspernatur quo non, provident debitis minima a,
                    odio nisi laborum! Numquam et omnis aperiam.
                  </p>
                </div>
              </div>
              <div className="project-item">
                <div className="picon">
                <img src={app} alt="app" />;
                </div>
                <div className="pdesc">
                  <h2>Project#3</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Deleniti porro fugiat ducimus incidunt vitae sequi, nemo
                    aspernatur quo non, provident debitis minima a, odio nisi
                    laborum! Numquam et omnis aperiam.iat ducimus incidunt vitae
                    sequi, nemo aspernatur quo non, provident debitis minima a,
                    odio nisi laborum! Numquam et omnis aperiam.
                  </p>
                </div>
              </div>
              <div className="project-item">
                <div className="picon">
                <img src={app} alt="app" />;
                </div>
                <div className="pdesc">
                  <h2>Project#4</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Deleniti porro fugiat ducimus incidunt vitae sequi, nemo
                    aspernatur quo non, provident debitis minima a, odio nisi
                    laborum! Numquam et omnis aperiam.iat ducimus incidunt vitae
                    sequi, nemo aspernatur quo non, provident debitis minima a,
                    odio nisi laborum! Numquam et omnis aperiam.
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

import React from "react";
import "./OurServices.css";
import web from './img/web.png';
import app from './img/app.png';
import graphic from './img/graphic.png';
import consultant from './img/consultant.png';


const OurServices = () => {
  return (
    <div>
      <section id="service">
        <div className="service container">
          <div className="service-top">
            <h1 className="section-title">
              Our Serv<span>i</span>ces
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              quibusdam commodi omnis, in quidem voluptate fuga explicabo nobis,
              sapiente ullam est voluptatem praesentium vero provident, ipsa
              cupiditate laudantium eum assumenda.
            </p>
          </div>
          <div className="service-bottom">
            <div className="service-bottom">
              <div className="service-item">
                <div className="icon">
                 <img src={web} alt="web" />
                </div>
                <div className="desc">
                  <h2>Web Development</h2>
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
              <div className="service-item">
                <div className="icon">
                <img src={app} alt="app" />
                </div>
                <div className="desc">
                  <h2>App Development</h2>
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
              <div className="service-item">
                <div className="icon">
                <img src={graphic} alt="graphic" />
                </div>
                <div className="desc">
                  <h2>Graphic Designing</h2>
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
              <div className="service-item">
                <div className="icon">
                <img src={consultant} alt="consultant" />
                </div>
                <div className="desc">
                  <h2>Web/App Consultant</h2>
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

export default OurServices;

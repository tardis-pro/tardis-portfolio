import React from "react";
import "./OurServices.css";
import web from "./img/web.png";
import app from "./img/app.png";
import graphic from "./img/graphic.png";
import consultant from "./img/consultant.png";

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

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
              Tardis offers tailor-made complete solutions for variety of
              fields, ranging from small to mid-size business, including
              Pharmaceutical, Educational Consultant, E-commerce, Agtech and
              Aerial Intelligence companies. Tardis resolves all the complex
              business problems and deliver a product that meets your
              expectations. <br />
              The most common services include App development, Web development,
              enterprise solutions, UI/UX design, and Cloud Migrating.
            </p>
          </div>
          <div className="service-bottom">
            <div className="service-bottom reveal">
              <div className="service-item">
                <div className="icon">
                  <img src={web} alt="web" />
                </div>
                <div className="desc">
                  <h2>Web Development</h2>
                  <p>
                    We offer a variety of website development services, from
                    creating web development solutions and responsive website
                    designs, to building custom e-commerce using the latest
                    technologies. We offer services as:
                    <ul>
                      <li>Revising, Editing or Addition of New Web Pages</li>
                      <li>Content Updation</li>
                      <li>Technological Upgradation</li>
                      <li>Data Back up</li>
                      <li>Payment gateway integration</li>
                      <li>Map Layers integration</li>
                    </ul>
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
                    Tardis offers custom mobile apps development services for
                    Android. Designing and Developing an Android applications
                    from scratch. We aim at creating mobile apps that are
                    intuitive, user-friendly, secure, and high-performing.
                    <ul>
                      <li>Customization</li>
                      <li>Troubleshooting</li>
                      <li>Enhancement of an applications</li>
                      <li>Testing and QA</li>
                      <li>App Deployment</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="service-item">
                <div className="icon">
                  <img src={graphic} alt="graphic" />
                </div>
                <div className="desc">
                  <h2>UX/UI &amp; Graphic Designing</h2>
                  <p>
                    We focus on delivering unique designs that are relevant to
                    your business and your customers by providing end to end
                    UX/UI services from research to wireframing, prototyping and
                    visual designing. Our graphic designs are distinct,
                    conversion-oriented and customized for the target audience.
                  </p>
                </div>
              </div>
              <div className="service-item">
                <div className="icon">
                  <img src={consultant} alt="consultant" />
                </div>
                <div className="desc">
                  <h2>Cloud Migration</h2>
                  <p>
                    We help you in digital transformation and making the move to
                    cloud through right strategy, by selecting the cloud
                    providers suited to your needs, and optimizing your IT
                    infrastructure. We work with you to determine which approach
                    works best for your organization – public, private or
                    hybrid. As a part of our cloud migration consulting
                    services, we take a customer-centric approach, pre-set
                    templates and data analytics applications to ensure
                    migrations take place in a smooth, effective and systematic
                    way without any negative business impact.
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

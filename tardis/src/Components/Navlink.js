import React from "react";
import "./Navlink.css";

const Navlink = () => {
  return (
    <div>
      <section id="header">
        <div className="header container">
          <div className="navbar">
            <div className="logoname">
              <img src="./img/logo.png" alt="" />
              <a href="#">
                {" "}
                <h1>
                  Tard<span>i</span>s Solutions
                </h1>{" "}
              </a>
            </div>
            <div className="navlist">
              <div className="bar"></div>
              <ul>
                <li>
                  <a href="#">Home </a>
                </li>
                <li>
                  <a href="#Our Services">Our Services </a>
                </li>
                <li>
                  <a href="#Projects"> Projects </a>
                </li>
                <li>
                  <a href="#Discover"> Discover</a>
                </li>
                <li>
                  <a href="#Contact">Contact </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navlink;

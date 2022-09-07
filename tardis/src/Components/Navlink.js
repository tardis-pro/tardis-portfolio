import React from "react";
import "./Navlink.css";
import logo from './img/logo.png';

const Navlink = () => {
  return (
    <div>
      <section id="header">
        <div className="header container">
          <div className="navbar">
            <div className="logoname">
              <img src={logo} alt="Logo" />;
              {/* <img src="tardis\src\Components\img\logo.png" alt="" /> */}
              <a href="#">
                
                <h1>
                  Tard<span>i</span>s Solutions
                </h1>
              </a>
            </div>
            <div className="navlist">
              <div className="bar"></div>
              <ul>
                <li>
                  <a href="#">Home </a>
                </li>
                <li>
                  <a href="#">Our Services </a>
                </li>
                <li>
                  <a href="#"> Projects </a>
                </li>
                {/* <li>
                  <a href="#"> Discover</a>
                </li> */}
                <li>
                  <a href="#">Contact </a>
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

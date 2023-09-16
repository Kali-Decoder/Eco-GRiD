import React, { Component, Fragment } from "react";
import { BsMicrosoft } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { MdSpaceDashboard, MdPool } from "react-icons/md";
import { TbMailShare } from "react-icons/tb";
import { SlDocs } from "react-icons/sl";
import { LuLogOut, LuActivity } from "react-icons/lu";
import { PiHandCoinsDuotone } from "react-icons/pi";
import LandingPage from "./components/LandingPage";
import LandingPage2 from "./components/LandingPage2";

// let navigation = document.querySelector(".navigation");
// let toggle = document.querySelector(".toggle");
// toggle.onclick = function () {
//   navigation.classList.toggle("active");
// };
const App = () => {
  return (
    <>
      <LandingPage />

      {/* <MergePDFs/> */}
      {/* <InvoiceGenerator/> */}

      {/* <div className="container-drawer">
        <div className="navigation">
          <ul>
            <li>
              <a href="#">
                <span className="icon">
                  <BsMicrosoft size={30} color="#512B81"/>
                </span>
                <span className="title">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <MdSpaceDashboard size={30} color="#512B81" />
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <MdPool size={30} color="#512B81"/>
                </span>
                <span className="title">Pools</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <PiHandCoinsDuotone size={40} color="#512B81" />
                </span>
                <span className="title">Rewards</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <LuActivity size={30} color="#512B81" />
                </span>
                <span className="title">My-Activities</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <SlDocs size={30} color="#512B81" />
                </span>
                <span className="title">Docs-Verification</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon">
                  <LuLogOut size={30} color="#512B81" />
                </span>
                <span className="title">Dis-Connect</span>
              </a>
            </li>
          </ul>
          <div className="toggle"></div>
        </div>
      </div> */}
    </>
  );
};

export default App;

import React from "react";
import {BsMicrosoft} from "react-icons/bs";
let navigation = document.querySelector(".navigation");
let toggle = document.querySelector(".toggle");
toggle.onclick = function () {
  navigation.classList.toggle("active");
};
const App = () => {
  return (
    <>
      <div class="container">
        <div class="navigation">
          <ul>
            <li>
              <a href="#">
                <span class="icon">
                  <BsMicrosoft size={30} color="#512B81"/>
                </span>
                <span class="title">Microsoft</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="desktop-outline"></ion-icon>
                </span>
                <span class="title">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="call-outline"></ion-icon>
                </span>
                <span class="title">Calls</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="chatbox-outline"></ion-icon>
                </span>
                <span class="title">Messages</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="mail-outline"></ion-icon>
                </span>
                <span class="title">Mails</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="file-tray-stacked-outline"></ion-icon>
                </span>
                <span class="title">Documents</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
                <span class="title">Settings</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="help-buoy-outline"></ion-icon>
                </span>
                <span class="title">Help</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span class="title">Sign out</span>
              </a>
            </li>
          </ul>
          <div class="toggle"></div>
        </div>
      </div>
    </>
  );
};

export default App;

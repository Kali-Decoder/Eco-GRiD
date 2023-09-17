import React, { Component, Fragment } from "react";
import LandingPage from "./components/LandingPage";
import UserDashboard from "./components/UserDashboard";
import {Routes,Route} from "react-router-dom";
import MarketPlace from "./components/MarketPlace";
// import Home from "./pages/Home";
const App = () => {
  
  return (
    <>
      
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/user-dashboard" exact element={<UserDashboard/>} />
        <Route path="/marketplace" exact element={<MarketPlace/>} />

      </Routes>
      {/* <Home/> */}
      
    </>
  );
};

export default App;

import React, { Component, Fragment } from "react";
import LandingPage from "./components/LandingPage";
import UserDashboard from "./components/UserDashboard";
import {Routes,Route} from "react-router-dom";
import MarketPlace from "./pages/MarketPlace";
import Explore from "./pages/Explore";
import SubstationMarketPlace from "./pages/SubstationMarketPlace";
const App = () => {
  
  return (
    <>
      
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/user-dashboard" exact element={<UserDashboard/>} />
        <Route path="/marketplace" exact element={<MarketPlace/>} />
        <Route path="/explore" exact element={<Explore/>} />
        <Route path="/:id/substations" exact element={<SubstationMarketPlace/>} />
      </Routes>

 
    
      
    </>
  );
};

export default App;

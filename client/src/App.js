import React, { Component, Fragment } from "react";
import LandingPage from "./components/LandingPage";
import UserDashboard from "./components/UserDashboard";
import {Routes,Route} from "react-router-dom";
import TransactionHistoryCard from "./components/TransactionHistoryCard";
const App = () => {
  
  return (
    <>
      
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/user-dashboard" exact element={<UserDashboard/>} />

      </Routes>
      
    </>
  );
};

export default App;

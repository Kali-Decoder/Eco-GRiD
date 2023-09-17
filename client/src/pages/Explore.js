import react from "react";
import CardList from "../components/CardList";
import { exploreList } from "../constants/MockupData";
import "../styles/Explore.css";

const Explore = () => {
  return (
    <>
      <div id="hero" className="flex justify-center items-center flex-col">
        <h1 id="header-text-first"> 🪫 </h1>
        <h1 id="header-text-second"> Explore Marketplace</h1>
      </div>
      <div id="explore" className="mt-0">
        <div id="list-container">
          <CardList list={exploreList} />
        </div>
      </div>
    </>
  );
};

export default Explore;

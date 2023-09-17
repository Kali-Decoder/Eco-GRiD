import react from "react";
import Hero from "../components/Hero";
import "../styles/Home.css";
import CardList from "../components/CardList";
import { hotDropsData } from "../constants/MockupData";
import {MdOutlineKeyboardBackspace} from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div id="home">
     <div className=" px-20 pt-10">
     <Link to=""><MdOutlineKeyboardBackspace onClick={()=>navigate(-1)} color="white" size={50} /></Link>
     </div>
      <Hero list={hotDropsData} />
      <p id="card-list-header-text"> Hot Drops </p>
      <div id="list-container">
        <CardList list={hotDropsData} />
      </div>
    </div>
  );
};

export default Home;

import react from "react";
import CardList from "../components/CardList";
import { exploreList } from "../constants/MockupData";
import "../styles/Explore.css";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Explore = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className=" px-20 pt-10">
        <Link to="">
          <MdOutlineKeyboardBackspace
            onClick={() => navigate(-1)}
            color="white"
            size={50}
          />
        </Link>
      </div>
      <div id="hero" className="flex justify-center items-center flex-col">
        <h1 id="header-text-first"> 🔋 </h1>
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

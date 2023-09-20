import React from "react";
import SubstationCard from "../components/base/SubstationCard";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import powerstations from "../data/powerstations.json";
import substations from "../data/substations.json";
const SubstationMarketPlace = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const powerstation = powerstations.powerstations.filter(
    (item) => item.id == id
  )[0];
  const filterSubstations = substations.substations.filter(
    (item) => item.powerstation_id == id
  );

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
        <h1 id="header-text-second">
          <span className="text-blue-300">{powerstation.name}</span> <br />
          Sub-Stations
        </h1>
      </div>

      <div class="grid mt-0 grid-cols-4 gap-4 container mx-auto">
        {filterSubstations.map((item, i) => {
          return <SubstationCard key={i} item={item} />;
        })}
      </div>
    </>
  );
};

export default SubstationMarketPlace;

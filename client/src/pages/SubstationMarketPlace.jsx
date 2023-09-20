import React, { useState } from "react";
import SubstationCard from "../components/base/SubstationCard";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import powerstations from "../data/powerstations.json";
import substations from "../data/substations.json";
const SubstationMarketPlace = () => {
  const [connectionTypeDown, setConnectionTypeDown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setConnectionTypeDown(!connectionTypeDown);
  };
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
      <div className="container mx-auto flex justify-between">
        <div className="relative w-56">
          <input
            className="peer hidden"
            type="checkbox"
            name="select-1"
            id="select-1"
            checked={connectionTypeDown}
            onChange={toggleDropdown}
          />
          <label
            htmlFor="select-1"
            className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-white ring-blue-400 peer-checked:ring"
          >
            Connection Type
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-gray-600 transition ${
              connectionTypeDown ? "peer-checked:rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <ul
            className={`max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-xl transition-all duration-300 ${
              connectionTypeDown
                ? "peer-checked:max-h-56 peer-checked:py-3"
                : ""
            }`}
          >
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
              Nikola Tesla
            </li>
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
              Lorem Ipsanum
            </li>
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
              Albert Einstein
            </li>
          </ul>
        </div>
        <div className="relative w-56">
          <input
            className="peer hidden"
            type="checkbox"
            name="select-1"
            id="select-1"
            checked={connectionTypeDown}
            onChange={toggleDropdown}
          />
          <label
            htmlFor="select-1"
            className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-white ring-blue-400 peer-checked:ring"
          >
            Near By Location
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-gray-600 transition ${
              connectionTypeDown ? "peer-checked:rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <ul
            className={`max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-xl transition-all duration-300 ${
              connectionTypeDown
                ? "peer-checked:max-h-56 peer-checked:py-3"
                : ""
            }`}
          >
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
              Nikola Tesla
            </li>
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
              Lorem Ipsanum
            </li>
            <li className="cursor-pointer px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-white">
              Albert Einstein
            </li>
          </ul>
        </div>
      </div>
      <div className="grid mt-0 grid-cols-4 gap-4 container mx-auto">
        {filterSubstations.map((item, i) => {
          return <SubstationCard setIsOpen={setIsOpen} key={i} item={item} />;
        })}
      </div>

      {isOpen ? (
        <div
          className="fixed z-10 overflow-y-auto top-0 w-full left-0 transparent "
          id="modal"
        >
          <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-900 opacity-75" />
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
              &#8203;
            </span>
            <div
              className="inline-block align-center backdrop-blur-md bg-white/30 border-2 border-blue-400 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="group relative w-full md:w-full lg:w-full mb-3">
                  <label
                    for="1"
                    class="block w-full pb-1 mb-3 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                  >
                    Number of Units
                  </label>
                  <input
                    id="1"
                    type="number"
                    class="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div class="group relative w-full md:w-full lg:w-full mb-3">
                  <label
                    for="1"
                    class="block w-full pb-1 text-sm mb-3 font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
                  >
                    Focus outline
                  </label>
                  <input
                    id="1"
                    type="text"
                    class="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              <div className="bg-black px-4 py-3 text-right">
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-times"></i> Cancel
                </button>
                <button
                  type="button"
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
                >
                  <i className="fas fa-plus"></i> Sell
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SubstationMarketPlace;

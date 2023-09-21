import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { FaIndustry, FaUserTie } from "react-icons/fa";

const RegisterUser = () => {
  return (
    <>
      <div
        className="form-wrapper 
         min-h-screen
         [ p-0 md:p-0 lg:p-0 ]
         [ flex justify-center flex-col items-center ] bg-black"
      >
        <div
          className="
               max-w-xl
               rounded-xl
                w-[50%]
               text-[#1A2421]
               bg-black
               [ p-8 md:p-10 lg:p-10 ]
               border"
        >
          <h1 className="mb-6 uppercase text-yellow-600 font-bold [ text-xl md:text-xl lg:text-xl ]">
            Register User
          </h1>
          <label
            for="name"
            className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
          >
            <input
              className="form-input 
              
              border border-gray-500
              focus:border-blue-500 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-white/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#fff] focus:text-white ]"
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
            />
          </label>
          <label
            for="number"
            className="form-label relative block mb-4 text-black/50 focus-within:text-[#333]"
          >
            <input
              className="form-input 
              border border-gray-500
              focus:border-blue-500 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-white/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#fff] focus:text-white ]"
              type="number"
              name="number"
              id="number"
              placeholder="Phone Number"
            />
          </label>
          <p className="mb-3 font-medium text-gray-900 dark:text-white">
            Choose Role
          </p>
          <ul className="grid w-full gap-6 md:grid-cols-2">
            <li>
              <input
                type="checkbox"
                id="react-option"
                value=""
                className="hidden peer"
                required=""
              />
              <label
                for="react-option"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-black dark:hover:bg-black"
              >
                <div className="flex justify-center items-center">
                  <FaUserTie color="white" size={30} />
                  <h4 className="mx-3 font-bold">USER</h4>
                </div>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="flowbite-option"
                value=""
                className="hidden peer"
              />
              <label
                for="flowbite-option"
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-black dark:hover:bg-black"
              >
                <div className="flex justify-center items-center">
                  <FaIndustry color="white" size={30} />
                  <h4 className="mx-3 font-bold">INDUSTRY</h4>
                </div>
              </label>
            </li>
          </ul>
          <div class="flex items-center justify-center w-full mt-4">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-34 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-black dark:hover:bg-bray-800 dark:bg-black hover:bg-black dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-black"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> Doc
                  Verification
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  PAN Card PDF
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
          <div className="mt-3">
            <ConnectButton />
          </div>
          <button
            className="form-input font-bold w-full mt-5 rounded-lg  text-white focus:outline-none
                   [ p-3 md:p-4 lg:p-4 ] 
                   [ transition-colors duration-500 ] 
                   [ bg-blue-600 hover:bg-blue-700 ] cursor-pointer"
          >
            Register
          </button>
          )
        </div>
      </div>
    </>
  );
};

export default RegisterUser;

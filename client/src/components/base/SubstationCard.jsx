import React from "react";

const SubstationCard = ({item}) => {
  return (
    <>
      <article class="relative flex flex-col overflow-hidden rounded-lg border ">
        <div class="aspect-square overflow-hidden">
          <img
            class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
            src="/images/neZnfwBHi0f-4TivjA6BS.png"
            alt=""
          />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
            {item?.walletAddress}
          </p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">Per Unit : R{item?.per_unit}</p>
          </div>
          <h3 class="mb-2 text-sm text-white font-bold">{item?.name}</h3>
        </div>
        <div class=" mx-auto mb-2 justify-between flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <button class="flex w-1/2 items-center font-semibold mx-1 justify-center bg-gray-100 text-xs uppercase transition hover:bg-emerald-600 hover:text-white">
            Buy
          </button>
          <button class="flex items-center mx-1 font-semibold justify-center w-1/2 bg-gray-200 px-5 transition hover:bg-emerald-500 hover:text-white">
            Sell
          </button>
        </div>
      </article>
    </>
  );
};

export default SubstationCard;

import React from "react";

const TransactionHistoryCard = () => {
  return (
    <>
      {/* <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full max-w-6xl"> */}

      <div class="flex items-center p-4 bg-white rounded">
        <div class="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
          <svg
            class="w-6 h-6 fill-current text-green-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="flex-grow flex flex-col ml-4">
          <span class="text-xl font-bold">$8,430</span>
          <div class="flex items-center justify-between">
            <span class="text-gray-500">Revenue last 30 days</span>
            <span class="text-green-500 text-sm font-semibold ml-2">
              +12.6%
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionHistoryCard;

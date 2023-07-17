import React from "react";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="flex justify-center items-center w-[130px] h-[130px] rounded-full bg-blue-gradient p-[2px] mb-[100%] animate-pulse">
      <div className="flex justify-center items-center flex-col bg-[#00040f] w-[100%] h-[100%] rounded-full">
        <div className="flex flex-col justify-center items-center">
          <img src={arrowUp} className="w-[25px] h-[25px] object-contain" />
          <span className="text-gradient font-poppins text-[18px] font-medium">
            Comenzar
          </span>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

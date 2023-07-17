import React from "react";
import { quotes } from "../assets";

const TestimonialCard = ({content,title,name,img}) => {
  return (
    <div className="feedback-card flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-transparent">
      <img className="w-[42px] h-[27px] object-contain" src={quotes} />
      <p className="font-poppins font-normal text-[18px] tracking-wider text-white my-10 text-start">
        {content}
      </p>
      <div className="flex flex-row gap-3 items-center">
        <img className="w-[60px] h-[60px]" src={img} />
        <div className="flex flex-col justify-start text-white">
          <span className="text-white ">{name}</span>
          <span className="text-[#d8d8e4]">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

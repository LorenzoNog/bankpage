import React from "react";
import { card } from "../assets";
import CustomButton from "./customButton";

const CarDeal = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-center sm:items-start flex-col gap-12">
        <h3 className="font-poppins text-white text-center sm:text-start text-[30px] mt-10 sm:mt-0 sm:text-[50px] font-bold">
            Encuentre una mejor tarjeta solo con unos sencillos pasos.
        </h3>
        <p className="text-[#d8d8e4] font-poppins font-light text-justify text-[15px] sm:text-[20px]  w-[80%] tracking-wider">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <CustomButton title='Comience ahora' styles='rounded-xl hover:scale-[1.05]'/>
      </div>
      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        <img src={card} className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CarDeal;

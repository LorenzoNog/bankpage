import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./getStarted";

const Hero = () => {
  return (
    <section id="home" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6">
        <div className="flex flex-row items-center bg-discount-gradient py-[6px] px-4 rounded-xl mb-5">
          <img src={discount} className="w-[40px] h-[40px]" alt="descuento" />
          <span className="text-white text-md font-light uppercase">
            Descuento del 20% para cuentas con un mes de vigencia
          </span>
        </div>
        <div className="flex flex-row justify-between items-center w-full mt-5">
          <h1 className="text-white font-poppins font-semibold ss:text-[62px] text-[52px] ss:leading-[100px] leading-[75px]">
            Una Nueva <span className="text-gradient ">Generación</span>{" "}
            <br className="sm:block hidden" />
            de Métodos de pago.
          </h1>
          <div className="ss:flex hidden md:mr-4 ">
            <GetStarted />
          </div>
        </div>
        <div>
          <p className="text-[#d8d8e4] w-[80%] font-medium text-lg mt-10 text-justify font-poppins">
            Nuestros expertos estan capacitados para brindarle la tarjeta de crédito que mejor se adapte a sus necesidades.
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 md:ml-10 ml-0 md:mt-0 mt-10 relative">
        <img src={robot} className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[0] w-[20%] h-[20%] top-0 pink_gradient"/>
        <div className="absolute z-[0] w-[80%] h-[80%] rounded-full bottom-40 white_gradient"/>
        <div className="absolute z-[0] w-[80%] h-[80%] bottom-20 right-20 blue_gradient"/>
      </div>
      <div className="ss:hidden flex justify-center items-center">
        <GetStarted/>
      </div>
    </section>
  );
};

export default Hero;

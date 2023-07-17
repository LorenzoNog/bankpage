import React from "react";
import CustomButton from "./customButton";

const OTA = () => {
  return (
    <section className="flex flex-col justify-center items-center sm:my-16 my-6 sm:flex-row bg-black-gradient rounded-[20px] box-shadow sm:px-16 px-6 sm:py-12 py-4">
      <div className="flex flex-col justify-center items-center sm:items-start">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[30px] text-center sm:text-start sm:text-[50px] text-white xs:leading-[76.8px] w-[100%] sm:w-[80%]">
            ¡Prueba nuestro servicio ahora!
        </h2>
        <p className="text-[#d8d8e4] font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] text-justify w-[60%] mt-10">
            Todo lo que necesitas para aceptar pagos con tarjeta y hacer crecer tu negocio en cualquier parte del planeta.
        </p>
      </div>
      <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
            <CustomButton title='Comenzar ahora' styles='rounded-xl hover:scale-[1.05]'/>
      </div>
    </section>
  );
};

export default OTA;

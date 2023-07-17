import React from "react";
import { socialMedia, footerLinks } from "../constants";
import { logo } from "../assets";

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center sm:py-16 py-6">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
        <div className="flex flex-col flex-[1] justify-start mr-5">
          <img src={logo} className="w-[266px] h-[72px] object-contain" />
          <p className="text-[#d8d8e4] font-poppins font-normal text-[18px] mt-8 max-w-[312px]">
            Una nueva forma de realizar los pagos de forma fácil, fiable y
            segura.
          </p>
        </div>
        <div className="flex flex-[1.5]  w-full flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((links) => {
            return (
              <div
                key={links.title}
                className="flex flex-col ss:my-4 min-w-[150px] "
              >
                <h4 className="text-white font-semibold text-[18px] font-poppins">
                  {links.title}
                </h4>
                <ul className="list-none mt-4">
                  {links.links.map((link) => {
                    return (
                      <li
                        key={link.name}
                        className="font-poppins text-[#d8d8e4] font-normal text-[16px] hover:text-blue-500 cursor-pointer mb-3"
                      >
                        {link.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px]">
        <small className="text-gray-500 font-normal font-poppins tect-center text-[16px]">
          Copyright © 2023 HooBank. Todos los derechos reservados.
        </small>
        <div className="flex flex-row mt-6 md:mt-0">
          {socialMedia.map((red) => {
            return (
              <img
                key={red.id}
                src={red.icon}
                className="mr-[10px] cursor-pointer"
                onClick={() => window.open(red.link)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;

/* 
<div className="flex  w-full flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => {
            <div
              key={footerlink.title}
              className="flex flex-col ss:my-4 min-w-[150px] "
            >
              <h4 className="text-white text-[18px] font-poppins font-medium">{footerlink.title}</h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => {
                  <li key={link.name} className="font-poppins text-[#d8d8e4] font-normal text-[16px] hover:text-blue-300 cursor-pointer">
                    {link.name}
                    </li>;
                })}
              </ul>
            </div>;
          })}
        </div>
      </div>
*/

import React from "react";
import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CarDeal,
  Testimonials,
  Clients,
  OTA,
  Footer,
} from "./components";

const App = () => {
  return (
    <>
      <div className="bg-[#00040f] w-full overflow-hidden">
        <div className="sm:px-16 px-6 flex justify-center items-center py-10">
          <div className="xl:max-w-[1280px] w-full">
            <Navbar />
          </div>
        </div>

        <div className=" bg-[#00040f] flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full">
            <Hero />
          </div>
        </div>
      </div>

      <div className="bg-[#00040f] sm:px-16 px-6 flex justify-center items-star">
        <div className="xl:max-w-[1280px] w-full">
          <Stats />
          <Business />
          <Billing />
          <CarDeal />
          <Testimonials />
          <Clients />
          <OTA />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;

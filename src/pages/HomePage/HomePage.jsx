import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/PortFolio-Section/PortFolio";
import Services from "../../components/comp-service/Services";
import AboutUs from "../../components/AboutUse/AboutUs";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <div className="flex flex-col gap-[60px]">
          <Hero />
          <AboutUs />
          <Services />
          <Portfolio />
        </div>
      </MainLayout>
    </>
  );
};

export default HomePage;

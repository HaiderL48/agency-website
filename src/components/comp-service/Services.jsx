import React from "react";
import { img } from "../../constants";

const Services = () => {
  return (
    <>
      <section className="mx-5 flex flex-col items-center justify-center gap-10 ">
        <h1 className="text-[48px] font-bold text-text-soft" >Services</h1>
        <div className="  overflow-auto  w-[90vw] h-[40vh] sm:w-[100vw] sm:h-[50vh]  flex gap-[20px] sm:gap-[60px] items-center sm:justify-center sm:items-center">
          <div className=" sm:flex flex  gap-[20px] sm:gap-[100px]">
            <div className="bg-white flex flex-col  justify-center items-center gap-5 image overflow-hidden min-w-[250px] h-[300px] sm:w-[300px] sm:h-[300px]  rounded-3xl">
              <div className="">
                <img
                  src={img.placeholder}
                  alt=""
                  className="w-[150px] rounded-3xl "
                />
              </div>
              <div className="text-center font-bold text-xl">
                3D Architecture
                <br /> & <br /> Motion Graphics
              </div>
            </div>
            <div className="bg-white flex flex-col justify-center items-center min-w-[300px] h-[300px] sm:w-[300px] sm:h-[300px]  rounded-3xl">
              <div className="">
                <img
                  src={img.placeholder}
                  alt=""
                  className="w-[150px] rounded-3xl "
                />
              </div>
              <div className="text-center font-bold text-xl">
                Graphics designing <br /> & <br /> Social-Media Marketing
              </div>
            </div>
            <div className="bg-white flex flex-col justify-center items-center min-w-[300px] h-[300px] sm:w-[300px] sm:h-[300px]  rounded-3xl">
              <div className="">
                <img
                  src={img.placeholder}
                  alt=""
                  className="w-[150px] rounded-3xl "
                />
              </div>
              <div className="text-center font-bold text-xl">
                UI/UX Design <br /> & <br /> Web Development
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

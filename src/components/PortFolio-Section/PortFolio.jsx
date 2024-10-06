import React, { useEffect, useState } from "react";
import { img } from "../../constants";
import projects from "../../utils/projects";
import { motion } from "framer-motion";
const PortFolio = () => {
  const projectData = projects.slice(0, 3);
  const boxStyle = ` w-[100vw] h-[67vh] my-2   flex flex-col sm:h-[300px] gap-[60px] justify-center items-center p-2 sm:flex-row sm:gap-[120px] sm:items-center sm:rounded-xl sm:p-2 sm:py-[55px] sm:h-[50vh]  sm:w-[full]`;
  return (
    <>
      <section
        id="works"
        className="m-5 flex flex-col items-center justify-center gap-10 "
      >
        <h1 className="text-[48px] font-bold text-text-soft">Works</h1>
        <div className="cursor-pointer flex flex-col gap-[60px]">
          {projectData.map((items, index) => {
            return (
              <>
                <div
                  key={index}
                  className={`${boxStyle} ${
                    index === 1 || index === 3 || index === 5
                      ? "sm:flex sm:flex-row-reverse hidden"
                      : ""
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      damping: 20,
                    }}
                    className="sm:ml-16 rounded-3xl overflow-hidden sm:w-[400px] sm:h-[300px] w-[300px]"
                  >
                    <motion.img
                      src={items.imageUrl}
                      alt=""
                      className="sm:w-[400px] sm:h-[300px] w-[100vw]"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 50,
                      damping: 20,
                    }}
                    className="sm:w-[714px] sm:h-[140px] w-[93vw] flex flex-col gap-2  sm:items-start justify-center items-center"
                  >
                    <h1 className="text-text-soft font-semibold sm:text-[32px] text-[32px]">
                      {items.title}
                    </h1>
                    <p className="text-text-soft sm:text-left text-[14px]  text-justify font-semibold sm:text-[14px] ">
                      {items.details}
                    </p>
                  </motion.div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PortFolio;

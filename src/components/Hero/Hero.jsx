import React from "react";
import { motion } from "framer-motion";
import { img } from "../../constants";

const textStyle = {};
const textVariants = {
  hidden: {
    translate: "-100vw",
    opacity: 0,
  },
  visible: {
    translate: "0vw",
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      damping: 15,
      stiffness: 60,
    },
  },
};
const textVariants1 = {
  hidden: {
    translate: "-100vw",
    opacity: 0,
  },
  visible: {
    translate: "0vw",
    opacity: 1,
  },
};

const imaVariants = {};
const Hero = () => {
  return (
    <>
      <section className=" mx-5  rounded-3xl bg-transparent h-[90vh] flex flex-col-reverse justify-center items-center align-middle gap-10 sm:flex-row sm:justify-center sm:gap-0 sm:items-center text-center">
        {/* Hero Content */}

        <div
          style={textStyle}
          className="leading-[28px] sm:leading-[40px] max-w-3xl  mx-auto px-4 flex flex-col sm:items-start items-center justify-center"
        >
          {/* Headline */}
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className=" sm:text-[60px] text-[40px] font-extrabold  text-white  "
          >
            Innovate.{" "}
          </motion.h1>
          <br />
          <motion.h1
            variants={textVariants1}
            initial="hidden"
            animate="visible"
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              delay: 0.5,
            }}
            className="sm:text-[60px] text-[40px] font-extrabold text-white "
          >
            Design.
          </motion.h1>
          <br />
          <motion.h1
            variants={textVariants1}
            initial="hidden"
            animate="visible"
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              delay: 1,
            }}
            className="sm:text-[60px] text-[40px] font-extrabold text-white  mb-6"
          >
            Transform.
          </motion.h1>
          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
              },
            }}
            className="flex flex-wrap sm:w-auto w-[250px]"
          >
            <p className="sm:text-xl text-lg text-white mb-4">
              We bring your ideas to life with creativity and technology.
            </p>
          </motion.div>
          {/* Call to Action */}
          <motion.a
            href="#works"
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 50,
                damping: 20,
              },
            }}
            whileHover={{ scale: [1, 1.1, 1] }} // Scale from 0 to 1 and back to 0 on hover
            transition={{
              duration: 2, // Adjust the duration of the hover effect
              ease: "easeInOut", // Smooth easing function for the scale transition
              repeat: Infinity, // Infinite scaling loop
              repeatType: "reverse", // Scale back down after expanding
            }}
            className="shadow-[0px 2px 60px rgba(0, 0, 0, 0.2)] duration-400 bg-white text-black  font-bold py-3 px-8 rounded-full transition"
          >
            See Our Work
          </motion.a>
        </div>
        <div className=" px-4 mx-auto ">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            src={img.hero1}
            alt=""
            className="rounded-3xl w-[660px]"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;

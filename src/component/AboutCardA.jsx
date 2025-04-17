import React from "react";
import { Link } from "react-router";

import { motion } from "motion/react";

const AboutCardB = ({
  number,
  title,
  text,
  img,
  livelink,
  siteIMg,
  viewState,
  setViewstate,
}) => {
  return (
    <>
      <div className=" relative  md:grid md:grid-cols-8 p-4 md:p-8 bg-white dark:bg-pink-400/20 md:bg-[#E9ECEE] dark:text-black ">
        <div className=" bg-white/70 dark:bg-white/70 rounded-lg  shadow-inner shadow-slate-400 flex flex-col  md:col-span-5 md:pe-16 p-4 lg:ps-8 gap-4 md:h-[450px]">
          <h1 className="text-center md:text-start text-8xl font-bold dark:text-white text-pink-400/50">
            {number}
          </h1>
          <h3 className="text-center md:text-start text-lg font-bold text-pink-600">
            {title}
          </h3>
          <p className="text-center text-sm md:text-base md:text-start md:pe-8 ">
            {text}
          </p>
          <div className="flex justify-center items-center flex-wrap gap-12 mt-2 pb-12  md:mt-0 lg:mt-12 md:pb-24">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={livelink}
                target="blank"
                className="px-4 lg:px-6 lg:py-2 rounded bg-pink-400/50 hover:cursor-pointer"
              >
                Go Live
              </Link>
            </motion.div>
            <motion.p
              onClick={() => setViewstate(true)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className=" px-4 lg:px-6 lg:py-2 rounded bg-pink-400/50 hover:cursor-pointer"
            >
              View
            </motion.p>
          </div>
        </div>
        <img
          src={img}
          alt=""
          className="min-h-60 border border-black/80 rounded-lg w-4/5 mx-auto md:w-full md:h-5/6 col-span-3 md:my-auto md:-ms-8 lg:-ms-16 z-1 -mt-8 mb-2  "
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`  w-12/12 md:w-11/12 h-screen p-4 absolute -top-20 right-1 bg-white/70 dark:bg-pink-400/30 z-20 ${
            viewState ? "block" : "hidden"
          }`}
        >
          <motion.img
            src={siteIMg}
            alt="site flash preview"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </>
  );
};

export default AboutCardB;

import React from "react";
import { Link } from "react-router";

import { motion } from "motion/react";
import Modal from "./Modal";

const AboutCardA = ({
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
      <div className=" relative  md:grid md:grid-cols-8 p-4 md:p-8 bg-white dark:bg-black/35  dark:text-black  md:scale-95 lg:scale-100 ">
        <div className=" bg-white dark:bg-white/70 rounded-lg  shadow-inner shadow-slate-400 flex flex-col  md:col-span-5 md:pe-16 p-4 lg:ps-8 gap-4 md:h-[450px]">
          <h1 className="text-center md:text-start text-8xl font-bold dark:text-white text-pink-400/50">
            {number}
          </h1>
          <h3 className="text-center md:text-start text-lg font-bold text-pink-600">
            {title}
          </h3>
          <p className="text-center text-sm md:text-base md:text-start md:pe-8 ">
            {text}
          </p>
          <div className="flex justify-center items-center flex-wrap gap-6 md:gap-8 mt-2 pb-12  md:mt-0 lg:mt-12 md:pb-24 md:me-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={livelink}
                target="blank"
                className="flex justify-center items-center rounded bg-pink-400/90 text-white dark:text-black  hover:text-pink-400/90 hover:bg-white hover:border hover:border-pink-400/90 hover:cursor-pointer h-8 w-20"
              >
                Go Live
              </Link>
            </motion.div>
            <motion.p
              onClick={() => setViewstate(true)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="flex justify-center items-center px-auto lg:px-auto lg:py-auto rounded bg-white hover:bg-pink-400/90 hover:text-white text-pink-400/90 dark:hover:text-black hover:cursor-pointer border border-pink-400 h-8 w-20"
            >
              View
            </motion.p>
          </div>
        </div>
        <img
          src={img}
          alt=""
          className="min-h-60 border border-black/40 rounded-lg w-4/5 mx-auto md:w-full md:h-5/6 col-span-3 md:my-auto md:-ms-8 lg:-ms-16 z-3 -mt-8 mb-2  "
        />
        {/*   <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`min-h-screen md:min-h-screen w-full backdrop-blur-2xl p-6 md:pt-20 absolute md:-top-20 top-0 pb-16 md:pb-6 right-1 bg-white/70 dark:bg-black/55 z-20 ${
            viewState ? "block" : "hidden"
          }`}
        >
          <motion.img
            src={siteIMg}
            alt="site flash preview"
            className="w-100 backdrop-blur-2xl h-auto md:w-220 lg:260 mx-auto my-auto"
          />
        </motion.div> */}
        <Modal isOpen={viewState ? true : false} onClose={ "setViewstate(false)"}>
          {" "}
          <motion.img
            src={siteIMg}
            alt="site flash preview"
             className=" backdrop-blur-2xl h-auto md:w-220 lg:300 mx-auto my-auto " 
          />
        </Modal>
      </div>
    </>
  );
};

export default AboutCardA;

import React, { useState } from "react";
import Footer from "../component/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import sss from "../img/devlightCV.pdf";
import over1 from "../img/overview1.jpg";
import over2 from "../img/overview2.jpg";
import over3 from "../img/overview3.jpg";
import { Link } from "react-router";
import { motion } from "motion/react";

const Resume = () => {
  const [overState, setOverstate] = useState(false);
  return (
    <>
      <div className="bg-gray-100 dark:bg-[url('../src/img/homebg.jpg')] bg[url('../src/img/lightbg.jpg')] dark:bg-black/95 bg-blend-color  dark:bg-blend-overlay pt-12 min-h-screen flex-1 flex flex-col  p-6 lg:px-8 dark:text-white ">
        <div
          onMouseOver={() => setOverstate(true)}
          
          className="max-w-7xl mx-auto py-8 lg:mt-8 mt-8  px-2 h-11/12 "
        >
          {/* //BLUR1// */}
          <div className="absolute blur-[70px] p-10 md:p-12 md:blur-[100px] md:top-14 lg:p-20 dark:bg-pink-400 top-24 lg:top-18 left-16 lg:blur-[130px]"></div>

          {/* //BLUR2// */}
          <div className="absolute blur-[105px] p-14 right-10 bottom-4 md:p-18 md:blur-[100px] md:bottom-14 lg:p-20 dark:bg-pink-400  lg:bottom-10 lg:blur-[120px] "></div>

          <Link
            to={sss}
            target="blank"
            className="mt-8 lg:mt-10 flex gap-3 items-center justify-center md:tracking-wider px-4  md:px-6 py-0.5 rounded-3xl bg-pink-500/55 font-semibold cursor-pointer"
          >
            <p className="p-1">Preview cv</p>
            <FontAwesomeIcon
              icon={faDownload}
              className="w-3 mt-0.5 shadow-2xl"
            />
          </Link>

          <p className="text-center text-sm text-pink-500 lg:hidden p-2 mt-4">
            hold to preview
          </p>
        </div>
        {/* COMING TO BUILD VISIBLE CV */}
        <motion.div
          initial={{ translateY: 300 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 2, delay:0.5 }}
          className={` p-4   gap-y-2 grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 bg-white  dark:bg-pink-400/15 md:px-6  lg:p-3  mb-12 ${
            overState ? "grid" : "hidden"
          }`}
        >
          <img src={over1} alt="my cv overview" className="h-98 mx-auto" />
          <img src={over2} alt="my cv overview" className="h-98 mx-auto" />
          <img src={over3} alt="my cv overview" className="h-98 mx-auto" />
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default Resume;

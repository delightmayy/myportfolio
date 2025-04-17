import React from "react";
import certificate from "../img/certificate.jpg";
import MCERT from "../img/MCERT.jpg";
import useWindowSize from "../api/useWindowSize";
import { motion, useAnimationControls } from "motion/react";

const CertificationSect = () => {
  const { width } = useWindowSize();
  const scalecontrol = useAnimationControls();
  return (
    <div
      onMouseEnter={() => {
        scalecontrol.start({ scale: 1, transition: { duration: 0.8 } });
      }}
      className="bg-gradient-to-b dark:from-black/80 dark:to-black from-black/20 to-white/75  bg-blend-color p-6 lg:p-8 "
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:min-h-screen   items-center dark:text-white mb-28 lg:mb-0">
        <h1 className=" lg:mt-20 mt-3 p-3 md:py-4 mb-3 lg:mb-8 text-3xl lg:text-5xl font-extrabold  tracking-wider dark:text-white border-b-2 border-pink-500 capitalize  ">
          Certification<span className="text-pink-500">.</span>
        </h1>
        <div className="text-center flex flex-col gap-4 mt-12  lg:text-lg lg:px-3">
          <motion.img
            src={width < 768 ? MCERT : certificate}
            alt="certificate from freecode camp"
            initial={{ scale: 0 }}
            animate={scalecontrol}
            className="p-1 w-12/12"
          />
        </div>
      </div>
    </div>
  );
};

export default CertificationSect;

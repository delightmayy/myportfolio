import React from "react";
import { motion } from "motion/react";
import useDarkMode from "../api/usedarkMode";

const Workexp = () => {
  const { mode } = useDarkMode();

  return (
    <div className=" bg-gray-100  dark:bg-black/70  p-6 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:min-h-screen   items-center dark:text-white shadow-pink-400 shadow  ">
        {/* ///// HEADING //// */}

        <h1 className=" mt-4 p-3 md:py-4 mb-6 text-3xl lg:text-5xl font-extrabold  tracking-wider dark:text-white border-b-2 border-pink-500  ">
          Experience<span className="text-pink-500">.</span>
        </h1>
            {/* ///// 1 //// */}
            <div className="   flex flex-col gap-4 ">
          <div className=" p-4 px-6 lg:p-8 border-pink-400 dark:border-pink-300/30 border-b text-justify">
            <div className="flex justify-between gap-4">
              <div className=" flex flex-col py-3 gap-3">
                <p className=" font-semibold  "> KPA-TECH </p>
                <motion.p
                  whileInView={{
                    color: mode
                      ? ["#F6339A", "#F6339A", "#ffffff"]
                      : ["#E6239F", "#E6239F", "#000000"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className=" font-semibold  text-pink-600 dark:text-pink-400"
                >
                  Web3 applications
                </motion.p>
              </div>
              <div className=" flex flex-col py-3 gap-3">
                <p className=" font-semibold ">2025 </p>
                <p className="font-semibold"> Nigeria/Remote </p>
              </div>
            </div>
            <p className="tracking tracking-wider mt-4 text-center md:text-start ">
              Responsive Design: Ensure the application looks and works great on
              various devices and screen sizes, Web3 applications with
              functionalities like wallet integration, smart contract
              development, Cryptocurrency payment gateways and decentralized
              data storage
            </p>

            <div className=" lg:mt-4 pt-4 flex flex-wrap justify-center md:justify-start gap-4 lg:gap-12 ">
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                React
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                Web3.JS
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                Tailwind CSS
              </motion.p>{" "}
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                dApps
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                Blockchain
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                Wallet Integration
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                Connect AI
              </motion.p>
            </div>
          </div>
        </div>
        {/* ///// 2 //// */}
        <div className="   flex flex-col gap-4 ">
          <div className=" p-4 px-6 lg:p-8 border-pink-400 dark:border-pink-300/30 border-b text-justify">
            <div className="flex justify-between gap-4">
              <div className=" flex flex-col py-3 gap-3">
                <p className=" font-semibold  "> Starlit Innovations Ltd. </p>
                <motion.p
                  whileInView={{
                    color: mode
                      ? ["#F6339A", "#F6339A", "#ffffff"]
                      : ["#E6239F", "#E6239F", "#000000"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className=" font-semibold  text-pink-600 dark:text-pink-400"
                >
                  Frontend Developer
                </motion.p>
              </div>
              <div className=" flex flex-col py-3 gap-3">
                <p className=" font-semibold "> Present </p>
                <p className="font-semibold">Harrogate, Britain</p>
              </div>
            </div>
            <p className="tracking tracking-wider mt-4 text-center md:text-start">
              UI/UX Implementation, Conversion of figma design into functional
              and responsive user interfaces using React.js.... Ensuring the
              application looks and works great on various devices and screen
              sizes.
            </p>

            <div className=" lg:mt-4 pt-4 flex flex-wrap justify-center md:justify-start gap-4 lg:gap-12 ">
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                React
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                tailwindcss
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                react router
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                figma
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                Framer-motion
              </motion.p>
            </div>
          </div>
        </div>
        {/* ///// 3 //// */}
        <div className="   flex flex-col gap-4 ">
          <div className=" p-4 px-6 lg:p-8 border-pink-400 dark:border-pink-300/30 border-b text-justify">
            <div className="flex justify-between gap-4">
              <div className=" flex flex-col py-3 gap-3">
                <p className=" font-semibold  ">Octopus Metrics</p>
                <motion.p
                  whileInView={{
                    color: mode
                      ? ["#F6339A", "#F6339A", "#ffffff"]
                      : ["#E6239F", "#E6239F", "#000000"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className=" font-semibold  text-pink-600 dark:text-pink-400"
                >
                  Frontend Developer
                </motion.p>
              </div>
              <div className=" flex flex-col py-3 gap-3">
                <p className=" font-semibold ">2023 - 2024 </p>
                <p className="font-semibold"> Remote </p>
              </div>
            </div>
            <p className="tracking tracking-wider mt-4 text-center md:text-start">
              API Integration: Connect the front-end to the back-end API using
              Axios for fetching and displaying dataState, State Management:
              Manage application state using React Context, Client-side Logic:
              Write JavaScript code to create interactive client-side
              functionality.
            </p>

            <div className=" lg:mt-4 pt-4 flex flex-wrap justify-center md:justify-start gap-4 lg:gap-12 ">
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                React
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                Axios
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                tailwindcss
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                React Context
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                Material Ui
              </motion.p>
            </div>
          </div>
        </div>
        {/* ///// 4 //// */}
        <div className="   flex flex-col gap-4 ">
          <div className=" p-4 px-6 lg:p-8 border-pink-400 dark:border-pink-300/30 border-b text-justify">
            <div className="flex justify-between gap-4">
              <div className=" flex flex-col py-3 gap-3">
                <p className=" font-semibold  "> Thefunnelsphere </p>
                <motion.p
                  whileInView={{
                    color: mode
                      ? ["#F6339A", "#F6339A", "#ffffff"]
                      : ["#E6239F", "#E6239F", "#000000"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className=" font-semibold  text-pink-600 dark:text-pink-400"
                >
                  Frontend Developer
                </motion.p>
              </div>
              <div className=" flex flex-col py-3 gap-3">
                <p className=" font-semibold ">2022 - 2023 </p>
                <p className="font-semibold"> Nigeria/Remote </p>
              </div>
            </div>
            <p className="tracking tracking-wider mt-4 text-center md:text-start ">
              Responsive Design: Ensure the application looks and works great on
              various devices and screen sizes, PHP Integration: Connect the
              front-end form page to PHP server. Performance Optimization:
              Ensure fast loading times, smooth animations, and efficient
              resource usage.
            </p>

            <div className=" lg:mt-4 pt-4 flex flex-wrap justify-center md:justify-start gap-4 lg:gap-12 ">
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                HTML
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                JavaScript
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                PHP
              </motion.p>{" "}
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                SEO
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                Bootstrap
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                Bubble.js
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-0.5 rounded-3xl bg-pink-400/75 font-semibold "
              >
                Preloader
              </motion.p>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Workexp;

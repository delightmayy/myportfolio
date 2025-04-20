import React from "react";
/* import webDevSvg from "../img/home-main.541f8179af8209ce03ccf2178fe62dbf.svg"; */
import { ReactTyped } from "react-typed";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className=" bg-gray-100  dark:bg-[url('../src/img/homebg.jpg')] bg[url('../src/img/lightbg.jpg')] dark:bg-black/25 bg-blend-color  dark:bg-blend-overlay pt-12 lg:min-h-screen flex-1 flex flex-col items-center p-6 lg:px-8 dark:text-white "
    >
      <div className=" max-w-7xl mx-auto py-4 lg:mt-8 mt-8  px-2  ">
        {/*///// typing text for large sreen//// */}

        {/* //BLUR1// */}
        <div className="absolute blur-[70px] p-10 md:p-12 md:blur-[100px] md:top-14 lg:p-20 dark:bg-pink-400 top-24 lg:top-18 lg:blur-[130px]"></div>
        {/* //BLUR2// */}
        <div className="absolute blur-[105px] p-14 right-10 bottom-4 md:p-18 md:blur-[100px] md:bottom-14 lg:p-20 dark:bg-pink-400  lg:bottom-10 lg:blur-[120px] "></div>

        <motion.div
          initial={{ translateX: 500 }}
          animate={{ translateX: 0 }}
          transition={{ duration: 5 }}
          className="hidden  lg:grid lg:grid-cols-4 grid-cols-2  justify-between lg:pb-8 lg:text-2xl  lg:items-center font-semibold lg:mt-8 "
        >
          <ReactTyped
            className="dark:text-pink-400 text-pink-600  text-nowrap font-stretch-extra-expanded "
            strings={["Personal Branding"]}
            typeSpeed={300}
            loop
            backSpeed={50}
            cursorChar=">"
            showCursor={false}
          />
          <ReactTyped
            className=" text-nowrap font-stretch-extra-expanded "
            strings={["Healthcare"]}
            typeSpeed={300}
            loop
            backSpeed={90}
            /* cursorChar={HeartIcon}  */
            showCursor={false}
          />{" "}
          <ReactTyped
            className="dark:text-pink-400 text-pink-600   text-nowrap font-stretch-extra-expanded "
            strings={["Corperate/ Business"]}
            typeSpeed={300}
            loop
            backSpeed={40}
            /* cursorChar=">" */
            showCursor={false}
          />
          <ReactTyped
            className=" text-nowrap font-stretch-extra-expanded "
            strings={["Non-profit Organization"]}
            typeSpeed={300}
            loop
            backSpeed={30}
            /* cursorChar=">" */
            showCursor={false}
          />
        </motion.div>
        {/*///// typing text for mobile sreen//// */}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 2, delay: 1 }}
          className="lg:hidden text-lg font-semibold mx-auto mt-6 "
        >
          <h1 className="text-center">
            {" "}
            <ReactTyped
              className=" text-nowrap font-stretch-extra-expanded "
              strings={[
                "Personal Branding",
                "Corperate/ Business",
                "Healthcare",
                "Non-profit Organization",
              ]}
              typeSpeed={300}
              loop
              backSpeed={90}
              /* cursorChar={HeartIcon}  */
              showCursor={false}
            />
            .
          </h1>
          <div className="mt-3 mb-8">
            <h1 className=" text-center lg:text-5xl text-3xl font-stretch-200% font-extrabold  ">
              Hi There <span className="text-pink-500">!</span>
            </h1>
            <h2 className=" text-xs lg:text-lg mt-3 text-center">
              I'm Sunday Olamilekan popularly known as{" "}
              <span className=" lg:text-2xl/relaxed text-base/relaxed dark:text-pink-400/95  text-pink-600 ">
                Devlight
              </span>
              .
            </h2>
          </div>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row justify-center lg:gap-4  mb-8 ">
          <motion.div
            initial={{ translateY: 500 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 1.8, delay: 0.4 }}
            className="flex-3 py-4  "
          >
            <div className="lg:mt-16 flex flex-col gap-2 items-baseline lg:text-base">
              <div className="hidden lg:block">
                <h1 className="lg:text-5xl text-3xl font-stretch-200% font-extrabold text-justify ">
                  Hi There <span className="text-pink-500">!</span>
                </h1>
                <h2 className=" text-sm lg:text-lg">
                  I'm Sunday Olamilekan popularly known as{" "}
                  <span className=" lg:text-2xl/relaxed text-base/relaxed dark:text-pink-400/95  text-pink-600 ">
                    Devlight
                  </span>
                  .
                </h2>
              </div>

              <h3 className="lg:mt-4 lg:leading-9 tracking-wide text-center leading-8 lg:text-justify">
                As a seasoned FrontEnd Developer with three years of experience,
                I transform online presence and craft digital solutions that
                captivate audiences. Specializing in healthcare, personal
                branding, and business websites for corporates and NGOs, I bring
                ideas to life through innovative and user-centric design. Join
                me on this exciting journey of turning concepts into stunning
                digital experiences that drive results. Let's collaborate to
                create something amazing together!
              </h3>
            </div>
          </motion.div>
          <motion.div
            initial={{ translateX: -700 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 3, delay: 1 }}
            className=" flex-2 lg:flex -mt-2  md:mt-0 flex-col  justify-center  py-2"
          >
            <DotLottieReact
              className=" scale-90 md:scale-110 lg:scale-130   sm:max-w-98   mx-auto  "
              src="https://lottie.host/d03b673f-5130-4bec-aedf-464c650ec54b/vLtKyG8b9E.lottie"
              loop
              autoplay
            />

            {/*  <img
              src={webDevSvg}
              alt="web developer svg"
             className=" scale-90 border   sm:max-w-98   mx-auto dark:border-white/65  border-black/95 rounded-full "
            />  */}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;

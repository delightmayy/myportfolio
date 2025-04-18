import React from "react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { motion } from "motion/react";

const AboutSect = () => {
  const { setaboutMode } = useContext(DataContext);

  return (
    <motion.div
      onMouseOver={() => setaboutMode(true)}
      onMouseOut={() => setaboutMode(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" bg-black/34  dark:bg-black/25 bg-blend-color  px-8 py-8 "
    >
      <div className=" max-w-7xl mx-auto flex flex-col lg:min-h-screen rounded-full dark:bg-red-400/20  bg-white/55 items-center dark:text-white  ">
        <h1
          id="aboutSection"
          className="py-3 md:py-4 px-4 lg:py-4 mt-10 md:mt-12  md:my-12 lg:my-8 mb-6 text-3xl lg:text-5xl font-extrabold  tracking-wider dark:text-white border-b-2  border-pink-500 "
        >
          About<span className="text-pink-500">.</span>
        </h1>

        <div className=" flex flex-col lg:flex-row md:px-24 lg:px-30 px-8  lg:pt-10 gap-8 justify-between mb-16 lg:mb-32  md:mb-20 lg:pb-0">
          <motion.div
            initial={{ translateY: 400 }}
            whileInView={{ translateY: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-3 flex flex-col gap-3 lg:gap-4 leading-8 text-center lg:text-start  "
          >
            <p className="">
              <span className=" text-3xl font font-extrabold mt-3 ">Hey</span>{" "}
              there! I'm <span className="text-pink-500">Devlight</span>, a
              frontend developer from Lagos, Nigeria, with a passion for
              crafting amazing digital experiences.
            </p>
            <p className="">
              With two years of experience, I've worked with diverse teams to
              build innovative products, including personal branding websites,
              corporate business solutions, healthcare platforms, NGO websites,
              and file management systems.
            </p>
            <p className="">
              Beyond coding, I'm driven by a desire to give back to the
              community, which is why I've volunteered with organizations like
              Starlit Innovations Ltd..
            </p>
            <p className="">
              I'm now seeking exciting new opportunities where I can combine my
              love for code with real-world problem-solving. If you've got a
              project or role that aligns with my skills and passions, let's
              connect and build something awesome together!"
            </p>
          </motion.div>
          <div className="flex-2  pb-0 ">
            <motion.img
              src=""
              alt=""
              initial={{ rotateY: 0 }}
              whileInView={{ rotateY: [0, 20, 0] }}
              transition={{ duration: 3, delay: 0.3, repeat: Infinity }}
              className=" border  h-72 lg:h-full rounded-b-full lg:rounded-bl-none lg:rounded-e-full "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSect;

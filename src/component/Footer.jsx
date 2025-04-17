import React from "react";
import { Link } from "react-router";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className=" bg-white/45 dark:text-white bg-blend-color dark:bg-black/95 z-1 fixed bottom-0 w-full lg:pe-16 pe-8 py-4 lg:py-5 text-sm ">
      <div className="flex gap-2 items-center justify-center">
        <Link
          to="mailto:delightedmay@gmail.com"
          className="flex gap-2 items-center justify-center   dark:hover:text-pink-500/50  hover:text-pink-600 tracking-wider"
        >
          <FontAwesomeIcon
            icon={faGoogle}
            flip
            className="w-6 cursor-pointer shadow-2xl rounded-full p-0.5"
          />
          <p> delightedmay@gmail.com</p>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

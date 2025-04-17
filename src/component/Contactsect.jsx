import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Contactsect = () => {
  return (
    <div className="dark:bg-black bg-gradient from-white/50 to-black/10 bg-blend-color p-6 lg:p-8 ">
      <div className="max-w-7xl mx-auto flex flex-col lg:min-h-screen   items-center dark:text-white mb-28 lg:mb-0">
        <h1 className=" lg:mt-20 mt-10 p-3 md:py-4 mb-3 lg:mb-8 text-3xl lg:text-5xl font-extrabold  tracking-wider dark:text-white border-b-2 border-pink-500 capitalize  ">
          contact<span className="text-pink-500">.</span>
        </h1>
        <div className="text-center flex flex-col gap-4 mt-6  lg:text-lg lg:px-3">
          <p className=" leading-9">
            Let's spark a connection! You can reach me here on find me on
            WhatsApp, or Upwork. Let's chat and see how we can collaborate.
            <Link
              to="www.linkedin.com/in/olamilekan-sunday-849001251
"
              className="text-base md:text-lg font-semibold text-pink-500 dark:hover:text-pink-400/50  hover:text-pink-600 tracking-wider"
            >
              {" "}
              Linkedin
            </Link>
            ,{" "}
            <Link
              to="https://wa.me/qr/RN3GSQ3LS6XRB1 "
              className="text-base md:text-lg font-semibold text-pink-400 dark:hover:text-pink-400/50  hover:text-pink-600 tracking-wider"
            >
              Whatsapp
            </Link>{" "}
            or{" "}
            <Link
              to="https://www.upwork.com/freelancers/~01739a2b466de3e7fb"
              className="text-base md:text-lg font-semibold text-pink-400 dark:hover:text-pink-400/50  hover:text-pink-600 tracking-wider"
            >
              Upwork
            </Link>
            . Let's chat and see how we can collaborate.
          </p>
          <div className="flex gap-2 items-center justify-center">
            <Link
              to="mailto:delightedmay@gmail.com"
              className="flex gap-2 items-center justify-center text-base  font-semibold text-pink-500 dark:hover:text-pink-500/50  hover:text-pink-600 tracking-wider"
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
      </div>
    </div>
  );
};

export default Contactsect;

import { Link, NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faUpwork,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import Togglebtn from "../assets/Togglebtn";

const Header = () => {
  return (
    <header className=" bg-white/55 dark:text-white bg-blend-color dark:bg-black/35 z-10 fixed w-full lg:pe-16 pe-8">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:py-4  "
      >
        <div className="flex flex-1">
          <NavLink to={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">Devlight</span>
            <div className="lg:text-lg font-semibold text-sm">
              <span className="lg:text-2xl/snug text-lg/snug"> D</span>evl
              <span className="text-pink-400 font-bold">i</span>ght
            </div>
          </NavLink>
        </div>

        <div className="flex flex-1 justify-end  items-center gap-8 ">
          <div className="flex   items-center gap-8 px-2 p-1 shadow shadow-pink-400 dark:shadow-pink-400/50 scale-75 lg:scale-100   ">
            <Togglebtn />
            <div className=" flex justify-between items-center lg:gap-1.5 dark:text-white text-pink-400 ">
              <Link
                to="https://www.linkedin.com/in/olamilekan-sunday-849001251"
                target="blank"
              >
                {" "}
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="w-6 cursor-pointer shadow-2xl rounded-full p-0.5 hover:text-black dark:hover:text-pink-500"
                />
              </Link>
              <Link to="https://wa.me/qr/RN3GSQ3LS6XRB1 " target="blank">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="w-6 cursor-pointer shadow-2xl rounded-full p-0.5 hover:text-black dark:hover:text-pink-500"
                />
              </Link>
              <Link
                to="https://www.upwork.com/freelancers/~01739a2b466de3e7fb"
                target="blank"
              >
                <FontAwesomeIcon
                  icon={faUpwork}
                  className="w-6 cursor-pointer shadow-2xl rounded-full p-0.5 hover:text-black dark:hover:text-pink-500"
                />
              </Link>
              <Link to={"https://github.com/delightmayy"} target="blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-6 cursor-pointer shadow-2xl rounded-full p-0.5 hover:text-black dark:hover:text-pink-500"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

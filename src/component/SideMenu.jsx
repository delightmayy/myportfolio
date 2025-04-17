import React, { useContext } from "react";
import {
  PopoverGroup,
  /* PopoverPanel,
  Popover,
  PopoverButton, */
} from "@headlessui/react";
/* import { ChevronDownIcon } from "@heroicons/react/20/solid"; */
import DataContext from "../context/DataContext";
import { Link, NavLink } from "react-router";

const SideMenu = () => {
  const { portfolio, callsToAction } = useContext(DataContext);
  const { aboutMode, setaboutMode } = useContext(DataContext);

  return (
    <div className=" bg-black/10 text-gray-900  dark:text-white  dark:bg-black bg-blend-color  fixed h-full w-12 lg:w-16  flex p-1 lg:px-4 flex-col  justify-between z-2">
      <PopoverGroup className=" rotate-90 flex  gap-x-5 py-24 ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            aboutMode
              ? "text-pink-400 border-t-transparent rounded border-t-3 px-6 lg:px-8 font-semibold text-sm/6 hover:bg-emerald-950/85 dark:hover:bg-pink-400/25 "
              : isActive
              ? "text-pink-400 border-t-pink-600 rounded border-t-3 px-6 lg:px-8 text-sm/6 hover:bg-emerald-950/85 dark:hover:bg-pink-400/25 font-semibold  "
              : " border-t-emerald-950/10 hover:border-t-[#5b716c] border-t-3 text-sm/6 font-semibold text-gray-900 dark:text-white  rounded  hover:bg-emerald-950/10 dark:hover:bg-pink-400/25 px-6 lg:px-8"
          }
        >
          Home
        </NavLink>
        <Link
          onClick={() => setaboutMode(true)}
          onMouseLeave={() => setaboutMode(false)}
          to={"/#aboutSection"}
          className={
            aboutMode
              ? "text-pink-400 border-t-pink-600  rounded border-t-3 px-6 lg:px-8 text-sm/6 hover:bg-emerald-950/75 dark:hover:bg-pink-400/25 font-semibold "
              : " border-t-emerald-950/10 hover:border-t-[#5b716c] border-t-3 text-sm/6 font-semibold text-gray-900 dark:text-white  rounded  hover:bg-emerald-950/10 dark:hover:bg-pink-400/25 px-6 lg:px-8"
          }
        >
          About
        </Link>
        <NavLink
          to={"/project"}
          className={({ isActive }) =>
            isActive
              ? " text-pink-400 border-t-pink-600  rounded border-t-3 px-6 lg:px-8 text-sm/6 hover:bg-emerald-950/75  dark:hover:bg-pink-400/25 font-semibold  "
              : "   border-t-emerald-950/10 hover:border-t-[#5b716c] border-t-3 text-sm/6 font-semibold text-gray-900 dark:text-white  rounded  hover:bg-emerald-950/10 dark:hover:bg-pink-400/25 px-6 lg:px-8"
          }
        >
          Portfolio
        </NavLink>

        {/* <Popover className="hidden  relative border-0">
          <PopoverButton>
            <NavLink
              to={"/project"}
              className={({ isActive }) =>
                isActive
                  ? " flex items-center  gap-x-3 text-pink-400 border-t-pink-600  rounded border-t-3 px-4 lg:px-6 text-sm/6 hover:bg-emerald-950/75 dark:hover:bg-pink-400/25 font-semibold "
                  : "flex items-center  gap-x-3  hover:border-t-[#5F7670] border-t-emerald-950/10 border-t-3  text-sm/6 font-semibold text-gray-900 dark:text-white  rounded  hover:bg-emerald-950/10 dark:hover:bg-pink-400/25 px-4 lg:px-6"
              }
            >
              <span> Portfolio</span>
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400 rotate-180"
              />
            </NavLink>
          </PopoverButton>

          <PopoverPanel
            transition
            className=" absolute -top-[500px] -left-60 z-10 -rotate-90 w-screen max-w-md overflow-hidden rounded-3xl bg-yellow-200 ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
          >
            <div className="p-4 ">
              {portfolio.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                >
                  <div className="flex size-7 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon
                      aria-hidden="true"
                      className="size-6 text-gray-600 group-hover:text-indigo-600"
                    />
                  </div>
                  <div className="flex-auto">
                    <NavLink
                      to={item.to}
                      className="block font-semibold text-gray-900 dark:text-white "
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </NavLink>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              {callsToAction.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 dark:text-white  hover:bg-gray-100"
                >
                  <item.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-gray-400"
                  />
                  {item.name}
                </NavLink>
              ))}
            </div>
          </PopoverPanel>
        </Popover>
 */}
        <NavLink
          to={"/resume"}
          className={({ isActive }) =>
            isActive
              ? "text-pink-400 border-t-pink-600 rounded border-t-3 px-6 lg:px-8 text-sm/6 hover:bg-emerald-950/75  dark:hover:bg-pink-400/25 font-semibold "
              : " border-t-emerald-950/10 hover:border-t-[#5b716c] border-t-3 text-sm/6 font-semibold text-gray-900 dark:text-white  rounded  hover:bg-emerald-950/10 dark:hover:bg-pink-400/25 px-6 lg:px-8"
          }
        >
          Resume
        </NavLink>
      </PopoverGroup>
    </div>
  );
};

export default SideMenu;

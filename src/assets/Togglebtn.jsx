import React from "react";
import useDarkMode from "../api/usedarkMode";

const Togglebtn = () => {
 const { handleDarkMode } = useDarkMode();
  return (
    <div className="w-10 bg-white dark:bg-black/65 dark:border border-white/75 rounded-3xl flex flex-col dark:items-end justify-start p-1">
      <div
        className="p-2 cursor-pointer bg-pink-400 rounded-full w-2"
        onClick={() => handleDarkMode()}
      ></div>
    </div>
  );
};

export default Togglebtn;

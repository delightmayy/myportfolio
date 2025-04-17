import React, { createContext, useState } from "react";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const name = "devlight";
  const [mode, setMode] = useState(
    JSON.parse(localStorage.getItem("dark-mode"))
  );
  const [aboutMode, setaboutMode] = useState(false);

  const portfolio = [
    {
      name: "Analytics",
      description: "Get a better understanding of your traffic",
      to: "/",
      icon: ChartPieIcon,
    },
    {
      name: "Engagement",
      description: "Speak directly to your customers",
      to: "/",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Security",
      description: "Your customers’ data will be safe and secure",
      to: "/",
      icon: FingerPrintIcon,
    },
    {
      name: "Integrations",
      description: "Connect with third-party tools",
      to: "/",
      icon: SquaresPlusIcon,
    },
    {
      name: "Automations",
      description: "Build strategic funnels that will convert",
      to: "/",
      icon: ArrowPathIcon,
    },
  ];
  const callsToAction = [
    { name: "Watch demo", to: "/", icon: PlayCircleIcon },
    { name: "Contact sales", to: "/", icon: PhoneIcon },
  ];
  return (
    <DataContext.Provider
      value={{
        name,
        callsToAction,
        portfolio,
        mode,
        setMode,
        aboutMode,
        setaboutMode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

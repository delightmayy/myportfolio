import React, { useContext, useEffect, useRef } from "react";
import Hero from "../component/Hero";
import AboutSect from "../component/AboutSect";
import Workexp from "../component/Workexp";
import Contactsect from "../component/Contactsect";
import CertificationSect from "../component/CertificationSect";
import { useLocation } from "react-router";
import DataContext from "../context/DataContext";

const Home = () => {
  const { hash } = useLocation();
  const sectionRef = useRef(null);
  const { aboutMode } = useContext(DataContext);

  useEffect(() => {
    if (aboutMode) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="bg-white/60 dark:bg-black/10 bg-blend-color dark:bg-[url('./img/homebg.jpg')]  bg-[url('./img/bg.jpg')]">
      <Hero />
      <div ref={sectionRef}>
        <AboutSect />
      </div>
      <Workexp />
      <CertificationSect />
      <Contactsect />
    </div>
  );
};

export default Home;

import React from "react";
import Header from "../component/Header";
import Hero from "../component/Hero";
import AboutSect from "../component/AboutSect";
import Workexp from "../component/Workexp";
import Contactsect from "../component/Contactsect";
import Footer from "../component/Footer";
import CertificationSect from "../component/CertificationSect";

const Home = () => {
  return (
    <div className="bg-white/60 dark:bg-black/10 bg-blend-color dark:bg-[url('./img/homebg.jpg')]  bg-[url('./img/bg.jpg')]">
      <Hero />
      <AboutSect />
      <Workexp />
      <CertificationSect/>
      <Contactsect />
     
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import AboutCardB from "../component/AboutCardB";
import AboutCardA from "../component/AboutCardA";
import KPA from "../img/kpaView.jpg";
import HEALTH from "../img/health.jpg";
import FUNNEL from "../img/funnelsphere.jpg";
import BRAND from "../img/brand.jpg";
import NGO from "../img/ngos.jpg";
import BUSS from "../img/business.jpg";
import MDEV from "../img/MDEV.jpg";
import MFUNL from "../img/MFUNL.jpg";
import MHELT from "../img/MHELT.jpg";
import MKPA from "../img/MKPA.jpg";
import MTRU from "../img/MTRU.jpg";
import MVOL from "../img/MVOL.jpg";
import useWindowSize from "../api/useWindowSize";
import { useLocation } from "react-router";

const Project = () => {
  const { width } = useWindowSize();
  const [viewStateA, setViewstateA] = useState(false);
  const [viewStateB, setViewstateB] = useState(false);
  const [viewStateC, setViewstateC] = useState(false);
  const [viewStateD, setViewstateD] = useState(false);
  const [viewStateE, setViewstateE] = useState(false);
  const [viewStateF, setViewstateF] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      onDoubleClick={() => {
        setViewstateA(false);
        setViewstateB(false);
        setViewstateC(false);
        setViewstateD(false);
        setViewstateE(false);
        setViewstateF(false);
      }}
      className={`bg-gray-100 dark:bg-[url('../src/img/homebg.jpg')] bg[url('../src/img/lightbg.jpg')] dark:bg-black/95   dark:bg-blend-overlay pt-12 min-h-screen flex-1 flex flex-col items-center dark:text-white ${
        viewStateA ||
        viewStateB ||
        viewStateC ||
        viewStateD ||
        viewStateE ||
        viewStateF
          ? "backdrop-blur-lgs"
          : "blur-none"
      }`}
    >
      {/* ////MINI//// */}
      <div className=" dark:bg-black bg-gray-100 bg-blend-color h-50 lg:h-72 w-full flex flex-col justify-center items-center px-6 md:px-8 font-semibold">
        <p className="md:mt-8 text-center text-2xl tracking-wider md:text-3xl lg:text-4xl lg:mt-16 lg:mb-8  stroke-1 stroke-pink-400  ">
          Your trusted partners in driving growth and innovation.
        </p>
      </div>
      {/* ////MAIN//// */}
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-10 lg:gap-16 mb-20 lg:mb-40  p-6 lg:px-8 ">
        {/* //BLUR1// */}
        <div className="absolute blur-[70px] p-10 md:p-12 md:blur-[100px] md:top-14 lg:p-20 dark:bg-pink-400 top-24 lg:top-18 left-16 lg:blur-[130px]"></div>
        {/* //BLUR2// */}
        <div className="absolute blur-[105px] p-14 right-10 bottom-4 md:p-18 md:blur-[100px] md:bottom-14 lg:p-20 dark:bg-pink-400  lg:bottom-10 lg:blur-[120px] "></div>

        <AboutCardA
          number={"01"}
          title={"Corperate/business "}
          text={
            "KPA-TECH is a technology-driven firm specializing in the design, development, and deployment of innovative mobile and web solutions. Team of experts leverages cutting-edge technologies to craft tailored digital experiences that meet the unique needs of businesses and individuals."
          }
          img={KPA}
          livelink={"https://kpatech.netlify.app/Portfolio"}
          siteIMg={ width < 768 ? MKPA :  KPA}
          viewState={viewStateA}
          setViewstate={setViewstateA}
        />
        <AboutCardB
          number={"02"}
          title={"Portfolio "}
          text={
            "We craft data-driven sales funnels that act as the powerhouse behind your online presence. Funnelsphere doesn't just create content; we develop a strategic roadmap that guides visitors through a seamless journey, ultimately leading to increased sales."
          }
          img={FUNNEL}
          livelink={"https://www.thefunnelsphere.com/"}
          siteIMg={width < 768 ? MFUNL : FUNNEL}
          viewState={viewStateB}
          setViewstate={setViewstateB}
        />
        <AboutCardA
          number={"03"}
          title={"Corperate/business "}
          text={
            "Modern house plans for A contemporary lifestyle choose from tried-and-true modern house designs that can be personalized or created from scratch just for you. Do it all online, at your convenience."
          }
          img={BUSS}
          livelink={"https://www.truoba.com/"}
          siteIMg={width < 768 ? MTRU : BUSS}
          viewState={viewStateC}
          setViewstate={setViewstateC}
        />
        <AboutCardB
          number={"04"}
          title={"Non-profit organization"}
          text={
            "volunteer Alberta is a diverse and inclusive member association that aims to nurture conditions for civic engagement and volunteerism in Alberta. We work with nonprofits across the province as a capacity-building and capability-nourishing organization. "
          }
          img={NGO}
          livelink={"https://volunteeralberta.ab.ca/"}
          siteIMg={width < 768 ? MVOL : NGO}
          viewState={viewStateD}
          setViewstate={setViewstateD}
        />
        <AboutCardA
          number={"05"}
          title={"Health care"}
          text={
            "For privacy reasons, the actual project cannot be showcased publicly. However, this mimic version demonstrates similar functionality and design, providing a glimpse into the overall concept and user experience."
          }
          img={HEALTH}
          livelink={"https://pro-dashboard-project.netlify.app/"}
          siteIMg={width < 768 ? MHELT : HEALTH}
          viewState={viewStateE}
          setViewstate={setViewstateE}
        />
        <AboutCardB
          number={"06"}
          title={"branding and influencer"}
          text={
            "Proof you're on the cutting edge: you're checking out our site while browsing our site. Every successful project begins with a thorough understanding of our client's goals, objectives, and requirements."
          }
          img={BRAND}
          livelink={"/"}
          siteIMg={width < 768 ? MDEV : BRAND}
          viewState={viewStateF}
          setViewstate={setViewstateF}
        />
        <Footer />
      </div>
    </div>
  );
};

export default Project;

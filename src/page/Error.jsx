import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router";

import Footer from "../component/Footer";

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 8000);
  }, []);

  return (
    <div className="bg-pink-400/75  dark:bg-[url('../src/img/homebg.jpg')] bg-[url('../src/img/lightbg.jpg')] dark:bg-black/95 bg-blend-color  dark:bg-blend-overlay min-h-screen flex-1 flex flex-col  p-6 lg:px-8 dark:text-white ">
      <main className="  grid min-h-svh place-items-center px-6 py-4 sm:py-32 lg:px-8">
        {" "}
        {/* //BLUR1// */}
        <div className="absolute blur-[70px] p-10 md:p-12 md:blur-[100px] md:top-14 lg:p-20 bg-pink-400 top-24 lg:top-18 left-16 lg:blur-[130px]"></div>
        {/* //BLUR2// */}
        <div className="absolute blur-[105px] p-14 right-10 bottom-4 md:p-18 md:blur-[100px] md:bottom-14 lg:p-20 bg-pink-400  lg:bottom-10 lg:blur-[120px] "></div>
        <div className="text-center">
          <p className="text-base font-semibold dark:text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight dark:text-white sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7dark:text-white">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-pink-600/55 px-3.5 py-2.5 text-sm font-semibold dark:text-white shadow-sm hover:bg-piink-500  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              Go back home
            </Link>
            <Link to="/" className="text-sm font-semibold text-pink-600">
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default ErrorPage;

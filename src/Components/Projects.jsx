import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import eComImg from "../assets/Ecom-ss.jpg";
import eComImg02 from "../assets/eCom-img02.jpg";
import eComImg03 from "../assets/eCom-img03.jpg";
import reduxLogo from "../assets/redux-icon.png";
import reactLogo from "../assets/React-img.png";
import jsLogo from "../assets/JS-img.png";
import cssLogo from "../assets/CSS-img.png";
import htmlLogo from "../assets/Html-img.png";
import crypto01 from "../assets/crypto-app-img-1.jpg";
import crypto02 from "../assets/crypto-app-img-2.jpg";
import crypto03 from "../assets/crypto-app-img-3.jpg";
import movie01 from "../assets/movie-app-img-1.jpg";
import movie02 from "../assets/movie-app-img-2.jpg";
import americanTC01 from "../assets/americanTC-img-1.jpg";
import americanTC02 from "../assets/americanTC-img-2.jpg";
import americanTC03 from "../assets/americanTC-img-3.jpg";
import americanTC04 from "../assets/americanTC-img-4.jpg";
import rapido01 from "../assets/rapido-img-1.jpg";
import rapido02 from "../assets/rapido-img-2.jpg";
import rapido03 from "../assets/rapido-img-3.jpg";
import rapido04 from "../assets/rapido-img-4.jpg";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: "400" });
  }, []);

  return (
    <>
      <div className="mt-24" id="project">
        <div data-aos="zoom-in-up" className="flex justify-center">
          <h1 className="text-5xl font-bold text-gray-700">Projects</h1>
        </div>
        {/* ---------Project-01--------------------- */}
        <div className=" mt-14 flex justify-center ">
          <div
            data-aos="fade-up-left"
            className="w-9/12 h-96 mb-12 flex justify-center rounded-2xl shadow-[0px_1px_10px_rgba(0,0,0,0.19)]"
          >
            <div className="w-2/5 flex items-center">
              {/* <img src={eComImg} alt="" /> */}

              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={eComImg} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={eComImg02} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={eComImg03} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next "
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="w-2/4 h-80 pl-10 flex items-center justify-center flex-col">
              <h1 className=" mt-7 text-2xl font-bold text-gray-700">eShop</h1>
              <h2 className="mt-6 pl-5 text-slate-600 text-center">
                A Complete E-commerce website where user can purchase, Add to
                cart, Track Order & Pay Via PayPal Payment Integration for the
                product of their choice.
              </h2>
              <span className="mt-7 flex justify-center space-x-4">
                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={htmlLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    HTML
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={cssLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold ">
                    CSS
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={jsLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    Javascript
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={reactLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    React
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={reduxLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    Redux
                  </h2>
                </div>
              </span>
              <span className=" mt-7 space-x-9">
                <a href="https://github.com/ZaidChops/My_store" target=" ">
                  <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                    Github
                  </button>
                </a>
                <a href="https://my-store-amber-ten.vercel.app/" target=" ">
                  <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                    Live
                  </button>
                </a>
                <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                  Watch
                </button>
              </span>
            </div>
          </div>
        </div>

        {/* ---------Project-02--------------------- */}

        <div className=" mt-2 flex justify-center ">
          <div
            data-aos="fade-up-right"
            className="w-9/12 h-96 mb-12 flex justify-center rounded-2xl shadow-[0px_1px_10px_rgba(0,0,0,0.19)]"
          >
            <div className="w-2/5 flex items-center">
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={crypto01} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={crypto02} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={crypto03} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next "
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="w-2/4 h-80 pl-10 flex items-center justify-center flex-col">
              <h1 className=" mt-5 text-2xl font-bold text-gray-700">
                CryptoPulse
              </h1>
              <h2 className="mt-6 pl-5 text-sm text-slate-600 ">
                This React application show the Crypto coin data and Graph, I
                used Tailwind , Axios, Chart.js, React-Router-Dom to develop
                application. Developed the Graph for individual coins. Fetch the
                data from Geco-coin Api. Implemented a search functionality to
                browse the Coins. Create the Route for individual coins.
              </h2>
              <span className="mt-7 flex justify-center space-x-4">
                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={htmlLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    HTML
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={cssLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold ">
                    CSS
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={jsLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    Javascript
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={reactLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    React
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={reduxLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    Redux
                  </h2>
                </div>
              </span>
              <span className=" mt-7 space-x-9">
                <a href="https://github.com/ZaidChops/CryptoPulse" target=" ">
                  <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                    Github
                  </button>
                </a>
                <a href="https://crypto-pulse-umber.vercel.app/" target=" ">
                  <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                    Live
                  </button>
                </a>
                <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                  Watch
                </button>
              </span>
            </div>
          </div>
        </div>

        {/* ---------Project-03--------------------- */}

        <div className=" mt-2 flex justify-center ">
          <div
            data-aos="fade-up-left"
            className="w-9/12 h-96 mb-12 flex justify-center rounded-2xl shadow-[0px_1px_10px_rgba(0,0,0,0.19)]"
          >
            <div className="w-2/5 flex items-center">
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={movie01} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={movie02} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next "
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="w-2/4 h-80 pl-10 flex items-center justify-center flex-col">
              <h1 className=" mt-5 text-2xl font-bold text-gray-700">
                AntiqueMovie
              </h1>
              <h2 className="mt-6 pl-5 text-sm text-slate-600 ">
                This is the beautiful movie database like IMDB. they shows movie
                cart which is clickable.Implemented a search functionality to
                browse the movies and tv shows. developed feature to see movie
                trailer. Created different Pages for popular, movie, tv shows,
                trending.
              </h2>
              <span className="mt-7 flex justify-center space-x-4">
                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={htmlLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    HTML
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={cssLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold ">
                    CSS
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={jsLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    Javascript
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={reactLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    React
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={reduxLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    Redux
                  </h2>
                </div>
              </span>
              <span className=" mt-7 space-x-9">
                <a href="https://github.com/ZaidChops/AntiqueMovie" target=" ">
                  <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                    Github
                  </button>
                </a>
                <a href="https://antique-movie.vercel.app/" target=" ">
                  <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                    Live
                  </button>
                </a>
                <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                  Watch
                </button>
              </span>
            </div>
          </div>
        </div>

        {/* ---------Project-04--------------------- */}

        <div className=" mt-2 flex justify-center ">
          <div
            data-aos="fade-up-right"
            className="w-9/12 h-96 mb-12 flex justify-center rounded-2xl shadow-[0px_1px_10px_rgba(0,0,0,0.19)]"
          >
            <div className="w-2/5 flex items-center">
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={americanTC01} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={americanTC02} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={americanTC03} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={americanTC04} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next "
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="w-2/4 h-80 pl-10 flex items-center justify-center flex-col">
              <h1 className=" mt-5 text-2xl font-bold text-gray-700">
                American-Tourister-Clone
              </h1>
              <h2 className="mt-6 pl-5 text-sm text-slate-600 ">
                This is the beautiful American Tourister website clone. It shows
                products and their details.Implemented a search functionality to
                browse the bags and other products. Created different Pages for
                different categories and trending.
              </h2>
              <span className="mt-7 flex justify-center space-x-4">
                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={htmlLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    HTML
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={cssLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold ">
                    CSS
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={jsLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    Javascript
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={reactLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    React
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={reduxLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    Redux
                  </h2>
                </div>
              </span>
              <span className=" mt-7 space-x-9">
                <a
                  href="https://github.com/ZaidChops/American-Tourister"
                  target=" "
                >
                  <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                    Github
                  </button>
                </a>
                <a href="https://american-tourister-xi.vercel.app/" target=" ">
                  <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                    Live
                  </button>
                </a>
                <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                  Watch
                </button>
              </span>
            </div>
          </div>
        </div>

                {/* ---------Project-05--------------------- */}

                <div className=" mt-2 flex justify-center ">
          <div
            data-aos="fade-up-left"
            className="w-9/12 h-96 mb-12 flex justify-center rounded-2xl shadow-[0px_1px_10px_rgba(0,0,0,0.19)]"
          >
            <div className="w-2/5 flex items-center">
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={rapido01} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={rapido02} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={rapido03} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={rapido04} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next "
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="w-2/4 h-80 pl-10 flex items-center justify-center flex-col">
              <h1 className=" mt-5 text-2xl font-bold text-gray-700">
                Rapido-Clone
              </h1>
              <h2 className="mt-6 pl-5 text-sm text-slate-600 ">
                This is the beautiful Rapido website clone. It shows
                all details about rides and sefty.A clone of a website that shows the same website as original.
              </h2>
              <span className="mt-7 flex justify-center space-x-4">
                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={htmlLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    HTML
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={cssLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold ">
                    CSS
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={jsLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    Javascript
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={reactLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    React
                  </h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col hover:scale-110 transition-all duration-500">
                  <img className="w-11" src={reduxLogo} />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">
                    Redux
                  </h2>
                </div>
              </span>
              <span className=" mt-7 space-x-9">
                <a
                  href="https://github.com/ZaidChops/Rapido-web"
                  target=" "
                >
                  <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                    Github
                  </button>
                </a>
                <a href="https://rapido-web-gamma.vercel.app/" target=" ">
                  <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                    Live
                  </button>
                </a>
                <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl hover:scale-110 transition-all duration-500">
                  Watch
                </button>
              </span>
            </div>
          </div>
        </div>
        {/* --------------------------------------------------- */}
      </div>
    </>
  );
};

export default Projects;

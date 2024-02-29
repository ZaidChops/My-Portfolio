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

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <>
      <div className="mt-24" id="project">
        <div data-aos="zoom-in-up" className="flex justify-center">
          <h1 className="text-5xl font-bold text-gray-700">Projects</h1>
        </div>

        <div className=" mt-14 flex justify-center ">
          <div
            data-aos="fade-up-left"
            className="w-9/12 h-96 mb-12 flex justify-center rounded-2xl shadow-[0px_1px_10px_rgba(0,0,0,0.19)]"
          >
            <div className="w-2/5 flex items-center">
              {/* <img src={eComImg} alt="" /> */}

              <div id="carouselExample" class="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={eComImg} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={eComImg02} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src={eComImg03} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next "
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
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
      </div>
    </>
  );
};

export default Projects;

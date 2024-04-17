import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import myImg from "../assets/my-img.png";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return (
    <>
      <div id="about">
        <div data-aos="zoom-in-up" className="flex justify-center mt-14">
          <h1 className="text-5xl font-bold text-gray-700">About Me</h1>
        </div>

        <div className="flex max-sm:flex-col-reverse items-center justify-center w-full mt-16">
          <div data-aos="zoom-in-up" className="w-2/5 mr-14 ml-28 ">
            <h1 className="text-3xl text-gray-700 sm:mt-12">
              The Best Way To Learn Something Is To Build Something.
            </h1>
            <h2 className="text-lg mt-7 text-gray-700">
              An enthusiastic Full Stack Web Developer skilled in MERN stack
              with 1300+ hours of experience in coding. Knowledge of HTML, CSS,
              Javascript, React, Redux, Node.js, Express.js and MongoDB. High
              adaptability to learn new technologies quickly and paying
              attention to details. Looking to start a career as a web developer
              with a reputed firm driven by technology.
            </h2>
            <button
              data-aos="zoom-in-up"
              className="w-36 h-12 text-lg my-6 font-semibold text-white bg-gray-700 rounded-xl hover:animate-pulse"
            >
              Downlod CV
            </button>
          </div>

          <div data-aos="zoom-in-up" className="aspect-square w-96 max-md:w-72 mr-5 flex  justify-center ">
            <img src={myImg} id="p1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

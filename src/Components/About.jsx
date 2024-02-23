import React from "react";

const About = () => {
  return (
    <>
      <div id="about">
        <div className="flex justify-center mt-14">
          <h1 className="text-5xl font-bold text-gray-700">About Me</h1>
        </div>

        <div className="flex mt-16">
          <div className="w-2/5 mr-14 ml-28 ">
            <h1 className="text-3xl text-gray-700">The Best Way To Learn Something Is To Build Something.</h1>
            <h2 className="text-lg mt-7 text-gray-700">
              An enthusiastic Full Stack Web Developer skilled in MERN stack
              with 1300+ hours of experience in coding. Knowledge of HTML, CSS,
              Javascript, React, Redux, Node.js, Express.js and MongoDB. High
              adaptability to learn new technologies quickly and paying
              attention to details. Looking to start a career as a web developer
              with a reputed firm driven by technology.
            </h2>
            <button className="w-36 h-12 text-lg my-6 font-semibold text-white bg-gray-700 rounded-xl">
            Downlod CV
          </button>
          </div>

          <div className="w-2/5 ">
            <img className="rounded-3xl "
              src="https://img.freepik.com/premium-vector/man-working-home_28923-46.jpg?w=740"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

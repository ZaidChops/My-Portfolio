import React from "react";

const Home = () => {
  return (
    <>
      <div className="header" id="home">
        <div className="overlay"></div>
        <div className=" max-sm:p-6 flex flex-row items-center justify-center z-10">
          <span>
            <h2 className="text-4xl max-sm:text-xl font-bold max-sm:mt-10 text-gray-700 ">
              Hello My Name Is
            </h2>
            <h1 className="text-6xl max-sm:text-3xl font-bold mt-8 max-sm:mt-4 text-gray-700">
              Mohammad Zaid
            </h1>
            <h2 className="text-4xl max-sm:text-lg font-small mt-6 max-sm:mt-4 text-gray-600">
              Full Stack Web Developer
            </h2>
            <a href="#project">
              <button className="w-36 max-sm:w-22 h-12 max-sm:h-10 text-md max-sm:text-sm max-sm:mt-10 my-6 hover:scale-110 transition-all duration-500  text-white bg-gray-700 rounded-xl">
                Visit my work
              </button>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;

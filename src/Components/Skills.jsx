import React from "react";

const Skills = () => {
  return (
    <>
      <div className=" mt-24 flex items-center flex-col" id="skills">
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-gray-700">Technical Skills</h1>
        </div>

        <div className=" flex justify-center mt-14 space-x-7">
          <button className="w-20 h-12  text-lg  bg-gray-700 text-white rounded-xl ">
            ALL
          </button>
          <button className="w-36 h-12 text-lg  bg-gray-700 text-white rounded-xl">
            FRONT-END
          </button>
          <button className="w-32 h-12 text-lg  bg-gray-700 text-white rounded-xl">
            BACK-END
          </button>
        </div>

        <div className="w-3/4 mt-10 pl-14 grid grid-cols-4  ">
          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse -z-10">
            <img className="w-32" src="src/assets/Html-img.png" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">HTML</h2>
          </div>

          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src="src/assets/CSS-img.png" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">CSS</h2>
          </div>

          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src="src/assets/JS-img.png" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">Java Script</h2>
          </div>

          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col hover:animate-pulse">
            <img className="w-32" src="src/assets/React-img.png" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">React</h2>
          </div>

          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col">
            <img className="w-32" src="src/assets/Redux-img.svg" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">Redux</h2>
          </div>

          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col">
            <img className="w-32" src="src/assets/Mongo-img.svg" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">Mongo Db</h2>
          </div>

          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col">
            <img className="w-32" src="src/assets/Node-img.png" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">Node js</h2>
          </div>

          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col">
            <img className="w-32" src="src/assets/Express-img.png" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">Express js</h2>
          </div>

          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col">
            <img className="w-32" src="src/assets/Dsa-img.png" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">DSA</h2>
          </div>

          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center justify-around flex-col">
            <img className="w-32" src="src/assets/tailwind-img.png" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">Tailwind CSS</h2>
          </div>

          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col">
            <img className="w-32" src="src/assets/Mui-img.png" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">Material UI</h2>
          </div>

          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center justify-around flex-col">
            <img className="w-32" src="src/assets/Bootstrap-img.png" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">Bootstrap</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

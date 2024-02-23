import React from "react";

const Tools = () => {
  return (
    <>
      <div className=" mt-24 flex items-center flex-col">
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-gray-700">Tools</h1>
        </div>

        <div className="w-3/4 mt-6 pl-14 grid grid-cols-3 ">
          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col">
            <img className="w-32" src="src/assets/vs-img.png" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">VS Code</h2>
          </div>

          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col">
            <img className="w-32" src="src/assets/Github-img.png" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">Github</h2>
          </div>

          <div className="w-48 mt-10 p-3 pt-7 rounded-lg shadow-md shadow-black flex items-center flex-col">
            <img className="w-32" src="src/assets/Git-img.png" alt="" />

            <h2 className="pt-4 text-2xl font-semibold text-gray-700">Git</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;

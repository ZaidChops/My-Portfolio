import React from "react";
import eComImg from "../assets/Ecom-ss.jpg"

const Projects = () => {
  return (
    <>
      <div className="mt-24" id="project">
        <div className="flex justify-center">
          <h1 className="text-5xl font-bold text-gray-700">Projects</h1>
        </div>

        <div className=" mt-14 flex justify-center ">
          <div className="w-9/12 h-96 mb-12 flex justify-center rounded-2xl shadow-md shadow-slate-800">
            <div className="w-2/5 flex items-center">
              <img src={eComImg} alt="" />
            </div>
            <div className="w-2/4 h-80 pl-10 flex items-center justify-center flex-col">
              <h1 className=" mt-7 text-2xl font-bold text-gray-700">eShop</h1>
              <h2 className="mt-6 pl-5 text-slate-600 text-center">
                A Complete E-commerce website where user can
                purchase, Add to cart, Track Order & Pay Via PayPal Payment
                Integration for the product of their choice.
              </h2>
              <span className="mt-7 flex justify-center space-x-4">
                <div className="w-20 mt- p- pt- flex items-center flex-col">
                  <img className="w-11" src="src/assets/Html-img.png" alt="" />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">HTML</h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col">
                  <img className="w-11" src="src/assets/CSS-img.png" alt="" />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">CSS</h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col">
                  <img className="w-11" src="src/assets/JS-img.png" alt="" />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">Javascript</h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col">
                  <img className="w-11" src="src/assets/React-img.png" alt="" />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">React</h2>
                </div>

                <div className="w-20 mt- p- pt- flex items-center flex-col">
                  <img className="w-11" src="src/assets/Redux-img.svg" alt="" />

                  <h2 className="pt-4 text-sm text-gray-800 font-semibold">Redux</h2>
                </div> 

              </span>
              <span className=" mt-7 space-x-9"> 
                <a href="https://github.com/ZaidChops/My_store" target=" ">
                <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl">Github</button>
                </a>
                <a href="https://my-store-amber-ten.vercel.app/" target=" ">
                <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl">Live</button>
                </a>
                <button className="w-28 h-11 text-lg font-semibold bg-gray-700 text-white rounded-xl">Watch</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
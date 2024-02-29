import React, { useEffect, useState } from "react";
import mylogo from "../assets/my-logo-4.png";
import mylogo1 from "../assets/my-logo-2.png";
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  const [color, setColor] = useState(false);

  const [s, setS] = useState(false);

  const [mobView, setMobView] = useState(false);

  const changeMobView = () => {
    let width = window.innerWidth;

    if (width < "555") {
      setMobView(true);
    } else {
      setMobView(false);
    }
  };

  const set = () => {
    setS((pre) => !pre);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    changeMobView();

    const handleResize = () => {
      handleScroll();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!mobView ? (
        <div
          className={`${
            color
              ? "w-full sm:w-full h-16 z-50 shadow-xl flex items-center justify-between  flex-grow-1 fixed  bg-white text-gray-700 transition-all"
              : "w-full sm:w-full h-20 z-50  flex items-center justify-between flex-grow-1 fixed  bg-transparent text-white transition-all"
          }`}
        >
          <div className="w-32 max-sm:w-20 ml-16 max-sm:ml-5">
            {!color ? <img src={mylogo} /> : <img src={mylogo1} />}
            {/* #594C8D */}
          </div>

          <ul className=" flex items-center  justify-end  ">
            {s && (
              <div data-aos="fade-down" data-aos-duration="1200" className=" ">
                <a href="#home" className="mr-6 text-xl font-semibold ">
                  Home
                </a>
              </div>
            )}
            {s && (
              <div data-aos="fade-down" data-aos-duration="1000" className="">
                <a href="#about" className="mr-6 text-xl font-semibold">
                  About
                </a>
              </div>
            )}

            {s && (
              <div data-aos="fade-down" data-aos-duration="800" className="">
                <a href="#skills" className="mr-6 text-xl font-semibold">
                  Skills
                </a>
              </div>
            )}
            {s && (
              <div data-aos="fade-down" data-aos-duration="600" className="">
                <a href="#project" className="mr-6 text-xl font-semibold">
                  Projects
                </a>
              </div>
            )}
            {s && (
              <div data-aos="fade-down" data-aos-duration="400" className="">
                <a href="#contact" className="mr-10 text-xl font-semibold">
                  Contact
                </a>
              </div>
            )}

            <button
              className="mr-16 max-sm:mr-5 w-12  hover:scale-110 transition-all duration-500 "
              onClick={set}
            >
              {!s ? (
                <SlMenu
                  className="w-10 max-sm:w-7 h-auto "
                  style={color ? { color: "#374151" } : { color: "white" }}
                />
              ) : (
                <RxCross2
                  className="w-10 max-sm:w-7 h-auto "
                  style={color ? { color: "#374151" } : { color: "white" }}
                />
              )}
            </button>
          </ul>
        </div>
      ) : (
        <div className=" static ">
          <div
            className={`${
              color
                ? "w-full sm:w-full h-16 z-50  flex items-center justify-between  flex-grow-1 fixed  bg-white text-gray-700 transition-all border-b-2 border-gray-400"
                : "w-full sm:w-full h-16 z-50  flex items-center justify-between flex-grow-1 fixed  bg-transparent text-white transition-all"
            }`}
          >
            <div className="w-32 max-sm:w-20 ml-16 max-sm:ml-5">
              {/* <img src={mylogo1} /> */}
              {!color ? <img src={mylogo} /> : <img src={mylogo1} />}
              {/* #594C8D */}
            </div>

            <button
              className="mr-16 max-sm:mr-5 w-12  hover:scale-110 transition-all duration-500 "
              onClick={set}
            >
              {!s ? (
                <SlMenu
                  className="w-10 max-sm:w-7 h-auto "
                  style={color ? { color: "#374151" } : { color: "white" }}
                />
              ) : (
                <RxCross2
                  className="w-10 max-sm:w-7 h-auto "
                  style={color ? { color: "#374151" } : { color: "white" }}
                />
              )}
            </button>
          </div>

          {s && (
            <div
              className={`${
                color
                  ? "w-full sm:w-full h-16 z-50 mt-16  flex items-center justify-center   fixed  bg-white text-gray-700 transition-all shadow-xl "
                  : "w-full sm:w-full h-20 z-50 mt-10 flex items-center justify-center fixed  bg-transparent text-white transition-all"
              }`}
            >
              <ul className=" flex  justify-end  ">
                {s && (
                  <div
                    data-aos="fade-down"
                    data-aos-duration="1200"
                    className=" "
                  >
                    <a href="#home" className="mr-3 z-30 text-md  ">
                      Home
                    </a>
                  </div>
                )}
                {s && (
                  <div
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    className=""
                  >
                    <a href="#about" className="mr-3 z-30 text-md  ">
                      About
                    </a>
                  </div>
                )}

                {s && (
                  <div
                    data-aos="fade-down"
                    data-aos-duration="800"
                    className=""
                  >
                    <a href="#skills" className="mr-3 z-30 text-md  ">
                      Skills
                    </a>
                  </div>
                )}
                {s && (
                  <div
                    data-aos="fade-down"
                    data-aos-duration="600"
                    className=""
                  >
                    <a href="#project" className="mr-3 z-30 text-md  ">
                      Projects
                    </a>
                  </div>
                )}
                {s && (
                  <div
                    data-aos="fade-down"
                    data-aos-duration="400"
                    className=""
                  >
                    <a href="#contact" className="mr-3 z-30 text-md  ">
                      Contact
                    </a>
                  </div>
                )}
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavBar;

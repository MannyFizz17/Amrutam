import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { LuPill } from "react-icons/lu";

const page = () => {
  return (
    <div>
      <div id="first" className=" z-10 inline-flex h-20 fixed">
        <div className=" inline-flex justify-start items-start text-4xl ml-28 mt-5 text-green-800 font-mono tracking-widest">
          AMRUTAM
        </div>
        <div className="inline-flex justify-center items-center">
          <span className=" inline-flex ml-20 text-center text-lg">
            <a href="" className="">
              HOME
            </a>{" "}
          </span>
          <span className=" inline-flex ml-8 text-center font-semibold text-green-800 text-lg">
            <a href="" className="">
              Find Doctors
            </a>
          </span>
          <span className=" inline-flex ml-8 text-center text-lg">
            <a href="" className="">
              About Us
            </a>
          </span>
        </div>
      </div>
      <div
        id="first"
        className="fixed w-full z-0 h-20 justify-center items-end text-right"
      >
        <span className="">
          <button
            type="reset"
            className=" hover:bg-green-800 hover:border-2 text-green-800 hover:text-white border-2 mt-2 mr-4 border-green-800 rounded-lg p-2 text-2xl pl-4 pr-4"
          >
            Login
          </button>
          <button
            type="reset"
            className=" bg-green-800 border-2 border-green-800 text-white hover:border-2 mt-2 mr-10 p-2 
            pl-4 hover:border-green-800 hover:bg-transparent hover:text-green-800 rounded-lg pr-4 text-2xl"
          >
            Sign-Up
          </button>
        </span>
      </div>
      <br />
      <div className="flex justify-center bg-green-50 w-full h-40 mt-14">
        <div className=" z-0">
          {/* <img
            src="/Users/manas_sinha/Desktop/amrutam/1.png"
            alt="img1"
            className=""
          /> */}
        </div>
        <div className="z-10  justify-start items-start mt-4">
          <div className="text-3xl font-sans tracking-wider font-semibold pt-4">
            Find Expert Doctors For An In-Clinic Session Here
          </div>
          <div className="pt-7 justify-center items-center">
            <form className="" action="" method="">
              <label for="location">
                <div className="inline-flex bg-white border shadow-lg rounded-lg">
                  <a
                    href="https://maps.google.com"
                    target="blank"
                    className="inline-flex justify-center z-0 pt-1 h-12 items-center"
                  >
                    <span className="inline-flex text-2xl  text-green-800 justify-center items-center">
                      <IoLocationSharp />
                    </span>
                  </a>
                  <input
                    type="text"
                    id="id"
                    name="name"
                    placeholder="Select Location"
                    {...FaChevronDown}
                    className="w-[200px] h-12 px-3 outline-none rounded-md z-0 shadow-md	bg-transparent"
                  />
                  <a
                    href=""
                    target=""
                    className="inline-flex justify-center z-0 pt-1 h-12 items-center"
                  >
                    <span className="inline-flex text-2xl  text-green-800 justify-center items-center">
                      <FaAngleDown />
                    </span>
                  </a>
                </div>
                <div className="inline-flex ml-3 my-3 bg-white border shadow-lg rounded-lg">
                  <input
                    type="text"
                    id="id"
                    name="name"
                    placeholder="eg. Doctor, specialisation, clinic name"
                    className="w-[500px] h-12 px-3 outline-none rounded-md z-0 shadow-md	bg-transparent"
                  />
                  <a
                    href=""
                    target=""
                    className="inline-flex justify-center z-0 pt-1 h-12 items-center"
                  >
                    <span className="inline-flex text-2xl  text-green-800 justify-center items-center">
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="border h-16">div me dropdown</div>
      <div className=" inline-flex w-full justify-center items-center">
        <div
          id="comp"
          className="inline-block m-4 w-96 h-[500px] border-r-2 border-b-4 rounded-3xl text-black text-center transition ease-in-out delay-150 hover:scale-110 duration-300 shadow-xl"
        >
          <img src="app/im1.png" alt="im1" />
          <h1 class="text-center mt-6 text-2xl">
            Dr. Prerna Narang
            <br />
          </h1>
          <div className="text-center mt-4 text-sm justify-center items-center inline-flex">
            <LuPill className="text-green-800 mr-3 text-2xl" />
            Male-Female Infertility
          </div>
        </div>
        <div
          id="comp"
          className="inline-block m-6 mt-10 w-96 h-[500px] border-r-2 border-b-4 rounded-3xl text-black text-center transition ease-in-out delay-150 hover:scale-110 duration-300 shadow-xl"
        >
          <img src="app/im1.png" alt="im1" />
          <h1 class="text-center mt-6 text-2xl">
            Dr. Prerna Narang
            <br />
          </h1>
          <br />
          <h3>sdjnfclwnv</h3>
        </div>
        <div
          id="comp"
          className="inline-block m-6 mt-10 w-96 h-[500px] border-r-2 border-b-4 rounded-3xl text-black text-center transition ease-in-out delay-150 hover:scale-110 duration-300 shadow-xl"
        >
          <img src="app/im1.png" alt="im1" />
          <h1 class="text-center mt-6 text-2xl">
            Dr. Prerna Narang
            <br />
          </h1>
          <br />
          <h3>sdjnfclwnv</h3>
        </div>
      </div>
    </div>
  );
};

export default page;

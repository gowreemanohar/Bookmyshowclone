/* eslint-disable jsx-a11y/heading-has-content */
import React,{useContext} from "react";
import { BiSearch, BiChevronDown, BiMenu, BiShareAlt,BiChevronLeft } from "react-icons/bi";

//Context

import {MovieContext} from '../../context/Movie.context'

function NavSm() {

  const {movie} = useContext(MovieContext);
  return (
    <>
      <div className="text-gray-700 flex items-center justify-between  ">
        <div>
        <BiChevronLeft className=" w-full h-full " />
        </div>
        <div>
          <h3 className=" text-xl font-bold  ">{movie.original_title}</h3>
        </div>
        <div>
          <BiShareAlt className=" w-full h-full " />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="flex items-center w-full gap-3">
        <div className="w-100 h-10">
          <img
            src="//in.bmscdn.com/webin/common/icons/logo.svg"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <BiSearch />
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none "
            placeholder="Search for Movies, Events.."
          />
        </div>
      </div>
    </>
  );
}
function NavLg() {
  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-100 h-10">
            <img
              src="//in.bmscdn.com/webin/common/icons/logo.svg"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none "
              placeholder="Search for Movies, Events.."
            />
          </div>
        </div>
        <div className=" flex items-center gap-3 ">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Chennai NCR <BiChevronDown />
          </span>
          <button className="bg-red-500 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

const MovieNavebar = () => {
  return (
    <>
      <nav className="bg-white border-b-2 lg:bg-Darkknight-700 lg:border-b-0 md:bg-Darkknight-700 p-4  ">
        <div className="md:hidden">
          {/* mobile screen */}
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/* medium/tab based */}
          <NavMd />
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large Screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavebar;

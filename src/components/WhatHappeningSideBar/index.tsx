import { BsSearch as SearchIcon } from "react-icons/bs";
import { BsThreeDots as DotsIcon } from "react-icons/bs";

import ProfileImage from "../../assets/profile.jpeg";

export const WhatHappeningSideBar = () => {
  return (
    <div className="hidden lg:flex h-full w-[30%] items-center flex-col p-2">
      <div className="w-full h-[50px] rounded-full bg-gray-600 flex items-center  p-2">
        <div>
          <SearchIcon className="text-[18px] font-light" />
        </div>
        <input
          type="text"
          placeholder="Buscar no Twitter"
          className="w-[90%] bg-gray-600 placeholder:font-light focus:outline-none text-[18px] ml-2 text-white"
        />
      </div>

      <section className="w-full mt-2 bg-gray-600 rounded-md flex flex-col ">
        <h2 className="font-bold text-white p-2">O que está acontecendo</h2>

        <div className="mt-4 hover:bg-gray-400 transition-all p-2">
          <div className="w-full cursor-pointer flex items-center ">
            <div className="w-full flex-1 flex flex-col">
              <div className="flex items-center">
                <span className="font-thin text-[16px]">Eleições 20...</span>
                <span className="font-thin text-[16px]">Noite anterior</span>
              </div>
              <p className="text-sm text-white font-bold">Futebol</p>
            </div>
            <div className="h-[80px] w-[80px] rounded-md overflow-hidden">
              <img
                src={ProfileImage}
                alt="news image"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="w-full text-[16px] mt-2 font-thin">
            <span>
              Assuntos do momento:{" "}
              <strong className="text-blue-500 font-thin">Tarciso</strong>
            </span>
          </div>
        </div>

        <div className="mt-4 hover:bg-gray-400 transition-all p-2 overflow-hidden">
          <div className="w-full cursor-pointer flex items-center ">
            <div className="w-full flex-1 flex flex-col">
              <div className="flex items-center">
                <span className="font-thin text-[16px]">Eleições 20...</span>
                <span className="font-thin text-[16px]">Noite anterior</span>
              </div>
              <p className="text-sm text-white font-bold">Futebol</p>
            </div>
            <div>
              <DotsIcon className="text-gray-600 text-[24px] cursor-pointer" />
            </div>
          </div>
          <div className="w-full text-[16px] mt-2 font-thin">
            <span>20 mil tweets</span>
          </div>
        </div>
      </section>

      <section className="w-full mt-2 bg-gray-600 rounded-md flex flex-col ">
        <h2 className="font-bold text-white p-2">Quem seguir</h2>

        <div className="mt-4 hover:bg-gray-400 transition-all p-2">
          <div className="w-full cursor-pointer flex items-center ">
            <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
              <img
                src={ProfileImage}
                alt="news image"
                className="w-full h-full"
              />
            </div>
            <div className="w-full flex-1 flex flex-col ml-2 mr-2">
              <h3 className="text-sm text-white font-bold">thigas</h3>
              <span className="font-thin text-[16px]">@o_thigaz</span>
            </div>
            <button className="w-[90px] h-[40px] bg-white rounded-2xl text-[18px] font-medium">
              seguir
            </button>
          </div>
        </div>
        <div className="mt-4 hover:bg-gray-400 transition-all p-2">
          <div className="w-full cursor-pointer flex items-center ">
            <div className="h-[60px] w-[60px] rounded-full overflow-hidden">
              <img
                src={ProfileImage}
                alt="news image"
                className="w-full h-full"
              />
            </div>
            <button className="ml-4 flex-1 h-[40px] bg-gray-600 border border-gray-400 text-white rounded-2xl text-[18px] font-medium flex items-center justify-center overflow-hidden">
                <span className="w-full h-full flex items-center justify-center">
              seguindo
                </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

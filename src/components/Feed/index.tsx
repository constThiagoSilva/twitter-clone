import { RiGalleryLine as GalleryIcon } from "react-icons/ri";
import { HiOutlineGift as GifIcon } from "react-icons/hi";
import { GrEmoji as EmojiIcon } from "react-icons/gr";
import { GoLocation as LocationIcon } from "react-icons/go";
import { VscGraph as GraphIcon } from "react-icons/vsc";
import { MdDateRange as DateIcon } from "react-icons/md";
import { GiStarShuriken as StarIcon } from "react-icons/gi";
import { BsThreeDots as DotsIcon } from "react-icons/bs";
import {FaRegComment as CommentIcon, FaRetweet as RetweetIcon} from 'react-icons/fa'
import {AiOutlineHeart as HeartIcon} from 'react-icons/ai'
import {FiShare as ShareIcon} from 'react-icons/fi'

import ProfileImage from "../../assets/profile.jpeg";

export const Feed = () => {
  return (
    <div className="w-[90%] h-full border-x border-gray-600 overflow-y-scroll relative">
      <header className="w-full h-[60px] p-3 flex items-center justify-between absolute top-0 right-0 left-0  text-white ">
        <span className="font-medium">Página Inicial</span>
        <StarIcon className="text-lg" />
      </header>

      <div className="mt-[60px] p-3 w-full border-b border-gray-600">
        <div className="w-full flex items-center justify-center">
          <img
            src={ProfileImage}
            alt=""
            className="h-[60px] w-[60px] rounded-full"
          />
          <input
            type="text"
            placeholder="O que está acontecendo?"
            className="bg-gray-900 flex-1 h-full focus:outline-none text-white text-[20px] placeholder:font-light ml-3"
          />
        </div>
        <div className="w-full h-[80px] p-2 flex items-center justify-between flex-col md:flex-row">
          <div className="ml-11 flex  items-center text-blue-500 text-lg font-light">
            <GalleryIcon className="cursor-pointer" />
            <GifIcon className="ml-4 cursor-pointer" />
            <GraphIcon className="ml-4 cursor-pointer" />
            <EmojiIcon className="ml-4 cursor-pointer" />
            <DateIcon className="ml-4 cursor-pointer" />
            <LocationIcon className="ml-4 cursor-pointer opacity-40" />
          </div>
          <button className="h-[45px] w-[110px] p-2 flex items-center justify-center rounded-full cursor-pointer bg-blue-500 text-white text-[18px] hover:brightness-95 transition-all mb-1">
            Tweetar
          </button>
        </div>
      </div>

      <main className="w-full">
        <section className="w-full border-y border-gray-600 flex items-center justify-between flex-col p-2 ">
          <div className="w-full flex items-center justify-between relative">
            <div className="flex flex-1 items-center">
              <img
                src={ProfileImage}
                alt="profile-image"
                className="w-[60px] h-[60px] rounded-full"
              />
              <div className="flex items-start flex-col ml-2">
                <div className="flex items-center">
                  <h3 className="text-[18px] text-white font-medium">thigas</h3>
                  <h1 className="text-[16px] text-gray-600 ml-1">@thiago</h1>
                  <span className="text-[16px] text-gray-600 ml-1">20 h</span>
                </div>
                <p className="text-white text-[18px]">Oi</p>
              </div>
            </div>
            <div className="flex items-center absolute top-0 right-0 ">
              <DotsIcon className="text-gray-600 text-[24px]" />
            </div>
          </div>
          <div className="w-[80%] flex justify-between items-center mt-2 text-gray-600">
            <div className="cursor-pointer flex items-center">
            <CommentIcon className="text-[24px]"/>
            </div>
            <div className="cursor-pointer flex items-center">
            <RetweetIcon className="text-[26px]"/>
            </div>
            <div className="cursor-pointer flex items-center">
            <HeartIcon className="text-[24px]"/>
            </div>
            <div className="cursor-pointer flex items-center">
              <ShareIcon className="text-[24px]"/>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

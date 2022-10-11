import {RiGalleryLine as GalleryIcon} from 'react-icons/ri'
import {HiOutlineGift as GifIcon} from 'react-icons/hi'
import {GrEmoji as EmojiIcon} from 'react-icons/gr'
import {GoLocation as LocationIcon} from 'react-icons/go'
import {VscGraph as GraphIcon} from 'react-icons/vsc'
import {MdDateRange as DateIcon} from 'react-icons/md'
import {GiStarShuriken as StarIcon} from 'react-icons/gi'

import ProfileImage from "../../assets/profile.jpeg";

export const Feed = () => {
  return (
    <div className="w-[90%] h-full border-x border-gray-600 overflow-y-scroll relative">
      <header className="w-full h-[60px] p-3 flex items-center justify-between absolute top-0 right-0 left-0  text-white ">
        <span className="font-medium">Página </span>
        <StarIcon className='text-lg'/>
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
            <GalleryIcon className='cursor-pointer'/>
            <GifIcon className='ml-4 cursor-pointer'/>
            <GraphIcon className='ml-4 cursor-pointer'/>
            <EmojiIcon className='ml-4 cursor-pointer'/>
            <DateIcon className='ml-4 cursor-pointer'/>
            <LocationIcon className='ml-4 cursor-pointer opacity-40'/>
          </div>
          <button className="h-[45px] w-[110px] p-2 flex items-center justify-center rounded-full cursor-pointer bg-blue-500 text-white text-[18px] hover:brightness-95 transition-all mb-1">
            Tweetar
          </button>
        </div>
      </div>

      <main>
        <div>
          <div>
            <img src="" alt="" />
            <div>
              <div>
                <h3>Arruda</h3>
                <h1>@aaaa</h1>
                <span>20 h</span>
              </div>
              <p>ansioso para amanha</p>
            </div>
            icone 3 dots
          </div>
          <div>icones</div>
        </div>
      </main>
    </div>
  );
};

import {
  FaTwitter as TwitterIcon,
  FaRegBookmark as BookIcon,
} from "react-icons/fa";
import { RiHome7Fill as HomeIcon } from "react-icons/ri";
import { FiHash as HashIcon, FiUser as UserIcon } from "react-icons/fi";
import {
  IoMdNotificationsOutline as NotificationIcon,
  IoIosList as ListIcon,
} from "react-icons/io";
import { MdOutlineMailOutline as MailIcon } from "react-icons/md";
import { HiOutlineDotsCircleHorizontal as PlusDotsIcon } from "react-icons/hi";
import {
  BsFillPenFill as PenIcon,
  BsThreeDots as DotsIcon,
} from "react-icons/bs";

import ProfileImage from "../../assets/profile.jpeg";

export const ProfileSideBar = () => {
  return (
    <div className="h-full w-[15%] 2xl:w-[20%] p-1 absolute top-0 left-0 ">
      <div className="h-full w-full flex justify-between items-center flex-col">
        <div className="flex-1 w-full flex flex-col items-center 2xl:items-start">
          <div className="h-[60px] w-[60px] flex items-center justify-center rounded-full cursor-pointer text-white text-[35px] hover:bg-gray-700 transition-all mb-2">
            <TwitterIcon />
          </div>
          <div className="h-[60px] w-[60px] 2xl:w-full lg:p-2 flex items-center justify-center lg:justify-start rounded-full cursor-pointer text-white text-[35px] hover:bg-gray-700 transition-all mb-2">
            <HomeIcon className="flex items-center justify-center"/>
            <span className="hidden 2xl:block ml-4 text-[25px]">
              Página Ini...
            </span>
          </div>
          <div className="h-[60px] w-[60px] 2xl:w-full lg:p-2 flex items-center justify-center lg:justify-start rounded-full cursor-pointer text-white text-[35px] hover:bg-gray-700 transition-all mb-2">
            <HashIcon />
            <span className="hidden 2xl:block ml-4 text-[25px]">Explorar</span>
          </div>
          <div className="h-[60px] w-[60px] 2xl:w-full lg:p-2 flex items-center justify-center lg:justify-start rounded-full cursor-pointer text-white text-[35px] hover:bg-gray-700 transition-all mb-2">
            <NotificationIcon />
            <span className="hidden 2xl:block ml-4 text-[25px]">
              Notificações
            </span>
          </div>
          <div className="h-[60px] w-[60px] 2xl:w-full lg:p-2 flex items-center justify-center lg:justify-start rounded-full cursor-pointer text-white text-[30px] hover:bg-gray-700 transition-all mb-2">
            <MailIcon />
            <span className="hidden 2xl:block ml-4 text-[25px]">Mensagens</span>
          </div>
          <div className="h-[60px] w-[60px] 2xl:w-full lg:p-2 flex items-center justify-center lg:justify-start rounded-full cursor-pointer text-white text-[30px] hover:bg-gray-700 transition-all mb-2">
            <BookIcon />
            <span className="hidden 2xl:block ml-4 text-[25px]">Itens salvos</span>
          </div>
          <div className="h-[60px] w-[60px] 2xl:w-full lg:p-2 flex items-center justify-center lg:justify-start rounded-full cursor-pointer text-white text-[35px] hover:bg-gray-700 transition-all mb-2">
            <ListIcon />
            <span className="hidden 2xl:block ml-4 text-[25px]">Listas</span>
          </div>
          <div className="h-[60px] w-[60px] 2xl:w-full lg:p-2 flex items-center justify-center lg:justify-start rounded-full cursor-pointer text-white text-[35px] hover:bg-gray-700 transition-all mb-2">
            <UserIcon />
            <span className="hidden 2xl:block ml-4 text-[25px]">Perfil</span>
          </div>
          <div className="h-[60px] w-[60px] 2xl:w-full lg:p-2 flex items-center justify-center lg:justify-start rounded-full cursor-pointer text-white text-[35px] hover:bg-gray-700 transition-all mb-2">
            <PlusDotsIcon />
            <span className="hidden 2xl:block ml-4 text-[25px]">Mais</span>
          </div>
          <div className="h-[60px] w-[60px] 2xl:w-full lg:p-2 flex items-center justify-center rounded-full cursor-pointer bg-blue-500 text-white text-[35px] hover:brightness-95 transition-all mb-1">
            <PenIcon className="block 2xl:hidden ml-[0.5px]" />
            <span className="hidden 2xl:block text-[20px] font-bold">
              Tweetar
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col items-center 2xl:items-start">
          <div className="h-[70px] w-[70px] 2xl:w-full lg:p-2 flex items-center justify-center lg:justify-between rounded-full cursor-pointer text-white text-[30px] hover:bg-gray-700 transition-all mb-1">
            <div className="flex items-center justify-center">
            <img
                src={ProfileImage}
                alt="profile-image"
                className="w-[50px] h-[50px] rounded-full"
              />

              <div className="hidden 2xl:flex text-[25px] h-full items-start justify-center flex-col ml-3">
                <span className="text-[18px] font-bold">thigas</span>
                <span className="text-[18px] text-gray-300">@o_thigaz</span>
              </div>
            </div>
            <div className="hidden 2xl:block text-[25px] text-gray-300">
              <DotsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import {BsSearch as SearchIcon} from 'react-icons/bs'
import { BsThreeDots as DotsIcon } from "react-icons/bs";

import ProfileImage from '../../assets/profile.jpeg'

export const WhatHappeningSideBar = () => {
    return (
        <div className="hidden lg:flex h-full w-[30%] items-center flex-col p-2">
            <div className="w-full h-[50px] rounded-full bg-gray-600 flex items-center  p-2">
                <div>
                    <SearchIcon className='text-[18px] font-light'/>
                </div>
                <input type="text" placeholder="Buscar no Twitter" className="w-[90%] bg-gray-600 placeholder:font-light focus:outline-none text-[18px] ml-2 text-white"/>
            </div>

            <div className='w-full mt-2 bg-gray-600 rounded-md flex flex-col '>
                <h2 className='font-bold text-white p-2'>O que está acontecendo</h2>

                <div className='mt-4 hover:bg-gray-400 transition-all p-2'>
                    <div className='w-full cursor-pointer flex items-center '>
                        <div className='w-full flex-1 flex flex-col'>
                            <div className='flex items-center'>
                                <span className='font-thin text-[16px]'>
                                Eleições 20... 
                                </span>
                                <span className='font-thin text-[16px]'>
                                    Noite anterior
                                </span>
                            </div>
                            <p className='text-sm text-white font-bold'>
                                Futebol
                            </p>
                        </div>
                        <div className='h-[80px] w-[80px] rounded-md overflow-hidden'>
                            <img src={ProfileImage} alt="news image" className='w-full h-full'/>
                        </div>
                    </div>
                    <div className='w-full text-[16px] mt-2 font-thin'>
                        <span>Assuntos do momento: <strong className='text-blue-500 font-thin'>Tarciso</strong></span>
                    </div>
                </div>

                <div className='mt-4 hover:bg-gray-400 transition-all p-2 overflow-hidden'>
                    <div className='w-full cursor-pointer flex items-center '>
                        <div className='w-full flex-1 flex flex-col'>
                            <div className='flex items-center'>
                                <span className='font-thin text-[16px]'>
                                Eleições 20... 
                                </span>
                                <span className='font-thin text-[16px]'>
                                    Noite anterior
                                </span>
                            </div>
                            <p className='text-sm text-white font-bold'>
                                Futebol
                            </p>
                        </div>
                        <div>
                        <DotsIcon className="text-gray-600 text-[24px] cursor-pointer" />
                        </div>
                    </div>
                    <div className='w-full text-[16px] mt-2 font-thin'>
                        <span>Assuntos do momento: <strong className='text-blue-500 font-thin'>Tarciso</strong></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
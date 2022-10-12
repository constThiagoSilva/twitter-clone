import {BsSearch as SearchIcon} from 'react-icons/bs'

export const WhatHappeningSideBar = () => {
    return (
        <div className="hidden lg:flex h-full w-[30%] items-center flex-col p-2">
            <div className="w-full h-[50px] rounded-full bg-gray-600 flex items-center  p-2">
                <div>
                    <SearchIcon className='text-[18px] font-light'/>
                </div>
                <input type="text" placeholder="Buscar no Twitter" className="w-[90%] bg-gray-600 placeholder:font-light focus:outline-none text-[18px] ml-2 text-white"/>
            </div>

            <div>
                <h2>O que está acontecendo</h2>
                <div>
                    <div>
                        <div>
                            <div>
                                <span>
                                Eleições 20... 
                                </span>
                                <span>
                                    Noite anterior
                                </span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, laudantium.
                            </p>
                        </div>
                        <div>
                            <img src="" alt="news image" />
                        </div>
                    </div>
                    <div>
                        <span>Assuntos do momento: <br /> <strong>Tarciso</strong></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
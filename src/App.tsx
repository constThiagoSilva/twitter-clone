import { Feed } from "./components/Feed"
import { ProfileSideBar } from "./components/ProfileSideBar"
import { WhatHappeningSideBar } from "./components/WhatHappeningSideBar"

export const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-900">
      <div className="w-[100%] sm:w-[95%] md:w-[80%] lg:w-[90%] 2xl:w-[80%] h-full flex items-center justify-center m-auto overflow-y-scroll relative">
      <ProfileSideBar/>
      <Feed/>
      <WhatHappeningSideBar/>
      </div>
    </div>
  )
}

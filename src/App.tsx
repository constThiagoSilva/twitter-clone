import { Feed } from "./components/Feed"
import { ProfileSideBar } from "./components/ProfileSideBar"

export const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-900">
      <div className="w-full h-full flex items-center justify-center m-0 p-0">
      <ProfileSideBar/>
      <Feed/>
      </div>
    </div>
  )
}

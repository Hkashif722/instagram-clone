import Image from "next/image";
import { SearchIcon, MenuIcon, HomeIcon } from "@heroicons/react/solid";

import {
  PaperAirplaneIcon,
  UserGroupIcon,
  HeartIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left  */}
        <div className="relative hidden lg:inline-grid  w-24 cursor-pointer">
          <Image src="https://links.papareact.com/ocw" layout="fill" objectFit="contain" />
        </div>
        <div className="relative lg:hidden  flex-shrink-0  w-10 cursor-pointer">
          <Image src="https://links.papareact.com/jjm" layout="fill" objectFit="contain" />
        </div>
        {/* Middle Search input  */}
        <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute flex inset-y-0 pl-3  items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 pl-10 block w-full border-gray-300 focus:ring-black focus:border-black rounded-lg"
            type="text"
            placeholder="search"
          />
        </div>

        {/* Right  */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navButton" />
          <MenuIcon className="h-6 lg:hidden cursor-pointer " />
          <div className=" relative">
            <PaperAirplaneIcon className="navButton rotate-45" />
            <div
              className="absolute inset-x-3 hidden lg:inline-flex justify-center 
          bg-red-500 text-white rounded-full w-5 h-5 -top-2 animate-pulse "
            >
              3
            </div>
          </div>
          <PlusCircleIcon className="navButton" />
          <UserGroupIcon className="navButton" />
          <HeartIcon className="navButton" />
          <img
            className="h-10 rounded-full cursor-pointer "
            src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          height={40}
          width={40}
          layout="intrinsic"
          alt="Facebook Logo"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className=" hidden md:inline-flex ml-3 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active={true} Icon={HomeIcon}  />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
        {/* <div className="flex space-x-10 md:space-x-10">
          <HomeIcon className="h-6 w-6 text-blue-500 cursor-pointer hover:bg-gray-100 rounded-full p-1" />
          <FlagIcon className="h-6 w-6 text-gray-500 cursor-pointer hover:bg-gray-100 rounded-full p-1" />
          <PlayIcon className="h-6 w-6 text-gray-500 cursor-pointer hover:bg-gray-100 rounded-full p-1" />
          <ShoppingCartIcon className="h-6 w-6 text-gray-500 cursor-pointer hover:bg-gray-100 rounded-full p-1" />
          <UserGroupIcon className="h-6 w-6 text-gray-500 cursor-pointer hover:bg-gray-100 rounded-full p-1" />
        </div> */}
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* Profile Pic */}
      <p className="whitespace-nowrap font-semibold pr-3"> Lasandi Randini </p>
    <ViewGridIcon className="icon" />
    <ChatIcon className="icon" />
    <BellIcon className="icon" />
    <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;

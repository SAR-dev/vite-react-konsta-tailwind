import { useState } from 'react';
import { Page, Navbar } from 'konsta/react';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

const TopNavbar = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  return (
    <Navbar
      className="top-0 sticky h-12 flex items-center px-3"
      transparent={isTransparent}
      right={
        <div className="flex space-x-2 items-center">
          <button className="bg-gray-200 flex border h-7 w-7 items-center justify-center rounded-full">
            <MdOutlineNotificationsActive />
          </button>
        </div>
      }
      left={
        <div className="flex space-x-2 items-center">
          {/* <img
              src="https://i.postimg.cc/T2bMxdn9/image.png"
              className="h-7 w-7 object-cover rounded-full"
              alt=""
            /> */}
          <FaUserCircle size={25} />
          <div className="space-y-.5">
            <p className="font-semibold text-xs">Sayed Rafi</p>
            <p className="text-xs">Level 10</p>
          </div>
        </div>
      }
    />
  );
};

export default TopNavbar;

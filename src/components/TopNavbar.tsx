import { useState } from 'react';
import { Navbar } from 'konsta/react';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { RiSettingsLine } from 'react-icons/ri';

const TopNavbar = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  return (
    <Navbar
      className="top-0 sticky h-14 flex items-center px-3"
      transparent={isTransparent}
      left={
        <div className="flex space-x-3 items-center">
          <div className="avatar">
            <div className="rounded-full ring ring-gray-500 ring-offset-base-100 ring-offset-2">
              <FaUserCircle size={30} />
            </div>
          </div>
          <div className="space-y-.5">
            <p className="font-semibold text-sm">Sayed Rafi</p>
            <p className="text-xs">Level 10</p>
          </div>
        </div>
      }
      right={
        <div className="flex space-x-2 items-center">
          <button className="btn btn-sm btn-ghost btn-circle bg-gray-200/50 h-10 w-10">
            <RiSettingsLine size={20} />
          </button>
          <button className="btn btn-sm btn-ghost btn-circle bg-gray-200/50 h-10 w-10">
            <div className="indicator">
              <MdOutlineNotificationsActive size={20} />
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      }
    />
  );
};

export default TopNavbar;

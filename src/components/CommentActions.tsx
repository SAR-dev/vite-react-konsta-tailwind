import { ReactNode } from 'react';
import { HiStatusOnline } from 'react-icons/hi';
import { MdSignalWifiStatusbar2Bar } from 'react-icons/md';
import { RiChat1Line, RiHeart2Line } from 'react-icons/ri';

interface CommentActionsInterface {}

const CommentActions = (props: CommentActionsInterface) => {
  return (
    <div className="flex items-center space-x-2 mt-1">
      <button className="text-xs font-semibold uppercase hover:text-blue-500">
        Like
      </button>
      <button className="text-xs font-semibold uppercase hover:text-blue-500">
        Unlike
      </button>
    </div>
  );
};

export default CommentActions;

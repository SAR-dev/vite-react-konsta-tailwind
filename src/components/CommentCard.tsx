import { useState } from 'react';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi';
import CommentActions from './CommentActions';
import { useLongPress } from 'use-long-press';

const CommentCard = () => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="flex space-x-3 items-start relative">
      <div className="avatar mt-1">
        <div className="rounded-full">
          <FaUserCircle size={20} />
        </div>
      </div>
      <div className="space-y-.5">
        <div className="flex items-center">
          <p className="font-semibold text-sm">Sayed Rafi</p>
          <div className="ml-auto flex items-center space-x-2">
            <p className="font-semibold text-xs flex items-center space-x-.5">
              <HiArrowSmUp className="text-blue-500" /> 33%
            </p>
            <button
              className="btn btn-xs btn-ghost"
              onClick={() => setShowOptions(true)}
            >
              <BsThreeDots size={20} />
            </button>
          </div>
        </div>
        <div className="flex items-start space-x-1">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris
          </div>
        </div>
        <CommentActions />
      </div>
    </div>
  );
};

export default CommentCard;

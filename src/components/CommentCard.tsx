import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi';

const CommentCard = () => {
  return (
    <div className="flex space-x-3 items-start">
      <div className="avatar mt-1">
        <div className="rounded-full">
          <FaUserCircle size={20} />
        </div>
      </div>
      <div className="space-y-.5">
        <div className="flex items-center">
          <p className="font-semibold text-sm">Sayed Rafi</p>
          <p className="font-semibold text-xs flex items-center space-x-.5 ml-auto">
            <HiArrowSmUp className="text-blue-500" /> 33%
          </p>
        </div>
        <div className="flex items-start space-x-1">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            faucibus mauris leo, eu bibendum neque congue non. Ut leo mauris
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;

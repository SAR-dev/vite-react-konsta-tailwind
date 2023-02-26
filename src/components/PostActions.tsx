import { HiStatusOnline } from 'react-icons/hi';
import { MdSignalWifiStatusbar2Bar } from 'react-icons/md';
import { RiChat1Line, RiHeart2Line } from 'react-icons/ri';

interface PostActionsInterface {
  setShowComments: (props: boolean) => void;
}

const PostActions = (props: PostActionsInterface) => {
  return (
    <div className="flex items-center space-x-1">
      <button className="space-x-2 rounded-md btn btn-sm bg-gray-200/75 border-0 text-gray-700 hover:bg-blue-200/50 hover:text-blue-600">
        <RiHeart2Line size={18} />
        <div>30</div>
      </button>
      <button
        className="space-x-2 rounded-md btn btn-sm bg-gray-200/75 border-0 text-gray-700 hover:bg-pink-200/50 hover:text-pink-600"
        onClick={() => props.setShowComments(true)}
      >
        <RiChat1Line size={18} />
        <div>30</div>
      </button>
      <button className="space-x-2 rounded-md btn btn-sm bg-gray-200/75 border-0 text-gray-700 hover:bg-green-200/50 hover:text-green-600">
        <HiStatusOnline size={18} />
        <div>30</div>
      </button>
      <button className="space-x-2 rounded-md btn btn-sm bg-gray-200/75 border-0 text-gray-700 hover:bg-green-200/50 hover:text-green-600">
        <MdSignalWifiStatusbar2Bar size={18} />
        <div>0.7</div>
      </button>
    </div>
  );
};

export default PostActions;
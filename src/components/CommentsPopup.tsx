import { Page, Navbar, Popup, Block, Link, Button } from 'konsta/react';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai';
import CommentCard from './CommentCard';
import PostActions from './PostActions';

const CommentsPopup = ({
  show,
  setShow,
  setShowComments,
}: {
  show: boolean;
  setShow: (props: boolean) => void;
  setShowComments: (props: boolean) => void;
}) => {
  return (
    <Popup opened={show} onBackdropClick={() => setShow(false)}>
      <Page>
        <Navbar
          className="px-3 bg-white"
          right={<PostActions setShowComments={setShowComments} />}
          left={
            <button
              className="rounded-md btn btn-sm bg-gray-200/75 border-0 text-gray-700 border-0 text-gray-700 hover:bg-red-200/50 hover:text-red-600"
              onClick={() => setShow(false)}
            >
              Back
            </button>
          }
        />
        <Block className="space-y-3">
          {[...Array(10)].map((e, i) => (
            <CommentCard key={i} />
          ))}
        </Block>
      </Page>
    </Popup>
  );
};

export default CommentsPopup;

import { Page, Navbar, Popup, Block, Link, Button } from 'konsta/react';
import { FaUserCircle } from 'react-icons/fa';
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai';
import CommentCard from './CommentCard';

const CommentsPopup = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (props: boolean) => void;
}) => {
  return (
    <Popup opened={show} onBackdropClick={() => setShow(false)}>
      <Page>
        <Navbar
          className="px-3"
          left="Sayed Rafi's post"
          right={
            <Link navbar onClick={() => setShow(false)}>
              Close
            </Link>
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

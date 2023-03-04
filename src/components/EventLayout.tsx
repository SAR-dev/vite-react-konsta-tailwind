import { ReactNode, useState } from 'react';
import TopNavbar from '@src/components/TopNavbar';
import useScrollPosition from '@src/hooks/useScrollPosition';
import { Page, Segmented, SegmentedButton } from 'konsta/react';
import { MdOutlineEmojiPeople } from 'react-icons/md';

const id = 'event-description';

interface EventLayoutProps {
  children: ReactNode;
}

const EventLayout = (props: EventLayoutProps) => {
  const scrollPosition = useScrollPosition(id);
  const [activeSegmented, setActiveSegmented] = useState(1);
  const [showAll, setShowAll] = useState(false);

  return (
    <Page id={id}>
      <TopNavbar
        title="Takayama Festival"
        right={{
          component: (
            <button className="btn btn-primary btn-sm">(50$) Buy Ticket</button>
          ),
          show: scrollPosition > 50,
        }}
      />
      <div className="relative">
        <img
          className="h-56 w-full object-cover"
          src="https://wallpapercave.com/wp/wp1916914.jpg"
          alt=""
        />
        <div className="absolute bottom-0 m-3">
          <div className="bg-white px-3 py-1 rounded flex items-center space-x-1">
            <MdOutlineEmojiPeople />
            <p className="font-semibold text-sm">433</p>
            <p className="text-xs">GOING</p>
          </div>
        </div>
      </div>
      <div className="mt-2 mx-4">
        <Segmented strong>
          <SegmentedButton
            strong
            active={activeSegmented === 1}
            onClick={() => setActiveSegmented(1)}
            className="py-5"
          >
            Details
          </SegmentedButton>
          <SegmentedButton
            strong
            active={activeSegmented === 2}
            onClick={() => setActiveSegmented(2)}
            className="py-5"
          >
            Discussion
          </SegmentedButton>
          <SegmentedButton
            strong
            active={activeSegmented === 3}
            onClick={() => setActiveSegmented(3)}
            className="py-5"
          >
            Gallery
          </SegmentedButton>
        </Segmented>
      </div>
      {props.children}
    </Page>
  );
};

export default EventLayout;

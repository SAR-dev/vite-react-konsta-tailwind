import TopNavbar from '@src/components/TopNavbar';
import useScrollPosition from '@src/hooks/useScrollPosition';
import { Page, Block } from 'konsta/react';
import { useRef } from 'react';

const id = 'event-description';

const EventDescription = () => {
  const scrollPosition = useScrollPosition(id);

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
      <div className="space-y-3">
        <div className="relative">
          <img
            className="h-56 w-full object-cover"
            src="https://wallpapercave.com/wp/wp1916914.jpg"
            alt=""
          />
        </div>
        
      </div>
    </Page>
  );
};

export default EventDescription;

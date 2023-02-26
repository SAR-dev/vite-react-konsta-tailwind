import TopNavbar from '@src/components/TopNavbar';
import { Page, Block } from 'konsta/react';

const EventDescription = () => {
  return (
    <Page>
      <TopNavbar title="Takayama Festival" />
      <div className="space-y-3">
        <div className="relative">
          <img
            className="h-48 w-full object-cover"
            src="https://wallpapercave.com/wp/wp1916914.jpg"
            alt=""
          />
        </div>
      </div>
    </Page>
  );
};

export default EventDescription;

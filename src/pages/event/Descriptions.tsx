import { useRef, useState } from 'react';
import TopNavbar from '@src/components/TopNavbar';
import useScrollPosition from '@src/hooks/useScrollPosition';
import { Page, Block, Segmented, SegmentedButton, Link } from 'konsta/react';
import { RiAdminFill } from 'react-icons/ri';
import { MdAvTimer, MdMoney, MdMyLocation, MdPlace } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import { ImCalendar } from 'react-icons/im';

const id = 'event-description';

const EventDescription = () => {
  const scrollPosition = useScrollPosition(id);
  const [activeSegmented, setActiveSegmented] = useState(1);

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
      </div>
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
      <Block strong inset className="space-y-4 mt-4">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex space-x-2 items-center">
            <RiAdminFill size={20} />
            <div>Hosted by</div>
            <div className="font-semibold">Sayed Rafi</div>
          </div>
          <div className="flex space-x-2 items-center">
            <MdMyLocation size={20} />
            <div className="font-semibold">Dhaka</div>
            <a
              className="text-blue-600"
              href="https://google.com"
              target="_blank"
            >
              <SiGooglemaps size={20} />
            </a>
          </div>
          <div className="flex space-x-2 items-center">
            <ImCalendar size={18} />
            <div className="font-semibold">25 February</div>
          </div>
          <div className="flex space-x-2 items-center">
            <MdAvTimer size={20} />
            <div className="font-semibold">12:00 - 19:00</div>
          </div>
          <div className="flex space-x-2 items-center">
            <MdMoney size={20} />
            <div className="font-semibold">20$</div>
          </div>
        </div>
        <p>
          Current documentation doesn't cover the process of compilation of
          Konsta UI app to Cordova or Capacitor app. It is about Konsta UI and
          how to use all of its components. To learn more about how to compile
          your app to hybrid Cordova or Capacitor app that can be released at
          iOS and Google Play store refer to their official documentations.
        </p>
      </Block>

      <Block strong inset className="space-y-6 mt-4">
        <div className="space-y-4">
          <p className="font-semibold">Platinum Sponsors</p>
          <div className="grid grid-cols-2 gap-3">
            <a href="" className="flex space-x-2 items-center font-semibold">
              <img
                className="h-8 w-8"
                src="https://i.ibb.co/d7FJx2d/image.png"
                alt=""
              />
              <p>Gitlab</p>
            </a>
            <a href="" className="flex space-x-2 items-center font-semibold">
              <img
                className="h-8 w-8"
                src="https://i.ibb.co/SnNFJtk/image.png"
                alt=""
              />
              <p>Facebook</p>
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-semibold">Gold Sponsors</p>
          <div className="grid grid-cols-2 gap-3">
            <a href="" className="flex space-x-2 items-center font-semibold">
              <img
                className="h-8 w-8"
                src="https://i.ibb.co/d7FJx2d/image.png"
                alt=""
              />
              <p>Gitlab</p>
            </a>
            <a href="" className="flex space-x-2 items-center font-semibold">
              <img
                className="h-8 w-8"
                src="https://i.ibb.co/SnNFJtk/image.png"
                alt=""
              />
              <p>Facebook</p>
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <p className="font-semibold">Silver Sponsors</p>
          <div className="grid grid-cols-2 gap-3">
            <a href="" className="flex space-x-2 items-center font-semibold">
              <img
                className="h-8 w-8"
                src="https://i.ibb.co/d7FJx2d/image.png"
                alt=""
              />
              <p>Gitlab</p>
            </a>
            <a href="" className="flex space-x-2 items-center font-semibold">
              <img
                className="h-8 w-8"
                src="https://i.ibb.co/SnNFJtk/image.png"
                alt=""
              />
              <p>Facebook</p>
            </a>
          </div>
        </div>
      </Block>
      {/* Host */}
      {/* Sponsor */}
    </Page>
  );
};

export default EventDescription;

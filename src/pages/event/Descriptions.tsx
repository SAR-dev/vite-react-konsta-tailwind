import { useRef, useState } from 'react';
import TopNavbar from '@src/components/TopNavbar';
import useScrollPosition from '@src/hooks/useScrollPosition';
import { Page, Block, Segmented, SegmentedButton, Link } from 'konsta/react';
import { RiAdminFill, RiMapPin5Fill, RiMapPin5Line } from 'react-icons/ri';
import { MdAvTimer, MdMoney, MdMyLocation, MdPlace } from 'react-icons/md';
import { SiGooglemaps } from 'react-icons/si';
import { ImCalendar } from 'react-icons/im';
import { RxChevronUp, RxMinus, RxPlus } from 'react-icons/rx';
import { AccordionItem, AccordionWrapper } from '@src/components/Accordion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsArrow90DegRight } from 'react-icons/bs';
import EventLayout from '@src/components/EventLayout';

const id = 'event-description';

const EventDescription = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <EventLayout>
      <Block inset strong className="space-y-4 mt-2">
        <div className="grid grid-cols-1 gap-3">
          <div className="flex space-x-2 items-center">
            <RiAdminFill size={20} />
            <div>Hosted by</div>
            <div className="font-semibold">Sayed Rafi</div>
          </div>
          <div className="flex space-x-2 items-center">
            <MdMyLocation size={20} />
            <div className="font-semibold">Dhaka</div>
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
          <div>
            <a
              href="#"
              target="_blank"
              className="btn btn-xs btn-outline border-gray-200 btn-ghost gap-2 rounded"
            >
              <RiMapPin5Line size={16} />
              Google Map
            </a>
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

      <Block strong inset className="space-y-4 mt-4">
        <div className="flex items-center justify-between px-1">
          <p className="font-semibold">Read Carefully</p>
          <button
            className="hover:text-blue-500"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? <RxMinus /> : <RxPlus />}
          </button>
        </div>

        <AccordionWrapper>
          <AccordionItem title="Behave well" opened={showAll}>
            <div>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </AccordionItem>
          <AccordionItem title="Behave well" opened={showAll}>
            <div>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </AccordionItem>
          <AccordionItem title="Behave well" opened={showAll}>
            <div>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </AccordionItem>
        </AccordionWrapper>
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
            <a href="" className="flex space-x-2 items-center font-semibold">
              <img
                className="h-8 w-8"
                src="https://i.ibb.co/SnNFJtk/image.png"
                alt=""
              />
              <p>Facebook</p>
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
        <div className="space-y-4">
          <p className="font-semibold">Special Thanks</p>
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
    </EventLayout>
  );
};

export default EventDescription;

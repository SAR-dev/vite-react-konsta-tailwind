import { useState } from 'react';
import { Block } from 'konsta/react';
import { RiAdminFill, RiMapPin5Line } from 'react-icons/ri';
import { MdAvTimer, MdFrontHand, MdMoney, MdMyLocation } from 'react-icons/md';
import { ImCalendar } from 'react-icons/im';
import { RxMinus, RxPlus } from 'react-icons/rx';
import { AccordionItem, AccordionWrapper } from '@src/components/Accordion';
import {
  FaUserGraduate,
  FaUserCircle,
  FaUserAstronaut,
  FaHandsHelping,
} from 'react-icons/fa';
import EventLayout from '@src/components/EventLayout';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';

const EventGallery = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <Block inset strong className="space-y-4 mt-2"></Block>

      <Block strong inset></Block>
    </>
  );
};

export default EventGallery;

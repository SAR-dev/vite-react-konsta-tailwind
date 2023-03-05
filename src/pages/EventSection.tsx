import EventLayout from '@src/components/EventLayout';
import { useParams } from 'react-router-dom';
import EventDetails from './event/Details';
import EventDiscussion from './event/Discussion';
import EventGallery from './event/Gallery';

const EventSection = () => {
  const { event_id } = useParams();
  const { section } =
    useParams<{ section?: 'details' | 'discussion' | 'gallery' }>();
  return (
    <EventLayout>
      {!section && <EventDetails />}
      {section === 'details' && <EventDetails />}
      {section === 'discussion' && <EventDiscussion />}
      {section === 'gallery' && <EventGallery />}
    </EventLayout>
  );
};

export default EventSection;

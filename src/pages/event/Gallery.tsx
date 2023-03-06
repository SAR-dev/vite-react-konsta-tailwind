import { useState } from 'react';
import { Block, Sheet, Page, Navbar, Link } from 'konsta/react';
import { RiHeart2Line } from 'react-icons/ri';

const images = [...Array(25)].map(
  (e, i) => `https://picsum.photos/seed/picsum${i}/600/300`
);

const EventGallery = () => {
  const [active, setActive] = useState<number>(0);
  const [sheetOpened, setSheetOpened] = useState(false);

  const next = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    }
  };

  const previous = () => {
    if (active != 0) {
      setActive(active - 1);
    }
  };

  return (
    <>
      <Block inset strong className="space-y-4 mt-2">
        <div className="grid grid-cols-2 gap-3">
          {images.map((el, i) => (
            <button
              className="group"
              onClick={() => {
                setActive(i);
                setSheetOpened(true);
              }}
              key={i}
            >
              <img
                src={el}
                className="h-48 w-full object-cover rounded group-hover:opacity-75"
              />
            </button>
          ))}
        </div>
      </Block>

      <Sheet
        opened={sheetOpened}
        className="pb-safe"
        onBackdropClick={() => setSheetOpened(false)}
      >
        <Block inset strong>
          <div className="space-y-3 h-64">
            <div className="flex justify-between">
              <button
                className="btn btn-xs btn-outline w-20 rounded"
                onClick={previous}
              >
                Previous
              </button>
              <button
                className="btn btn-xs btn-outline w-20 rounded"
                onClick={next}
              >
                Next
              </button>
            </div>
            <img
              src={images[active]}
              className="w-full object-cover rounded group-hover:opacity-75"
            />
            <p className="text-sm">Captured by - Rafi</p>
          </div>
        </Block>
      </Sheet>
    </>
  );
};

export default EventGallery;

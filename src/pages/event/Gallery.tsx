import { useState } from 'react';
import { Block, Sheet, Page, Navbar, Link } from 'konsta/react';
import { RiHeart2Line } from 'react-icons/ri';

const images = [...Array(25)].map(
  (e, i) => `https://picsum.photos/seed/picsum${i}/600/300`
);

const EventGallery = () => {
  const [data, setData] = useState([...images]);
  const [sheetOpened, setSheetOpened] = useState(false);

  const openSheet = (index: number) => {
    const part_1 = images.slice(index);
    const part_2 = images.slice(0, index);
    const part = part_1.concat(part_2);
    setData([...part]);
    setSheetOpened(true);
  };

  const restore = () => {
    setData([...images]);
    setSheetOpened(false);
  };

  return (
    <>
      <Block inset strong className="space-y-4 mt-2">
        {sheetOpened ? (
          <>
            <div
              className="carousel w-full rounded-box"
              style={{ height: 'calc(100vh - 220px)' }}
            >
              {data.map((el, i) => (
                <div className="carousel-item mx-2" key={i}>
                  <img src={el} className="rounded-box" />
                </div>
              ))}
            </div>
            <div className="flex w-full">
              <button className="btn btn-sm  mx-auto" onClick={restore}>
                Return to gallery
              </button>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {data.map((el, i) => (
              <button className="group" onClick={() => openSheet(i)} key={i}>
                <img
                  src={el}
                  className="h-48 w-full object-cover rounded group-hover:opacity-75"
                />
              </button>
            ))}
          </div>
        )}
      </Block>
    </>
  );
};

export default EventGallery;

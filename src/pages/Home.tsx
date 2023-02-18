import { BsThreeDots } from 'react-icons/bs';
import { Page, Block } from 'konsta/react';
import TopNavbar from '@src/components/TopNavbar';
import { FaUserCircle } from 'react-icons/fa';
import { GiAmericanFootballHelmet } from 'react-icons/gi';
import { HiStatusOnline } from 'react-icons/hi';
import { RiHeart2Line, RiTimeLine, RiChat1Line } from 'react-icons/ri';
import { MdSignalWifiStatusbar2Bar } from 'react-icons/md';

export default function Home() {
  return (
    <Page>
      <TopNavbar />
      <div className="relative">
        <Block strong inset className="space-y-4">
          <div className="flex items-center w-full">
            <div className="flex space-x-3 items-center">
              <div className="avatar">
                <div className="rounded-full ring ring-gray-500 ring-offset-base-100 ring-offset-2">
                  <FaUserCircle size={30} />
                </div>
              </div>
              <div className="space-y-.5">
                <p className="font-semibold text-sm">Sayed Rafi</p>
                <div className="flex items-center space-x-1">
                  <GiAmericanFootballHelmet />
                  <div className="text-xs">
                    Chilling at Padma Bridge food court
                  </div>
                </div>
              </div>
            </div>
            <button className="ml-auto btn btn-xs btn-ghost">
              <BsThreeDots size={20} />
            </button>
          </div>
          <div className="space-y-3 line-clamp-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              tempore ratione unde accusantium distinctio nulla quia numquam
              earum odio, optio, nisi rem deserunt. Molestiae delectus, ut
              assumenda numquam magni enim.
            </p>
            <p>
              Architecto molestias cum dolor dolorem provident consequuntur
              incidunt sunt fugiat tenetur odio, recusandae placeat rem veniam.
              Voluptates, repellendus odit, magni nesciunt, optio laborum
              asperiores repudiandae consectetur suscipit ab cupiditate eum.
            </p>
          </div>
          <div className="h-96 carousel carousel-vertical rounded-md">
            <div className="carousel-item h-full">
              <img
                className="w-full object-cover"
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              />
            </div>
            <div className="carousel-item h-full">
              <img
                className="w-full object-cover"
                src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              />
            </div>
            <div className="carousel-item h-full">
              <img
                className="w-full object-cover"
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              />
            </div>
            <div className="carousel-item h-full">
              <img
                className="w-full object-cover"
                src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              />
            </div>
            <div className="carousel-item h-full">
              <img
                className="w-full object-cover"
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              />
            </div>
            <div className="carousel-item h-full">
              <img
                className="w-full object-cover"
                src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              />
            </div>
            <div className="carousel-item h-full">
              <img
                className="w-full object-cover"
                src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center space-x-1">
              <button className="space-x-2 rounded-md btn btn-sm bg-gray-100/75 border-0 text-gray-700 hover:bg-blue-200/50 hover:text-blue-600">
                <RiHeart2Line size={18} />
                <div>30</div>
              </button>
              <button className="space-x-2 rounded-md btn btn-sm bg-gray-100/75 border-0 text-gray-700 hover:bg-pink-200/50 hover:text-pink-600">
                <RiChat1Line size={18} />
                <div>30</div>
              </button>
              <button className="space-x-2 rounded-md btn btn-sm bg-gray-100/75 border-0 text-gray-700 hover:bg-green-200/50 hover:text-green-600">
                <HiStatusOnline size={18} />
                <div>30</div>
              </button>
              <button className="space-x-2 rounded-md btn btn-sm bg-gray-100/75 border-0 text-gray-700 hover:bg-green-200/50 hover:text-green-600">
                <MdSignalWifiStatusbar2Bar size={18} />
                <div>0.7</div>
              </button>
            </div>
            <div className="flex items-center space-x-1 ml-auto">
              <RiTimeLine size={18} />
              <div>3d 2m</div>
            </div>
          </div>
        </Block>
      </div>
    </Page>
  );
}

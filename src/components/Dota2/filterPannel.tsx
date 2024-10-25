import { memo, useMemo } from "react";

import FilterBg1 from '../../assets/Picdash/games/dota2/filter_bg.png';
import FilterBg2 from '../../assets/Picdash/games/dota2/fliterBg2.png';
import FliterBgline from '../../assets/Picdash/games/dota2/Lines.png';
import Rarity from '../../assets/Picdash/games/dota2/down.png';
import General from '../../assets/Picdash/games/dota2/active.png';

const FilterPannel = memo(() => {

  const filters = useMemo(() => {
    return [
      {title: 'Rarity', placeholder: 'All qualities', icon: Rarity},
      {title: 'Quality', placeholder: 'All qualities', icon: General},
      {title: 'Type', placeholder: 'All', icon: General},
      {title: 'Hero selection', placeholder: 'All qualities', icon: General},
    ]
  }, []);
  return (
    <div className="bg-filter h-[820px] pb-32 w-1/4 rounded-2xl pt-[26px] py-5 relative">
      <div>
        <img src={FilterBg1} className="absolute right-0 top-0" alt="" />
        <img src={FilterBg2} className="absolute bottom-0 left-0" alt="" />
        <img src={FliterBgline} className="absolute top-0 left-10" alt="" />
      </div>
      <div className="flex font-inter px-16 justify-between items-center">
        <div className="text-3xl leading-[48px] opacity-20 font-bold">Fliters</div>
        <p className="text-lg font-semibold text-black">Reset</p>
      </div>
      <div className="px-16 mt-5">
        <p className="text-sm font-inter font-semibold leading-5">Price</p>
        <div className="w-3/4 text-[10px] font-inter font-medium mt-5 text-black">
          <div className="flex justify-between mb-1">
            <span className="font-semibold">Up to CA$6000</span>
            <span className="font-semibold">clear</span>
          </div>
          <div className="w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 w-[85%] h-2.5 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="px-10 mt-10 flex flex-col gap-4">
        {filters.map((item, index) => (
          <div className="py-3 rounded-bl-none rounded-tl-none flex gap-12 items-center border-l-0 border rounded-xl border-custom1 border-image-custom1">
            <div className={`-m-7 rounded-full p-5 ${index == 0 ? 'custom-background1' : 'bg-filter1'}`}>
              <img src={item.icon} alt="" />
            </div>
            <div className="font-inter">
              <p className="text-lg font-bold">{item.title}</p>
              {item.title === 'Hero selection' ? (
                <button className="bg-custom-multiple py-2 px-10 rounded-md mt-2">
                    View More 
                </button>
              ): (
                <input type="text" className="bg-white w-[95%] opacity-60 p-2 rounded-xl mt-2" placeholder={item.placeholder} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
});

export default FilterPannel;
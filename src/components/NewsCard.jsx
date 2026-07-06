import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { newsData } from "../data/newsData";

import "swiper/css";
import "swiper/css/pagination";

function NewsCard() {
  const swiperRef = useRef(null);

  return (
    <div className="flex">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 20 } }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="pb-12"
      >
        {newsData.map((news) => (
          <SwiperSlide key={news.id}>
            <div
              className="bg-white border border-gray-200 p-6 flex flex-col justify-between h-[250px] cursor-pointer select-none active:scale-[0.99] transition-transform rounded-md shadow-md mt-5"
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onTouchStart={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
              onTouchEnd={() => swiperRef.current?.autoplay.start()}
            >
              <div>
                <h3 className="text-base font-bold text-[#222222] line-clamp-2 mb-3">
                  {news.name}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-4">
                  {news.desc}
                </p>
              </div>
              <button className="w-fit bg-amber-400 text-white text-xs font-bold py-2 px-4 rounded mt-4">
                Mulai Baca &gt;
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NewsCard;

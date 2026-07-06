import { useRef } from "react";
import { Contact } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ekskulData } from "../data/ekskulData";

function EkskulCard() {
  const swiperRef = useRef(null);
  return (
    <div className="flex w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        speed={200}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{ 768: { slidesPerView: 3, spaceBetween: 20 } }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="pb-12"
      >
        {ekskulData.map((ekskul) => (
          <SwiperSlide key={ekskul.id}>
            <div
              className="bg-white border border-gray-200 p-6 flex flex-col justify-between h-[250px] cursor-pointer select-none active:scale-[0.99] transition-transform rounded-md shadow-md mt-5"
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onTouchStart={() => {
                if (swiperRef.current?.autoplay?.running) {
                  swiperRef.current.autoplay.pause();
                }
              }}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
              onTouchEnd={() => swiperRef.current?.autoplay?.start()}
            >
              <div>
                <div className="flex items-center justify-center gap-8 mb-4">
                  <div className="bg-slate-100 border border-gray-300 flex items-center justify-center p-4">
                    <Contact size={24} />
                  </div>
                  <h1 className="text-xl font-bold text-[#222222] line-clamp-2 mb-3">
                    {ekskul.name}
                  </h1>
                </div>
                <p className="text-xs text-gray-500 line-clamp-4">
                  {ekskul.desc}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default EkskulCard;

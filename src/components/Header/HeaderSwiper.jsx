import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
} from "swiper/modules";
import { ALL_DATA } from "../../Query/get_all";
import SwiperSlideItem from "./SwiperSlideItem";

const HeaderSwiper = () => {
  const cottageTop = ALL_DATA.useCottageTop()?.data;

  return (
    <Swiper
      className="swiper-header"
      modules={[Navigation, A11y, Scrollbar, Autoplay, Parallax]}
      spaceBetween={1}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
      }}
      parallax={{
        enabled: true,
      }}
    >
      {cottageTop?.length &&
        cottageTop.map((el) => {
          return (
            <SwiperSlide key={el.id} className="swiper-slide-header">
              <SwiperSlideItem el={el} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default HeaderSwiper;

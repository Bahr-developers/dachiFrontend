import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { IMG_BASE_URL } from "../../constants/img.constants";
import { SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Swiper from "swiper";

const ViewImages = ({ cottageView, viewCottage }) => {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
      }}
      loop={true}
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: viewCottage }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper2"
    >
      {cottageView?.images &&
        cottageView.images.map((img) => (
          <SwiperSlide key={img.id}>
            <LazyLoadImage
              className="view-image"
              src={`${IMG_BASE_URL}${img.image}`}
              alt="img"
              effect="blur"
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ViewImages;

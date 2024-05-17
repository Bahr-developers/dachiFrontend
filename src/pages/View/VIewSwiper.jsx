// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useContext, useState } from "react";
import { IMG_BASE_URL } from "../../constants/img.constants";
import { ViewPageLanguage } from "../../configs/language";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { LanguageContext } from "../../helper/languageContext";
import { FiPhoneCall } from "react-icons/fi";

const VIewSwiper = ({ cottageView }) => {
  const [viewCottage, setViewCottage] = useState(null);

  const { languageChange } = useContext(LanguageContext);

  return (
    <div className="imag-and-desc-wrap w-100 gap-3 d-flex">
      <div className="cottage-images">
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
                <img
                  className="view-image"
                  src={`${IMG_BASE_URL}${img.image}`}
                  alt="img"
                />
              </SwiperSlide>
            ))}
        </Swiper>
        <Swiper
          onSwiper={setViewCottage}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {cottageView?.images &&
            cottageView.images.map((img) => (
              <SwiperSlide key={img.id}>
                <img
                  className="view-image-child"
                  src={`${IMG_BASE_URL}${img.image}`}
                  alt="img"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="contact-me">
        <div className="contactUSer">
          <p>{ViewPageLanguage.contactUser[languageChange]}</p>
          <div className="contact__user">
            {cottageView?.user.image ? (
              <LazyLoadImage
                src={`${IMG_BASE_URL}${cottageView?.user.image}`}
                title="userImg"
                height={40}
                width={40}
                effect="blur"
              />
            ) : (
              <span>
                <FaRegUserCircle size={23} />
              </span>
            )}
            <p>{cottageView?.user.name}</p>
          </div>
          <Link
            to={`/home/view/cottage/${cottageView?.user.id}`}
            className="announCementLink"
          >
            <span>{ViewPageLanguage.announcement[languageChange]}</span>

            <span>
              <IoIosArrowForward size={22} />
            </span>
          </Link>
        </div>
        <Link
          to={`tel:+998${cottageView?.user.phone}`}
          className="btn btn-outline-success callLink p-0 call-me mt-3 text-center"
        >
          {" "}
          <FiPhoneCall size={23} />{" "}
          <span className="fs-5 fw-bold">
            {ViewPageLanguage.userContact[languageChange]}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default VIewSwiper;

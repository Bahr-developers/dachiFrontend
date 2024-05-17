import { Link } from "react-router-dom";
import { HeaderLang } from "../../configs/language";
import { IMG_BASE_URL } from "../../constants/img.constants";
import { useContext } from "react";
import { LanguageContext } from "../../helper/languageContext";

const SwiperSlideItem = ({ el }) => {
  const { languageChange } = useContext(LanguageContext);
  return (
    <div className="wrap-ads">
      <img
        src={`${IMG_BASE_URL}${
          el.images.find((mainIm) => mainIm.isMainImage === true).image
        }`}
        alt="bgimg"
        className="bg-img h-100"
      />
      <div className="info-card">
        <h1 className="oswald header-text"> {el.name} </h1>
        <h2 className="oswald header-num">${el.price}</h2>
        <Link to={`/home/view/${el.id}`} className="header-btn">
          {HeaderLang[languageChange].btn}
        </Link>
      </div>
    </div>
  );
};

export default SwiperSlideItem;

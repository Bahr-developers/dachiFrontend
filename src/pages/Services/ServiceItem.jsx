import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMG_BASE_URL } from "../../constants/img.constants";
import { Link } from "react-router-dom";
import { ServicesPageLanguage } from "../../configs/language";
import { useContext } from "react";
import { LanguageContext } from "../../helper/languageContext";

const ServiceItem = ({ el }) => {
  const { languageChange } = useContext(LanguageContext);
  console.log(el, "item");
  return (
    <div key={el.id} className="services-card">
      <LazyLoadImage
        effect="blur"
        src={`${IMG_BASE_URL}${el.images[0]}`}
        alt={el.name}
        className="services-caer-img"
      />
      <hr />
      <h4 className="services-card-name">{el.name}</h4>
      <p className="services-card-description">{el.description}</p>
      <div className="servise-btn">
        <Link className="services-card-link" to={`${el.id}`}>
          {ServicesPageLanguage.viewTariff[languageChange]}
        </Link>
      </div>
    </div>
  );
};

export default ServiceItem;

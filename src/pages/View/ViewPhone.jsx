import { useContext } from "react";
import { LanguageContext } from "../../helper/languageContext";
import { ViewPageLanguage } from "../../configs/language";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMG_BASE_URL } from "../../constants/img.constants";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";

const ViewPhone = ({ cottageView }) => {
  const { languageChange } = useContext(LanguageContext);
  return (
    <div className="phoneCallMobile">
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
          <p>{cottageView?.user.name || "Username"}</p>
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
        <FiPhoneCall size={23} />{" "}
        <span className="fs-5 fw-bold">
          {ViewPageLanguage.userContact[languageChange]}
        </span>
      </Link>
    </div>
  );
};

export default ViewPhone;

import "./Profil.css";

import MiniNaw from "../../components/MiniNaw/MiniNaw";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ProfilePageLanguage } from "../../configs/language";
import { useContext } from "react";
import { MdOutlineBookmarkBorder } from "react-icons/md"
import { LanguageContext } from "../../helper/languageContext";
import { ALL_DATA } from "../../Query/get_all";

const Profil = () => {
  const { languageChange } = useContext(LanguageContext);

  const order = ALL_DATA.useOrder()

  return (
    <>
      <Helmet>
        <title>User Profil</title>
        <meta name="description" content="profil page" />
        <link rel="canonical" href="https://dachivgorax.uz/home/profile/user" />
      </Helmet>

      <div className="container">
        <div className="profil-wrap">
          <Link to="/home/profile/user" className="profil-card user-card-mini">
            <p className="profil-text">
              {ProfilePageLanguage.profile[languageChange]}
            </p>
            <i className="bx fs-1 bx-user-circle"></i>
          </Link>
          <Link
            to="/home/profile/services"
            className="profil-card services-card-mini"
          >
            <p className="profil-text">
              {ProfilePageLanguage.services[languageChange]}
            </p>
            <i className="bx fs-1  bx-server"></i>
          </Link>          
          <Link
            to="/home/profile/announcement"
            className="profil-card annoumcommet-card-mini"
          >
            <p className="profil-text">
              {ProfilePageLanguage.myCottage[languageChange]}
            </p>
            <i className="bx fs-1  bx-analyse"></i>
          </Link>
          <Link
            to="/home/profile/order"
            className={order?.data?.length ? "profil-card order-card-mini": "d-none"}
          >
            <p className="profil-text">
              {ProfilePageLanguage.order[languageChange]}
            </p>
            <MdOutlineBookmarkBorder size={25}/>
          </Link>
        </div>
      </div>
      <MiniNaw />
    </>
  );
};

export default Profil;

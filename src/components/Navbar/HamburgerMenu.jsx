import { Link } from "react-router-dom";
import Close from "../../assets/images/close.svg";
import { exitLang, NavLeng } from "../../configs/language";
import { useContext } from "react";
import { LanguageContext } from "../../helper/languageContext";
import GoOut from "../../assets/images/go-out.svg";
import ToggleLanguage from "./ToggleLanguage";
import SocialLinks from "./SocialLinks";

const HamburgerMenu = ({ modalIsOpen, setModalIsOpen, logoutBtn }) => {
  const { languageChange } = useContext(LanguageContext);
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  return (
    <div className={`BgMenuActive`}>
      <div
        className={`hamburgerMenu d-flex justify-content-between ${
          modalIsOpen ? "hamburgerMenuActive" : "hamburgerMenuClose"
        }`}
      >
        <div>
          <button className="close" onClick={() => setModalIsOpen(false)}>
            <img src={Close} width="18.62" height="18.62" alt="close" />
          </button>
          <div className="modal-nav-menu">
            <Link to="tel:+9981002314" className="modal-nav-contact d-black ">
              {NavLeng[languageChange].connection}
            </Link>

            <SocialLinks />

            <ToggleLanguage />

            <Link
              to="/sign-in"
              className={
                accessToken && refreshToken ? "d-none" : "modal-nav-out d-block"
              }
            >
              {exitLang[1][languageChange]}
            </Link>
            <button
              onClick={logoutBtn}
              className={
                accessToken && refreshToken
                  ? "modal-nav-out"
                  : "modal-nav-out d-none"
              }
            >
              <img src={GoOut} alt="" />
              {exitLang[0][languageChange]}
            </button>
          </div>
        </div>
      </div>
      <div className={`${modalIsOpen ? "overlayMenuActive" : "d-none"}`}></div>
    </div>
  );
};

export default HamburgerMenu;

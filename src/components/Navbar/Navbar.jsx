import "./Navbar.css";
import Logo from "../../../public/dachaol.svg";
import Menu from "../../assets/images/menu.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";

import { FiHeart } from "react-icons/fi";

import Notification from "../../Modals/notification/Natification";
import { ALL_DATA } from "../../Query/get_all";
import { MenuLanguage, NavLeng, exitLang } from "../../configs/language";
import { LanguageContext } from "../../helper/languageContext";
import HamburgerMenu from "./HamburgerMenu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import UserDropdown from "./UserDropdown";
import SocialLinks from "./SocialLinks";
import ToggleLanguage from "./ToggleLanguage";

const Navbar = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const cottage = ALL_DATA.useCottage();
  const fovariteCottage =
    cottage?.data?.length &&
    cottage?.data?.filter((e) => e.isLiked === true)?.length;
  const registered = useRef(null);
  const signIn = useRef(null);
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  const logoutBtn = () => {
    signIn.current.classList.remove("d-none");
    registered.current.classList.add("d-none");
    localStorage.clear();
    setModalIsOpen(false);
    window.location.reload();
    navigate("/");
  };

  const closeModalOverlay = (e) => {
    if (e.target.classList[0] === "overlayMenuActive") {
      setModalIsOpen(false);
    }
  };
  // language change
  const { languageChange } = useContext(LanguageContext);

  return (
    <>
      <div onClick={closeModalOverlay} className="container">
        <div className="navbar ">
          <button onClick={() => setModalIsOpen(true)} className="menu">
            <LazyLoadImage
              className="menu-img"
              src={Menu}
              width={14}
              height={12}
              alt="menu"
            />
            <p className="menu-text">{MenuLanguage[languageChange]}</p>
          </button>

          <HamburgerMenu
            modalIsOpen={modalIsOpen}
            setModalIsOpen={setModalIsOpen}
            logoutBtn={logoutBtn}
          />

          <div className="d-flex align-items-center" style={{ gap: "30px" }}>
            <Link to="/">
              <img
                className="logo"
                src={Logo}
                width="65"
                height="64"
                alt="logo"
              />
            </Link>

            <div className="navs align-items-center">
              <Link to="tel:+9981002314" className="contact d-block">
                {NavLeng[languageChange].connection}
              </Link>
              <SocialLinks />

              <ToggleLanguage />
            </div>
          </div>
          <div className="icons">
            <Link to="/home/favorite" className="heart">
              <FiHeart className="heart-icon" />
              <span
                className={fovariteCottage === 0 ? "d-none" : "fovarite-num"}
              >
                {fovariteCottage}
              </span>
            </Link>

           
            <div className="d-flex align-items-center">
              <Notification />
            </div>

            <Link
              ref={signIn}
              to="/sign-in"
              className={accessToken && refreshToken ? "d-none" : "sign-in"}
            >
              {exitLang[1][languageChange]}
            </Link>

            {/* dropdown */}
            <UserDropdown logoutBtn={logoutBtn} registered={registered} />
            {/* dropdown */}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;

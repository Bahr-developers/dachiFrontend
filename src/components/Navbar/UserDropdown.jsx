import { IMG_BASE_URL } from "../../constants/img.constants";
import UserMenu from "../../assets/images/user-menu.svg";
import UserModal from "../../assets/images/user-modal.svg";
import RedGoOut from "../../assets/images/red-go-out.svg";
import { NavberLinks, ProfilePageLanguage } from "../../configs/language";
import { useContext } from "react";
import { LanguageContext } from "../../helper/languageContext";
import { Link } from "react-router-dom";
import { ALL_DATA } from "../../Query/get_all";

const UserDropdown = ({ logoutBtn, registered }) => {
  const user = ALL_DATA.useSingleUser()?.data;
  const order = ALL_DATA.useOrder()

  const accessToken = localStorage.getItem("accessToken");

  const { languageChange } = useContext(LanguageContext);
  return (
    <div className="dropdown">
      <button
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        ref={registered}
        className={accessToken ? "sign-out" : "d-none"}
      >
        <img src={UserMenu} alt="" />
        <div className="user-nav">
          <img
            src={`${IMG_BASE_URL}${user?.image}`}
            className={user?.image ? "user-nav" : "d-none"}
            alt="userImg"
          />
        </div>
      </button>
      <ul className="dropdown-menu userDropdown">
        <div className="user-modal-nav-top">
          <p className="um-top-gmail">
            {user?.name?.split(" ")[1] || "user email"}
          </p>
          <img
            src={`${IMG_BASE_URL}${user?.image}`}
            className={user?.image ? "um-top-img" : "d-none"}
            alt="userImg"
          />
        </div>

        <Link to="/home/add-new" className="um-text text-decoration-none">
          {NavberLinks[languageChange].add}
        </Link>
        <Link
          to="/home/profile/announcement"
          className="um-text text-decoration-none mt-2 d-block"
        >
          {NavberLinks[languageChange].cottage}
        </Link>
        <Link
          to="/home/profile/services"
          className="um-text text-decoration-none mt-2 d-block"
        >
          {NavberLinks[languageChange].services}
        </Link>
        <Link
          to="/home/profile/order"
          className={order?.data?.length ? "um-text text-decoration-none mt-2 d-block": "d-none"}
        >
          {ProfilePageLanguage.order[languageChange]}
        </Link>

        <hr />

        <div className="user-modal-nav-profil">
          <img src={UserModal} alt="user" />
          <Link className="um-profil-link" to="/home/profile/user">
            {NavberLinks[languageChange].profil}
          </Link>
        </div>

        <Link to="/" className="user-modal-nav-out">
          <img src={RedGoOut} alt="go-out" />
          <button onClick={logoutBtn} className="um-out-btn">
            {NavberLinks[languageChange].exit}
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default UserDropdown;

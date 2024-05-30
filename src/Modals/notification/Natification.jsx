import Bell from "../../assets/images/bell.svg";
import MiniBell from "../../assets/images/mini-bell.svg";
import "../modal.css";
import { ALL_DATA } from "../../Query/get_all";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../helper/languageContext";
import { notificationLang, notificationLanguage } from "../../configs/language";
import NotificationItam from "./notificationItam";

function Natification() {
  const user = JSON.parse(localStorage.getItem("user")) || undefined;
  const notification =  ALL_DATA.useNotificationUser(user?.id)?.data;
  const { languageChange } = useContext(LanguageContext);
  const notifications = notification?.filter((notif) => notif.status === "new");
  const location = useLocation();

  return (
    <>
      <button
        className="border-0 btn notificationsBtn"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <div
          className="bell"
          style={
            location?.pathname === "/" || location?.pathname === "/home"
              ? { marginRight: "20px" }
              : { marginRight: "0" }
          }
        >
          <img
            className="minibell-img"
            src={MiniBell}
            width="14.77"
            height="16.88"
            alt="bell"
          />
          <img
            className="bell-img"
            src={Bell}
            width="26.25"
            height="30"
            alt="bell"
          />
        </div>
        <p
          style={
            location?.pathname === "/" || location?.pathname === "/home"
              ? { right: "28px" }
              : { right: "5px" }
          }
          className={`m-0 ${
            notifications?.length > 0 ? "notifLength" : "d-none"
          }`}
        >
          {notifications?.length > 0 ? notifications.length : ""}
        </p>
      </button>
      <div
        className="modal  fade modal-natif"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      ><div className="modal-dialog modal-natif-dialog modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            {notificationLang[languageChange]}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
              <div className="modal-body">
                  {!notification?.length ? <p className="text-black noneFavoriteCart border-warning border">Bildirishnomalar mavjud emas</p>:
                    notification?.length && notification.map((mes) => (
                      <NotificationItam mes={mes} key={mes.id}/>
                    ))}
                  {!notification?.length ? (
                    <p className="text-black noneFavoriteCart border-warning border">
                      {notificationLanguage[languageChange]}
                    </p>
                  ) : (
                    notification.map((mes) => (
                      <NotificationItam mes={mes} key={mes.id} userId={user?.id} />
                    ))
                  )}
              </div>
              </div>
      </div>
        </div>
    </>
  );
}

export default Natification;

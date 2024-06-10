import BreacdCrumbs from "../../components/BreadCrumbs/BreacdCrumbs";
import MiniNaw from "../../components/MiniNaw/MiniNaw";

import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";

import "./ToPay.css";
import { Link } from "react-router-dom";

const ToPay = () => {
  return (
    <>
      <Helmet>
        <title>Payment</title>
        <meta name="description" content="payment page" />
        <link rel="canonical" href="/ToPay" />
      </Helmet>
      <Navbar />
      <div className="container">
        <BreacdCrumbs />
        <div className="to-pay">
          <h2 className="to-pay-header">Оповещение</h2>

          <div className="to-pay-card">
            <p className="to-pay-day">Сегодня</p>
            <p className="to-pay-user">Здравствуйте уважаемый Umidjon!</p>
            <p className="to-pay-hour">Получено в: 21:40</p>
            <p className="to-pay-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              posuere nunc amet scelerisque rhoncus cras nascetur aliquam. A
              donec viverra elit consectetur egestas fringilla mattis diam diam.
              Felis id mauris, egestas consectetur sapien amet. Egestas enim
              nulla felis vel vitae. Massa commodo id ultrices nunc duis sit mi
              lectus vestibulum. Auctor accumsan, sem hendrerit eget accumsan.
              Nulla mi vulputate etiam et fames volutpat. Gravida turpis lacus,
              venenatis, risus suspendisse morbi eros consectetur convallis.
              Nunc
            </p>

            <div className="to-pay-btns">
              <Link className="to-pay-btn" to="/pay-detail">
                Подробное
              </Link>
              <button className="to-pay-delete">Удалить</button>
            </div>
          </div>

          <div className="to-pay-card">
            <p className="to-pay-day">Вчера</p>
            <p className="to-pay-user">Здравствуйте уважаемый Umidjon!</p>
            <p className="to-pay-hour">Получено в: 21:40</p>
            <p className="to-pay-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              posuere nunc amet scelerisque rhoncus cras nascetur aliquam. A
              donec viverra elit consectetur egestas fringilla mattis diam diam.
              Felis id mauris, egestas consectetur sapien amet. Egestas enim
              nulla felis vel vitae. Massa commodo id ultrices nunc duis sit mi
              lectus vestibulum. Auctor accumsan, sem hendrerit eget accumsan.
              Nulla mi vulputate etiam et fames volutpat. Gravida turpis lacus,
              venenatis, risus suspendisse morbi eros consectetur convallis.
            </p>

            <div className="to-pay-btns">
              <Link className="to-pay-btn" to="/pay-detail">
                Подробное
              </Link>
              <button className="to-pay-delete">Удалить</button>
            </div>
          </div>

          <div className="to-pay-card">
            <p className="to-pay-day">11.11.2022</p>
            <p className="to-pay-user">Здравствуйте уважаемый Umidjon!</p>
            <p className="to-pay-hour">Получено в: 21:40</p>
            <p className="to-pay-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              posuere nunc amet scelerisque rhoncus cras nascetur aliquam. A
              donec viverra elit consectetur egestas fringilla mattis diam diam.
              Felis id mauris, egestas consectetur sapien amet. Egestas enim
            </p>

            <div className="to-pay-btns">
              <Link className="to-pay-btn" to="/pay-detail">
                Подробное
              </Link>
              <button className="to-pay-delete">Удалить</button>
            </div>
          </div>
        </div>
      </div>
      <MiniNaw />
    </>
  );
};

export default ToPay;

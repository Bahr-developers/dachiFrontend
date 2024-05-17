import "./Tarif.css";
import { ALL_DATA } from "../../Query/get_all";

import MiniNaw from "../../components/MiniNaw/MiniNaw";

import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import { useContext } from "react";
import { LanguageContext } from "../../helper/languageContext";
import { TariffPageLanguage } from "../../configs/language";

import TarifItem from "./TarifItem";

const Tarif = () => {
  const tariff = ALL_DATA.useTariff();
  const { languageChange } = useContext(LanguageContext);

  if (tariff.isLoading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Tariff</title>
        <meta name="description" content="Tariff page" />
        <link rel="canonical" href="/Tariff" />
      </Helmet>

      <div className="container">
        <Navbar />
        <div className="tarif">
          <h2 className="tarif-header font-bold">
            {TariffPageLanguage.mainTitle[languageChange]}
          </h2>

          <div className="tarif-cards wrap-tarif-cards">
            {tariff.data?.length &&
              tariff.data.map((el, i) => (
                <TarifItem
                  el={el}
                  key={el.id}
                  i={i}
                  tariffLength={tariff.data.length}
                />
              ))}
          </div>
        </div>
      </div>
      <MiniNaw />
      <Footer />
    </>
  );
};

export default Tarif;

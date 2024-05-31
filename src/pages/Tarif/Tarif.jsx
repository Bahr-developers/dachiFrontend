import "./Tarif.css";
import { ALL_DATA } from "../../Query/get_all";

import MiniNaw from "../../components/MiniNaw/MiniNaw";

import { Helmet } from "react-helmet-async";
import Loader from "../../components/Loader/Loader";
import { useContext } from "react";
import { LanguageContext } from "../../helper/languageContext";
import { TariffPageLanguage } from "../../configs/language";

import TarifItem from "./TarifItem";

const Tarif = () => {
  const tariff = ALL_DATA.useTariff();
  // const params = useParams()
  const { languageChange } = useContext(LanguageContext);

  if (tariff.isLoading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Tariff</title>
        <meta name="description" content="dachi v gorax Tariff page" />
        <link rel="canonical" href="https://dachivgorax.uz/tarif" />
      </Helmet>

      <div className="container">
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
    </>
  );
};

export default Tarif;

import React, { useContext } from "react";
import { TariffPageLanguage } from "../../configs/language";
import { LanguageContext } from "../../helper/languageContext";
import Tariff from "../../Modals/Tariff";

const TarifItem = ({ el, i, tariffLength, serviceCode }) => {
  const { languageChange } = useContext(LanguageContext);
  return (
    <React.Fragment key={el.id}>
      <div className="tarif-cards">
        <div className={i >= 3 ? "tarif-card mt-4" : "tarif-card"}>
          <p className="tarif-name">{serviceCode}</p>
          <div className="tarif-date1">
            {el.days} <br /> {TariffPageLanguage.day[languageChange]}
          </div>
          <p className="tarif-text">{el.description}</p>
          <Tariff tariff={el} id={el.id} />
        </div>
        <div
          className={
            tariffLength === i + 1 || i === 2
              ? "d-none"
              : "tarif-line"
          }
        ></div>
      </div>
    </React.Fragment>
  );
};

export default TarifItem;

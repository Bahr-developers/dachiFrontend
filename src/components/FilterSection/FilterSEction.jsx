import { useContext } from "react";
import DachaCard from "../DachaCards/DachaCard";
import DachaMiniCard from "../DachaMiniCard/DachaMiniCard";
import "./FilterSection.css";
import { LanguageContext } from "../../helper/languageContext";
import { FilterSectionLeng, notPlace } from "../../configs/language";

function FilterSEction({ cottageFilter, filter }) {
  const cottage = cottageFilter;
  // useContext language
  const { languageChange } = useContext(LanguageContext);

  if(filter.place!=="" && !cottageFilter.data?.length){
    return <div className="container">
      <h2 className="dacha-top-filter">
          {FilterSectionLeng[languageChange]}
      </h2>
      <p className="text-danger">{notPlace[languageChange]} 😔</p>
    </div>
  }

  return (
    <div className={cottage?.data?.length ? "container" : "d-none"}>
      <div className="dacha-filter">
        <h2 className="dacha-top-filter">
          {FilterSectionLeng[languageChange]}
        </h2>
        {cottage.data?.length ? (
          <div className="dacha-cards">
            {cottage.data?.length &&
              cottage.data
                .filter((el) => el.cottageStatus === "confirmed")
                .map((e) => {
                  return <DachaCard key={e.id} cottage={e} btn="Подробное" />;
                })}

            {cottage.data?.length &&
              cottage.data
                .filter((el) => el.cottageStatus === "confirmed")
                .map((e) => {
                  return <DachaMiniCard key={e.id} cottage={e} />;
                })}
          </div>
        ) : (
          <>
            <div className="noneFavoriteCart my-1 border-warning border">
              <p className="emptyText">cottage not found</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FilterSEction;

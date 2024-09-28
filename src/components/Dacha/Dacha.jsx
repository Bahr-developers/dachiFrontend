import "./Dacha.css";

import DachaCard from "../DachaCards/DachaCard";
import DachaMiniCard from "../DachaMiniCard/DachaMiniCard";
import { ALL_DATA } from "../../Query/get_all";
import { RecamudetLeng,  showMoreInfo } from "../../configs/language";
import { useContext, useState } from "react";
import { LanguageContext } from "../../helper/languageContext";

const Dacha = () => {
  const [count, setCount] = useState(6)
  const { languageChange } = useContext(LanguageContext);
  const cottages = ALL_DATA.useCottageRecommended()?.data
  
  const cottage = cottages?.slice(0,count)
  console.log(cottage);
  
  return (
    <div className="container">
      <div className="dacha">
        <h2 className="dacha-top">{RecamudetLeng[languageChange]}</h2>

        <div className="dacha-cards">
          {cottage?.length &&
            cottage
              .filter((el) => el.cottage.cottageStatus === "confirmed")
              .map((e) => {
                return <DachaCard key={e.cottage.id} cottage={e.cottage} />;
              })}

          {cottage?.length &&
            cottage
              .filter((el) => el.cottage.cottageStatus === "confirmed")
              .map((e) => {
                return <DachaMiniCard key={e.cottage.id} cottage={e.cottage} />;
              })}
        </div>
      </div>
      <button className={count<=cottages?.length+1 ? "d-block show-more":"d-none"} onClick={()=>setCount(count+6)}>{showMoreInfo[languageChange]}</button>
    </div>
  );
};

export default Dacha;

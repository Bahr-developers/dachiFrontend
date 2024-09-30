import { useContext } from "react";
import { ALL_DATA } from "../../Query/get_all";
import { LanguageContext } from "../../helper/languageContext";
import { RecamudetLeng } from "../../configs/language";
import DachaCard from "../../components/DachaCards/DachaCard";
import DachaMiniCard from "../../components/DachaMiniCard/DachaMiniCard";
import { useParams } from "react-router-dom";


const RecommenedDachi = () => {
    const { languageChange } = useContext(LanguageContext);
    const params = useParams()
    const cottage = ALL_DATA.useCottageTariffTop(params?.id)?.data  

    return (
            <div className="container">
                <div className="dacha">
                    <h2 className="dacha-top">{RecamudetLeng[languageChange]}</h2>

                    <div className="dacha-cards">
                    {cottage?.length &&
                        cottage
                        .filter((el) => el.cottageStatus === "confirmed")
                        .map((e) => {
                            return <DachaCard key={e.id} cottage={e} />;
                        })}

                    {cottage?.length &&
                        cottage
                        .filter((el) => el.cottageStatus === "confirmed")
                        .map((e) => {
                            return <DachaMiniCard key={e.id} cottage={e} />;
                        })}
                    </div>
                </div>
            </div>
    );
};

export default RecommenedDachi;
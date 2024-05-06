import { useParams } from "react-router-dom";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import { ALL_DATA } from "../../Query/get_all";
import DachaCard from "../../components/DachaCards/DachaCard";
import DachaMiniCard from "../../components/DachaMiniCard/DachaMiniCard";
import "./Vacation.css";
import { Helmet } from "react-helmet-async";
import BreacdCrumbs from "../../components/BreadCrumbs/BreacdCrumbs";
import Loader from "../../components/Loader/Loader";

function Vacation() {
  const params = useParams();
  const cottages = ALL_DATA.useCottageByPlace(params?.id);
  const place = ALL_DATA.usePlace();
  const placeName = place?.data?.find((e) => e.id === params?.id).name;

  if (cottages.isLoading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Vacation</title>
        <meta name="description" content="cottage places" />
        <link rel="canonical" href="/vacation" />
      </Helmet>
      <div className="container">
        <BreacdCrumbs />
        <div className="favorite">
          <h2 className="favorite-header">{placeName}</h2>
          {cottages?.data?.length ? (
            <>
              <div className="place-card-sort-big">
                {cottages?.data?.length &&
                  cottages.data.map((e) => {
                    return <DachaCard key={e.id} cottage={e} btn="Подробное" />;
                  })}
              </div>

              <div className="place-card-mini-sort">
                {cottages?.data?.length &&
                  cottages.data.map((e) => {
                    return <DachaMiniCard key={e.id} cottage={e} />;
                  })}
              </div>
            </>
          ) : (
            <div className="nonePlaceCart border-warning border">
              <p className="p-0 m-0">Bu joylashuvda dacha yoq</p>
            </div>
          )}
        </div>
        <MiniNaw />
      </div>
    </>
  );
}

export default Vacation;

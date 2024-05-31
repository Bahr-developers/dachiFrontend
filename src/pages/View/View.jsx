import "./View.css";

import { useParams } from "react-router-dom";
import { ALL_DATA } from "../../Query/get_all";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import Loader from "../../components/Loader/Loader";

import { useContext } from "react";

import BreacdCrumbs from "../../components/BreadCrumbs/BreacdCrumbs";
import { Helmet } from "react-helmet-async";
import Dacha from "../../components/Dacha/Dacha";
import { LanguageContext } from "../../helper/languageContext";
import { ViewLanguage, ViewPageLanguage } from "../../configs/language";
import ViewComforts from "./ViewComforts";
import ViewStars from "./ViewStars";
import VIewSwiper from "./VIewSwiper";
import ViewPhone from "./ViewPhone";

const View = () => {
  const { id } = useParams();

  const cottage = ALL_DATA.useCottage();
  const cottageView = cottage?.data?.find((e) => e.id === id);

  const childImage = [];

  cottageView?.images?.forEach((e) => {
    if (!e.isMainImage) {
      childImage.push(e);
    }
  });

  // get Language
  const { languageChange } = useContext(LanguageContext);

  if (cottage.isLoading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Cottage</title>
        <meta name="description" content="single cottage page" />
        <link rel="canonical" href="/view" />
      </Helmet>

      <div className="viewWrapper mb-2">
        <div className="container">
          <BreacdCrumbs />
          <div className="view">
            <h1 className="view-name">{cottageView?.name}</h1>              
            <VIewSwiper cottageView={cottageView} />
            <ViewPhone cottageView={cottageView} />
            <div className="view-main"> 
              <p className="view-location">
                {cottageView?.region?.name} {ViewLanguage[languageChange]}, {cottageView?.place?.name}
              </p>
              
              <ViewStars cottageView={cottageView} />                           
              <h3 className="view-h">
                {ViewPageLanguage.aboutCottage[languageChange]}
              </h3>
              <pre className="view-p">{cottageView?.description}</pre>
            </div>
            <div className="mb-5">
              <p className="view-facility-header">
                {ViewPageLanguage.allComfort[languageChange]}
              </p>
              <ViewComforts cottageView={cottageView} />
            </div>
          </div>
        </div>
        <MiniNaw />
      </div>
      <div className="mt-5">
        <Dacha />
      </div>
    </>
  );
};

export default View;

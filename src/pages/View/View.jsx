import "./View.css";

import { useParams } from "react-router-dom";
import { ALL_DATA } from "../../Query/get_all";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import Loader from "../../components/Loader/Loader";

import { useContext, useEffect, useState } from "react";

import BreacdCrumbs from "../../components/BreadCrumbs/BreacdCrumbs";
import { Helmet } from "react-helmet-async";
import { LanguageContext } from "../../helper/languageContext";
import { ViewLanguage, ViewPageLanguage } from "../../configs/language";
import ViewComforts from "./ViewComforts";
import ViewStars from "./ViewStars";
import VIewSwiper from "./VIewSwiper";
import ViewPhone from "./ViewPhone";
import RecommenedDachi from "./RecommenedDachi";
import { FaArrowUp } from "react-icons/fa6";

const View = () => {
  const { id } = useParams();
  const [isTop, setIsTop] = useState(false)

  const cottage = ALL_DATA.useCottage();
  const cottageView = cottage?.data?.find((e) => e.id === id);
  const childImage = [];
  cottageView?.images?.forEach((e) => {
    if (!e.isMainImage) {
      childImage.push(e);
    }
  });
  const visibleTopBotton = () => {
    if(window.scrollY > 250){
      setIsTop(true)
    }else{
      setIsTop(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  useEffect(() => {
    window.addEventListener('scroll', visibleTopBotton)

    return () => {
      window.removeEventListener('scroll', visibleTopBotton)
    }
  }, [])  

  // get Language
  const { languageChange } = useContext(LanguageContext);

  if (cottage.isLoading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>{cottageView?.name}</title>
        <meta name="description" content={`${cottageView?.name}`} />
        <link rel="canonical" href="/view" />
      </Helmet>

      <div className="viewWrapper mb-2 position-relative">
        <div className="container position-relative">
          <BreacdCrumbs />
          <div className="view">
            <h1 className="view-name">{cottageView?.name}</h1>              
            <VIewSwiper cottageView={cottageView} />
            <div className="view-main">
              <h1 className="view-name">{cottageView?.name}</h1>

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
          <ViewPhone cottageView={cottageView} />
            </div>
          </div>
        </div>
        <MiniNaw />
      </div>
      <div className="mt-5">
        <RecommenedDachi />
      </div>
      <div className="arrowTopUp">
        {isTop && <button onClick={scrollToTop} className="button-top-up"><FaArrowUp size={25}/> </button>}
      </div>
    </>
  );
};

export default View;

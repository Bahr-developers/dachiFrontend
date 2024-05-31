import "./Services.css";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import { ALL_DATA } from "../../Query/get_all";
import { Helmet } from "react-helmet-async";
import BreacdCrumbs from "../../components/BreadCrumbs/BreacdCrumbs";
import Loader from "../../components/Loader/Loader";
import { useContext } from "react";
import { LanguageContext } from "../../helper/languageContext";
import { ServicesPageLanguage } from "../../configs/language";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const services = ALL_DATA.useServices();
  const { languageChange } = useContext(LanguageContext);

  if (services.isLoading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>Services</title>
        <meta name="description" content="dachi v gorax Services page" />
        <link
          rel="canonical"
          href="https://dachivgorax.uz/home/profile/services"
        />
      </Helmet>

      <div className="container">
        <BreacdCrumbs />
        <h2 className="mt-3">
          {ServicesPageLanguage.mainTitle[languageChange]}
        </h2>
        <div className="services-wrap">
          {services.data?.length &&
            services.data.map((el) => <ServiceItem key={el.id} el={el} />)}
        </div>
      </div>
      <MiniNaw />
    </>
  );
};

export default Services;

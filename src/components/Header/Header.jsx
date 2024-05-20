import "./Header.css";
import Search from "../../assets/images/search.svg";
import MiniSearch from "../../assets/images/mini-search.svg";

import { ALL_DATA } from "../../Query/get_all";
import { useContext, useState } from "react";
import FilterSEction from "../FilterSection/FilterSEction";
import { FilterLeng } from "../../configs/language";
import { LanguageContext } from "../../helper/languageContext";
import HeaderSwiper from "./HeaderSwiper";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const cottageType = ALL_DATA.useCottageType()?.data;
  const place = ALL_DATA.usePlace()?.data;

  const [filter, setFilter] = useState({
    place: "",
    type: "",
    price: "",
  });

  const cottageFilter = ALL_DATA.useCottageFilter(filter);

  const handleFilterCottage = (e) => {
    e.preventDefault();
    setFilter({
      place: e.target.place.value,
      type: e.target.type.value,
      price: e.target.price.value,
    });
  };

  // useContext
  const { languageChange } = useContext(LanguageContext);

  const [showModal, setShowModal] = useState(false);

  const closeModalOutlane = (e) => {
    if (e.target.classList[0] === "activeFilterModal") {
      setShowModal(false);
    }
  };

  return (
    <>
      <header onClick={closeModalOutlane} className="header">
        <div className={showModal ? "activeFilterModal" : ""}></div>
        <HeaderSwiper />
        <form className="header-menu" onSubmit={handleFilterCottage}>
          <div className="header-inner">
            <div className="header-inner-box">
              <p className="header-top">{FilterLeng[languageChange].place}</p>
              <select className="header-select-one" name="place" id="place">
                {place?.length &&
                  place.map((el) => (
                    <option key={el.id} value={el.id}>
                      {el.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="header-inner-box">
              <p className="header-top">{FilterLeng[languageChange].tip}</p>
              <select className="header-select-two" name="type" id="dacha">
                {cottageType?.length &&
                  cottageType.map((el) => (
                    <option key={el.id} value={el.id}>
                      {el.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="header-inner-box">
              <p className="header-top-usd">
                {FilterLeng[languageChange].price}
              </p>
              <input
                className="header-nums"
                type="number"
                name="price"
                placeholder="400$"
              />
            </div>
          </div>
          <button
            onClick={() => setShowModal(false)}
            type="submit"
            className="header-search btn bg-success rounded-pill p-3"
          >
            <img
              className="mini-search"
              src={MiniSearch}
              width="22.99"
              height="22.97"
              alt="seach"
            />
            <img
              className="search-img"
              src={Search}
              width="34.49"
              height="34.45"
              alt="search"
            />
          </button>
        </form>

        <HeaderSearch
          place={place}
          cottageType={cottageType}
          handleFilterCottage={handleFilterCottage}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </header>

      <FilterSEction filter={filter} cottageFilter={cottageFilter} />
    </>
  );
};

export default Header;

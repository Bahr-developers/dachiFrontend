import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FilterLeng } from "../../configs/language";
import { useContext } from "react";
import { LanguageContext } from "../../helper/languageContext";

import Search from "../../assets/images/search.svg";
import MiniSearch from "../../assets/images/mini-search.svg";

const HeaderSearch = ({
  place,
  cottageType,
  handleFilterCottage,
  setShowModal,
  showModal,
}) => {
  const { languageChange } = useContext(LanguageContext);
  return (
    <>
      <button
        onClick={() => setShowModal(!showModal)}
        className="mini-search-icon"
      >
        <FaSearch size={23} />
      </button>

      <div className={showModal ? "modal-filter" : "close-filter"}>
        <div className="modal-header-search mb-2 position-relative ">
          <h5
            className="modal-title px-2 p-1 text-start"
            id="staticBackdropSearchLabel"
          >
            Filter
          </h5>
          <button
            style={{ backgroundColor: "inherit" }}
            className="border-0 text-light px-2 position-absolute top-0 end-0"
            onClick={() => setShowModal(false)}
          >
            <IoCloseSharp size={23} />
          </button>
        </div>
        <form className="px-3" onSubmit={handleFilterCottage}>
          <div className="header-inner-mini">
            <div className="header-inner-box-mini">
              <p className="header-top-mini">
                {FilterLeng[languageChange].place}:{" "}
              </p>
              <select className="header-select-one" name="place" id="place">
                {place?.length &&
                  place.map((el) => {
                    return (
                      <option key={el.id} value={el.id}>
                        {el.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="header-inner-box-mini">
              <p className="header-top-mini">
                {FilterLeng[languageChange].tip}:{" "}
              </p>
              <select className="header-select-two" name="type" id="dacha">
                {cottageType?.length &&
                  cottageType.map((el) => {
                    return (
                      <option key={el.id} value={el.id}>
                        {el.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div className="d-flex position-relative align-items-start justify-content-between">
              <div className="header-inner-box-mini">
                <p className="header-top-usd">
                  {FilterLeng[languageChange].price}:
                </p>
                <input
                  className="header-nums"
                  type="number"
                  name="price"
                  placeholder="400$"
                />
              </div>
              <button
                onClick={() => setShowModal(false)}
                type="submit"
                className="header-search btn bg-success rounded-pill p-2 border-0 border-0 "
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
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default HeaderSearch;

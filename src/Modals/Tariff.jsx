import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useRef, useState } from "react";
import { QUERY_KEYS } from "../Query/query-keys";
import toastify from "../utils/toastify";
import { ALL_DATA } from "../Query/get_all";
import { TariffModalLanguage, TariffPageLanguage } from "../configs/language";
import { LanguageContext } from "../helper/languageContext";
import { RiCloseLargeLine } from "react-icons/ri";
import { OrderUtils } from "../utils/order.utils";

const Tariff = (props) => {
  const userCottage = ALL_DATA.useCottageUserId();
  const [isOpen, setIsOpen] = useState(false);
  const activete = useRef();
  const queryClient = useQueryClient();

  const addCottage = useMutation({
    mutationFn: OrderUtils.activeOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.tariff] });
      toastify.successMessage(TariffModalLanguage[languageChange]);
      setIsOpen(false);
    },
    onError: (err) => {
      toastify.errorMessage(err?.response?.data?.message?.message);
      console.error(err);
    },
  });

  const handleCottage = (e) => {
    e.preventDefault();
    addCottage.mutate({
      cottageId: e.target.tariff_cottage.value,
      tariffId: props.tariff.id,
    });
    activete.current.classList.remove("disabled");
  };

  const closeModalTarifOutline = (e) => {
    if (e.target.classList[0] === "modal-wrap") {
      setIsOpen(false);
    }
  };

  const { languageChange } = useContext(LanguageContext);

  return (
    <div onClick={closeModalTarifOutline}>
      <button
        className="tarif-btn border-0"
        onClick={() => setIsOpen(true)}
        type="button"
        data-bs-target={`#editCottageModal${props.id}`}
      >
        {TariffPageLanguage.active[languageChange]} {props.tariff.price}$
      </button>

      <div
        className={isOpen ? "" : "d-none"}
        id={`editCottageModal${props.id}`}
        tabIndex="-1"
        aria-labelledby={`editCottageModal${props.id}Label`}
        aria-hidden="true"
      >
        <span className="modal-wrap"></span>
        <div className="tariff-modal-wrap modal-dialog text-light p-3">
          <div className="modal-content mx-auto">
            <div className="tarif-modal-head position-relative">
              <h2
                id={`editCottageModal${props.id}Label`}
                className="text-light fs-1 text-start"
              >
                {TariffPageLanguage.mainTitle[languageChange]}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="close-btn-modal btn border-0 d-block text-light"
              >
                <RiCloseLargeLine size={25}/>
              </button>              
            </div>
            <div className="tarif-info text-light mx-auto text-center mt-3">
                <p className="tarif-day bg-light text-center text-dark fs-2 mx-auto rounded-5 w-75">
                  {props.tariff.days} {TariffPageLanguage.day[languageChange]}
                </p>
                <p className="fs-5 fw-bold text-center">
                  {TariffPageLanguage.price[languageChange]}:{" "}
                  {props.tariff.price}$
                </p>
              </div>
            <hr className="text-light" />
            <h5 className="px-3">
              {TariffPageLanguage.selectCottage[languageChange]}
            </h5>
            <form onSubmit={handleCottage}>
              <select
                onChange={() => activete.current.classList.remove("disabled")}
                defaultValue="default"
                name="tariff_cottage"
                className="mb-3 w-100 w-lg-50  mx-auto  form-select form-select-sm mt-3"
              >
                <option value="default">
                  {TariffPageLanguage.selectCottage[languageChange]}
                </option>
                {userCottage.data?.length &&
                  userCottage.data.map((el) => (
                    <option key={el.id} value={el.id} className="">
                      {el.name}
                    </option>
                  ))}
              </select>
              <button
                type="submit"
                ref={activete}
                className="btn disabled btn-success w-50  mx-auto d-block fw-bold "
              >
                {TariffPageLanguage.Activite[languageChange]}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tariff;

import { useContext } from "react";
import { ALL_DATA } from "../../Query/get_all";
import { LanguageContext } from "../../helper/languageContext";

const ToggleLanguage = () => {
  const defaultLang = localStorage.getItem("language");
  const language = ALL_DATA.useLanguage();
  const { toggleLanguage } = useContext(LanguageContext);
  return (
    <select
      className="select-three form-select"
      name="language"
      onChange={toggleLanguage}
    >
      {language.data?.length &&
        language.data.map((e) => {
          if (e.code === defaultLang) {
            return (
              <option key={e.id} selected value={e.code}>
                {e.code}
              </option>
            );
          }
          return (
            <option key={e.id} value={e.code}>
              {e.code}
            </option>
          );
        })}
    </select>
  );
};

export default ToggleLanguage;

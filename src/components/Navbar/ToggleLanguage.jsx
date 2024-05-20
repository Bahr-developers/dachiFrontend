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
      value={defaultLang}
    >
      {language.data?.length &&
        language.data.map((e) => {
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

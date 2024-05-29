import { useContext } from "react";
import { NavLeng } from "../../configs/language";
import { LanguageContext } from "../../helper/languageContext";

const SocialLinks = () => {
  const { languageChange } = useContext(LanguageContext);
  const jumpLink = (e) => {
    window.location = e.target.value;
  };
  return (
    <select
      className="select-two form-select"
      name="social"
      id="social"
      onChange={jumpLink}
      defaultValue={NavLeng[languageChange].set}
    >
      <option value="socials">{NavLeng[languageChange].set}</option>
      <option value="https://t.me/dachi_v_gorax">Telegram</option>
      <option value="https://facebook.com">Facebook</option>
      <option value="https://instagram.com">Instagram</option>
      <option value="https://youtube.com">Youtube</option>
    </select>
  );
};

export default SocialLinks;

import Dacha3 from "../../assets/images/dacha3.png";
import AddImg from "../../assets/images/add-img.svg";
import "./AddNew.css";
import { useContext, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IMG_BASE_URL } from "../../constants/img.constants";
import { cottageUtils } from "../../utils/cottage.utils";
import { authUtils } from "../../utils/auth.utils";
import { ALL_DATA } from "../../Query/get_all";
import MiniNaw from "../../components/MiniNaw/MiniNaw";
import toastify from "../../utils/toastify";
import { LanguageContext } from "../../helper/languageContext";

import BreacdCrumbs from "../../components/BreadCrumbs/BreacdCrumbs";

import { Helmet } from "react-helmet-async";
import { AddNewPageLanguage } from "../../configs/language";
import { QUERY_KEYS } from "../../Query/query-keys";
import { LazyLoadImage } from "react-lazy-load-image-component";

// Images transform getbase64Full
async function getBase64Full(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
  });
}

const AddNew = () => {
  const mainImage = useRef(null);

  const childImagesWrapper = useRef(null);

  const [cottageInfo, setCottageInfo] = useState({
    dachaType: [],
    response: [],
  });

  const [cottageComforts, setcottageComforts] = useState({
    comforts: [],
    response: [],
  });

  const queryClient = useQueryClient();

  const region = ALL_DATA.useRegion();

  const place = ALL_DATA.usePlace();

  const cottageType = ALL_DATA.useCottageType();
  const comforts = ALL_DATA.useComforts();

  const cottage = useMutation({
    mutationFn: cottageUtils.postCottage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.cottages] });
      toastify.successMessage(
        AddNewPageLanguage.cottageSuccess[languageChange]
      );
    },
    onError: (err) => {
      console.log(err, "err");
      if (err?.response?.status === 406) {
        authUtils.refreshAuth();
      }
      toastify.errorMessage(AddNewPageLanguage.cottageError[languageChange]);
    },
  });

  const handlChoseCottageType = (e) => {
    const { value, checked } = e.target;
    const { dachaType } = cottageInfo;
    if (checked) {
      setCottageInfo({
        dachaType: [...dachaType, value],
        response: [...dachaType, value],
      });
    } else {
      setCottageInfo({
        dachaType: dachaType.filter((e) => e !== value),
        response: dachaType.filter((e) => e !== value),
      });
    }
  };

  const handleCottageComforts = (e) => {
    const { value, checked } = e.target;
    const { comforts } = cottageComforts;
    if (checked) {
      setcottageComforts({
        comforts: [...comforts, value],
        response: [...comforts, value],
      });
    } else {
      setcottageComforts({
        comforts: comforts.filter((e) => e !== value),
        response: comforts.filter((e) => e !== value),
      });
    }
  };

  const handlCottage = async (e) => {
    e.preventDefault();

    let images = [];
    for (let i = 0; i < e.target.childimg.files.length; i++) {
      images.push(e.target.childimg.files[i]);
    }

    cottage.mutate({
      name: e.target.cottagename.value,
      images: images,
      mainImage: e.target.mainImage.files[0],
      placeId: e.target.place.value,
      regionId: e.target.region.value,
      price: +e.target.price.value,
      priceWeekend: +e.target.priceweekend.value,
      cottageType: cottageInfo.response,
      comforts: cottageComforts.response,
      description: e.target.description.value,
      lattitude: "" || undefined,
      longitude: "" || undefined,
    });

    childImagesWrapper.current.innerHTML = "";
    mainImage.current.setAttribute("src", Dacha3);
    e.target.reset();
  };

  const handleMainImage = async (e) => {
    const mainImgUrl = await getBase64Full(e.target.files[0]);
    mainImage.current.classList.remove("d-none");
    mainImage.current.setAttribute("src", mainImgUrl);
  };

  const handlmultipleImg = async (e) => {
    const images = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(await getBase64Full(e.target.files[i]));
    }
    for (const image of images) {
      childImagesWrapper.current.insertAdjacentHTML(
        "beforeend",
        `<img src=${image} width="100" height="100" alt="child image" className="overflow-hidden"/>`
      );
    }
  };

  // get Language
  const { languageChange } = useContext(LanguageContext);

  return (
    <>
      <Helmet>
        <title>Add Cottage</title>
        <meta name="description" content="Add cottage page" />
        <link rel="canonical" href="https://dachivgorax.uz/home/add-new" />
      </Helmet>

      <div className="container">
        <BreacdCrumbs />
        <div className="addnew">
          <h3 className="addnew-header">
            {AddNewPageLanguage.maintitle[languageChange]}
          </h3>
          <form onSubmit={handlCottage}>
            <div className="addnew-imgs">
              <div className="addnew-box">
                <label className="addnew-img-bg label-input-file">
                  <input
                    type="file"
                    accept="image/*"
                    name="mainImage"
                    className="input-file"
                    onChange={handleMainImage}
                  />
                  <p className="addnew-img-text">
                    {AddNewPageLanguage.mainPhoto[languageChange]}
                  </p>
                </label>
                <img
                  ref={mainImage}
                  className="addnew-img"
                  src={Dacha3}
                  alt="add"
                />
              </div>
              <div className="addnew-add">
                <label className="label-input-file">
                  <input
                    type="file"
                    name="childimg"
                    multiple
                    accept="image/*"
                    className="input-file"
                    onChange={handlmultipleImg}
                  />
                  <img src={AddImg} alt="add" />
                  <p className="addnew-add-text">
                    {AddNewPageLanguage.addPhoto[languageChange]}
                  </p>
                </label>
              </div>
              <div ref={childImagesWrapper} className="image-child-wrap "></div>
            </div>

            <div>
              <h3 className="addnew-header">
                {AddNewPageLanguage.typeCottage[languageChange]}
              </h3>
              <h5>{AddNewPageLanguage.cottageName[languageChange]}</h5>
              <input
                type="text"
                name="cottagename"
                className="add-new-title-main my-4 form-input"
                placeholder={AddNewPageLanguage.name[languageChange]}
              />
              <div className="wrap-region-place">
                <div className="mini-wrap-select">
                  <h3 className="addnew-label mb-3">
                    {AddNewPageLanguage.region[languageChange]}
                  </h3>
                  <select
                    name="region"
                    className="addnew-select form-select w-100"
                  >
                    {region.data?.length &&
                      region.data.map((e) => (
                        <option key={e.id} value={e.id}>
                          {e.name}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="mini-wrap-select">
                  <h3 className="addnew-label mb-3">
                    {AddNewPageLanguage.Place[languageChange]}
                  </h3>
                  <select
                    name="place"
                    className="addnew-select  d-block form-select w-100"
                  >
                    {place.data?.length &&
                      place.data.map((e) => (
                        <option key={e.id} name="place" value={e.id}>
                          {e.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              <h5>{AddNewPageLanguage.Price[languageChange]}</h5>
              <div className="price-wrap  d-flex gap-2 mb-4">
                <input
                  type="number"
                  name="price"
                  className="form-control w-100"
                  placeholder={AddNewPageLanguage.Price[languageChange]}
                />
                <input
                  type="number"
                  name="priceweekend"
                  className="form-control w-100"
                  placeholder={AddNewPageLanguage.weekendPrice[languageChange]}
                />
              </div>

              <h3 className="addnew-label mb-3">
                {AddNewPageLanguage.dachaType[languageChange]}
              </h3>
              <div className="addnew-inner">
                {cottageType.data?.length &&
                  cottageType.data.map((e) => (
                    <label key={e.id} className="addnew-inner-check">
                      <input
                        className="form-check-input checkboxComfort"
                        type="checkbox"
                        value={e.id}
                        name="cottagetype"
                        onChange={handlChoseCottageType}
                      />
                      <span>{e.name}</span>
                    </label>
                  ))}
              </div>
            </div>

            <h3 className="addnew-header">
              {AddNewPageLanguage.comforts[languageChange]}
            </h3>

            <div className="addnew-objects">
              {comforts.data?.length &&
                comforts.data.map((e) => (
                  <label key={e.id} className="addnew-object">
                    <input
                      className="form-check-input checkboxComfort"
                      type="checkbox"
                      value={e.id}
                      onChange={handleCottageComforts}
                    />
                    <LazyLoadImage
                      className="bg-white rounded-1"
                      width={20}
                      height={20}
                      src={`${IMG_BASE_URL}${e.image}`}
                      alt="img"
                    />
                    <p className="addnew-object-text">{e.name}</p>
                  </label>
                ))}
            </div>

            <h3 className="addnew-header">
              {AddNewPageLanguage.description[languageChange]}
            </h3>
            <textarea
              type="text form-control"
              name="description"
              className="addnew-message"
              placeholder={AddNewPageLanguage.shortDescription[languageChange]}
            />
            <button type="submit" className="soxranit">
              {AddNewPageLanguage.save[languageChange]}
            </button>
          </form>
        </div>
      </div>
      <MiniNaw />
    </>
  );
};

export default AddNew;

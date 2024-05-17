import { LazyLoadImage } from "react-lazy-load-image-component";
import { IMG_BASE_URL } from "../../constants/img.constants";

const ViewComforts = ({ cottageView }) => {
  return (
    <div className="view-facilitys">
      {cottageView?.comforts?.length &&
        cottageView.comforts.map((e) => (
          <div key={e.id} className="view-facility1">
            <LazyLoadImage
              src={`${IMG_BASE_URL}${e.image}`}
              alt="img"
              effect="blur"
              width={30}
              height={30}
            />
            <p className="view-facility-text">{e.name}</p>
          </div>
        ))}
    </div>
  );
};

export default ViewComforts;

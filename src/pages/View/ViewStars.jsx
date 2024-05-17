import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ViewStars = ({ cottageView }) => {
  return (
    <div className="view-stars">
      {Array.from(
        {
          length: Math.floor(cottageView?.rating),
        },
        (_, i) => (
          <FaStar key={i} size={25} className="text-warning" />
        )
      )}
      {Array.from(
        {
          length: 5 - Math.floor(cottageView?.rating),
        },
        (_, i) => (
          <CiStar size={28} key={i} className="text-warning" />
        )
      )}
    </div>
  );
};

export default ViewStars;

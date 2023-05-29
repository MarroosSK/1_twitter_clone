//icons
import { BsFillPersonFill } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const LeftPersonBox = () => {
  return (
    <div className="person__box">
      {/* left */}
      <div className="person__box_left">
        <div className="person__box_pic">
          <BsFillPersonFill />
        </div>
        <div className="person__box_text">
          <span>marroos-svk</span>
          <span>@MarroosSvk</span>
        </div>
      </div>
      {/* right */}
      <div className="person__box_rigt">
        <BiDotsHorizontalRounded />
      </div>
    </div>
  );
};

export default LeftPersonBox;

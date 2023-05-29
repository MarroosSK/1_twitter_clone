import { BiDotsHorizontalRounded } from "react-icons/bi";
import { trends_right } from "../../helpers/data";

const RightTrends = () => {
  return (
    <div className="trends">
      <h5>Trends for you</h5>
      {trends_right.map((trend, index) => {
        return (
          <div className="trends_box" key={index}>
            <div className="trends_box_titles">
              <span>{trend.title1}</span>
              <span>{trend.title2}</span>
              <span>{trend.title3}</span>
            </div>
            <BiDotsHorizontalRounded />
          </div>
        );
      })}
    </div>
  );
};

export default RightTrends;

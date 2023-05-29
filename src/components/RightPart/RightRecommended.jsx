import { profiles_right } from "../../helpers/data";

const RightRecommended = () => {
  return (
    <div className="recommendations">
      <h5>You might like</h5>
      {profiles_right.map((unit, index) => (
        <div className="icons_box" key={index}>
          <div className="icon_box_name">
            <img src={unit.profile_photo} alt="" className="img_icons" />
            <span>{unit.profile_name}</span>
            <span>{unit.profile_name_grey}</span>
          </div>
          <button className="btn_icons">Follow</button>
        </div>
      ))}
      <button className="btn_show_more">Show More</button>
    </div>
  );
};

export default RightRecommended;

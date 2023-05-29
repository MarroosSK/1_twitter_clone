import { icons_left } from "../../helpers/data";
import "../../pages/Left/Left.css"

const LeftBottom = () => {
  return (
    <div className="bottom_left">
      {icons_left.map((icon, index) => (
        <div className="bottom_left_icons" key={index}>
          <div className="icon">{icon.icon_name}</div>
          <div className="icon_title">{icon.title}</div>
        </div>
      ))}
    </div>
  );
};

export default LeftBottom;

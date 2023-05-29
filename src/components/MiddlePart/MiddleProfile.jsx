import profile_photo from "../../assets/pngwing.com.png";
import { BiDotsHorizontalRounded, BiEnvelope } from "react-icons/bi";

const MiddleProfile = () => {
  return (
    <div className="middle_profile">
      {/* left */}
      <div className="middle_profile_left">
        <img src={profile_photo} alt="profile_anonym" />
      </div>
      {/* right */}
      <div className="middle_profile_right">
        <div className="middle_profile_right_icons">
          <BiDotsHorizontalRounded />
          <BiEnvelope />
        </div>
        <button className="middle_btn">Follow</button>
      </div>
    </div>
  );
};

export default MiddleProfile;

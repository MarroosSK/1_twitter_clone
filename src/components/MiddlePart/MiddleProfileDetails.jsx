import {TbPill} from "react-icons/tb"
import {SlCalender} from "react-icons/sl"

const MiddleProfileDetails = () => {
  return (
    <div className="middle_profile_details">
      <div className="middle_profile_details_name">
        <h5>marroos-svk</h5>
        <h5>@Marroos-svk</h5>
      </div>

      <div className="middle_profile_details_text">
        <p>
          Did you ever hear the story of Darth Sidious, the Palpatine? I thought
          not.
        </p>
      </div>

      <div className="middle_profile_details_links">
        <div>
          <TbPill />
          <span>maros1chmel@gmail.com</span>
        </div>
        <div>
          <SlCalender />
          <span>Joined December 2022</span>
        </div>
      </div>
      <div className="middle_profile_details_numbers">
        <span>
          <b>258</b> Following
        </span>
        <span>
          <b>485</b> Followers
        </span>
      </div>
      <div className="middle_profile_details_end">
        <span>That&apos;s it</span>
      </div>
    </div>
  );
};

export default MiddleProfileDetails;

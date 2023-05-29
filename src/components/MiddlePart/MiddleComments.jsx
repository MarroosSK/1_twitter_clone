import profile_photo from "../../assets/pngwing.com.png";

const MiddleComments = () => {
  return (
    <div className="middle_comments">
      <img src={profile_photo} alt="my_profile_pic" />
      <div className="middle_comments_text">
        <div className="middle_comments_spans">
          <span>marroos-svk</span>
          <span>@Marroos-svk</span>
          <span>.</span>
          <span>Mar 7</span>
        </div>
        <p>This is my first comment</p>
      </div>
    </div>
  );
};

export default MiddleComments;

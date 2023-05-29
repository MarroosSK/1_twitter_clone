import { SlMagnifier } from "react-icons/sl";

const RightSearch = () => {
  return (
    <div className="right_search">
      <SlMagnifier />
      <input type="text" placeholder="Search Twitter" />
    </div>
  );
};

export default RightSearch;

import { RightRecommended, RightSearch, RightTrends } from "../../components"
//css
import "./Right.css"

const Right = () => {
  return (
    <div className="right">
        <RightSearch/>
        <RightRecommended/>
        <RightTrends/>
    </div>
  )
}

export default Right
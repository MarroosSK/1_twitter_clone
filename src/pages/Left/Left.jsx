//css
import "./Left.css"
import {LeftTop, LeftBottom, LeftButton, LeftPersonBox} from "../../components"

const Left = () => {
  return (
    <div className="left">
        <LeftTop />
        <LeftBottom/>
        <LeftButton/>
        <LeftPersonBox/>
    </div>
  )
}

export default Left
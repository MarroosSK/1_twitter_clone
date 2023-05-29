import { MiddleComments, MiddleImage, MiddleOptions, MiddleProfile, MiddleProfileDetails, MiddleTop } from "../../components"
//css
import "./Middle.css"

const Middle = () => {
  return (
    <div className="middle">
        <MiddleTop/>
        <MiddleImage/>
        <MiddleProfile/>
        <MiddleProfileDetails/>
        <MiddleOptions/>
        <MiddleComments/>
    </div>
  )
}

export default Middle
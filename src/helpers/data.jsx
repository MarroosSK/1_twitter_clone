//react icons
import {BiHomeCircle} from "react-icons/bi"
import {RiHashtag} from "react-icons/ri"
import {GrNotification} from "react-icons/gr"
import {FaRegEnvelope} from "react-icons/fa"
import {BsBookmark} from "react-icons/bs"
import {MdOutlineFeaturedPlayList} from "react-icons/md"
import {CgProfile} from "react-icons/cg"
import {CiCircleMore} from "react-icons/ci"
//images
import user1 from "../assets/user1.png"
import user2 from "../assets/user2.png"
import user3 from "../assets/user3.jpg"


//LEFT SIDE
export const icons_left = [
    {
        icon_name: <BiHomeCircle />,
        title: "Home",
    },
    {
        icon_name: <RiHashtag />,
        title: "Explore",
    },
    {
        icon_name: <GrNotification />,
        title: "Notifications",
    },
    {
        icon_name: <FaRegEnvelope/>,
        title: "Messages",
    },
    {
        icon_name: <BsBookmark />,
        title: "Bookmarks",
    },
    {
        icon_name: <MdOutlineFeaturedPlayList />,
        title: "Lists",
    },
    {
        icon_name: <CgProfile/>,
        title: "Profile",
    },
    {
        icon_name: <CiCircleMore/>,
        title: "More",
    },
]

//RIGHT SIDE
export const profiles_right = [
    {
        profile_photo: user1,
        profile_name: "pixelArt_1",
        profile_name_grey: "@PixelArt_1"
    },
    {
        profile_photo: user2,
        profile_name: "pixelArl_2",
        profile_name_grey: "@PixelArt_2"
    },
    {
        profile_photo: user3,
        profile_name: "pixelArl_3",
        profile_name_grey: "@PixelArt_3"
    },
]

export const trends_right = [
    {
        title1: "Trending in Slovakia",
        title2: "Slovakia",
        title3: "16.1K Tweets",
    },
    {
        title1: "Trending in Europe",
        title2: "France",
        title3: "1.3M Tweets",
    },
    {
        title1: "Trending in Slovakia",
        title2: "Montains",
        title3: "5K Tweets",
    },
    {
        title1: "Trending in Slovakia",
        title2: "Snakes",
        title3: "50K Tweets",
    },
]
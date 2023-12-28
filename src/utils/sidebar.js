import { LuUser2 } from "react-icons/lu";
import { LuUsers2 } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";
import { AiOutlineRise } from "react-icons/ai";
import { AiOutlineDollar } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { Img } from "components";

// Array for sideBar
export const sideBarMenu = [
  {
    icon: LuUser2,

    label: "My Portfolio",
    url: "portfolio",
  },
  {
    icon: LuUsers2,

    label: "My Group",
  },
  {
    icon: FaRegEnvelope,
    label: "Messages",
    url: "messages",
  },
  {
    icon: AiOutlineRise,
    label: "Analytics",
  },
  {
    icon: AiOutlineDollar,
    label: "Pack",
  },
  {
    icon: IoSettingsOutline,
    label: "Settings",
  },
];

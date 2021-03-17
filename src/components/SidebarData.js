import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";

export const SidebarData=[
    {  
        title:"Home",
        path:"/",
        Icon:<AiIcons.AiFillHome />,
        cName:"nav-text",
    },
    {    
        title:"AgeGroup",
        path:"/agegroup",
        Icon:<AiIcons.AiFillInfoCircle />,
        cName:"nav-text",
    },
    {  
        title:"Country",
        path:"/pakistan",
        Icon:<MdIcons.MdRoom />,
        cName:"nav-text",
    },
    {
        title:"Map",
        path:"/map",
        Icon:<FaIcons.FaMap />,
        cName:"nav-text",
    },
    {  
        title:"HealthTip",
        path:"/healthtip",
        Icon:<GiIcons.GiHealthNormal />,
        cName:"nav-text",
    },

]


import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />

      <hr></hr>

      <Sidebar Icon={VideoLibraryIcon} title="Library" />
      <Sidebar Icon={HistoryIcon} title="History" />
      <Sidebar Icon={OndemandVideoIcon} title="Your Videos" />
      <Sidebar Icon={WatchLaterIcon} title="Watch Later" />
      <Sidebar Icon={ThumbUpAltOutlinedIcon} title="Liked Videos" />
      <Sidebar Icon={ExpandMoreOutlinedIcon} title="Show More" />

      <hr></hr>
    </div>
  );
}

export default Sidebar;

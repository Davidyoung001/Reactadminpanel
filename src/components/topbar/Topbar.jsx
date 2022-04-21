import React from 'react';
import "./Topbar.css"
import {NotificationsNone, Language, Settings} from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
        <span className="logo">lamaadmin</span>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
<NotificationsNone/>
<span className="topIconBadge">2</span>
           </div>
           <div className="topbarIconContainer">
<Language/>
<span className="topIconBadge">2</span>
           </div>
           <div className="topbarIconContainer">
<Settings/>
<span className="topIconBadge1"></span>
           </div>
           <img src="https://www.osmpic.com/wp-content/uploads/2019/08/PicsArt_08-03-02.32.17-1024x989.png" alt="" className="topAvatar" />
          </div>
      </div>
    
    </div>
  );
} 

import "./sidebar.css"
import {LineStyle, Timeline, TrendingUp, PersonOutline, Inventory, AttachMoney,BarChart, MailOutline, Forum, ChatBubbleOutline, WorkOutline, Error  } from '@mui/icons-material';
export default function Sidebar() {
  return (
    <div className = 'Sidebar'>
    <div className="sidebarWrapper">
      <div className="sidebarMenu">
        <h3 className ="sidebarTitle"> Dashboard</h3> 
        <ul className = "sidebarList">
          <li className = "sidebarListItem active">
<LineStyle className="sidebarIcon"/>
Home
          </li>
          <li className = "sidebarListItem">
<Timeline className="sidebarIcon"/>
Analytics
          </li>
          <li className= "sidebarListItem">
<TrendingUp className="sidebarIcon"/>
Sales
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className ="sidebarTitle"> Quick Menu</h3> 
        <ul className = "sidebarList">
          <li className = "sidebarListItem">
<PersonOutline className="sidebarIcon"/>
Users
          </li>
          <li className = "sidebarListItem">
<Inventory className="sidebarIcon"/>
Products
          </li>
          <li className= "sidebarListItem">
<AttachMoney className="sidebarIcon"/>
Transactions
          </li>
          <li className= "sidebarListItem">
<BarChart className="sidebarIcon"/>
Reports
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className ="sidebarTitle"> Notification</h3> 
        <ul className = "sidebarList">
          <li className = "sidebarListItem active">
<MailOutline className="sidebarIcon"/>
Mail
          </li>
          <li className = "sidebarListItem">
<Forum className="sidebarIcon"/>
Feedback
          </li>
          <li className= "sidebarListItem">
<ChatBubbleOutline className="sidebarIcon"/>
Messages
          </li>
        </ul>
      </div>
      <div className="sidebarMenu">
        <h3 className ="sidebarTitle"> Staff</h3> 
        <ul className = "sidebarList">
          <li className = "sidebarListItem active">
<WorkOutline className="sidebarIcon"/>
Manage
          </li>
          <li className = "sidebarListItem">
<Timeline className="sidebarIcon"/>
Analytics
          </li>
          <li className= "sidebarListItem">
<Error className="sidebarIcon"/>
Reports
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}

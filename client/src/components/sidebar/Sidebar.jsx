import "./sidebar.css"
import {RssFeed,School,HelpOutline,WorkOutline,Event, Bookmark, PlayCircleFilledOutlined,Group} from "@mui/icons-material"
import { Users } from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"


export default function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                   <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListItemText">Feed</span>
                   </li>
                   <li className="sidebarListItem">
                    <PlayCircleFilledOutlined className="sidebarIcon"/>
                    <span className="sidebarListItemText">Videos</span>
                   </li>
                   <li className="sidebarListItem">
                    <Group className="sidebarIcon"/>
                    <span className="sidebarListItemText">Group</span>
                   </li>
                   <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon"/>
                    <span className="sidebarListItemText">Bookmarks</span>
                   </li>
                   <li className="sidebarListItem">
                    <HelpOutline className="sidebarIcon"/>
                    <span className="sidebarListItemText">Questions</span>
                   </li>
                   <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon"/>
                    <span className="sidebarListItemText">Jobs</span>
                   </li>
                   <li className="sidebarListItem">
                    <Event className="sidebarIcon"/>
                    <span className="sidebarListItemText">Events</span>
                   </li>
                   <li className="sidebarListItem">
                    <School className="sidebarIcon"/>
                    <span className="sidebarListItemText">Courses</span>
                   </li>
                </ul>
                <button className="sidebarBtn" >Show more</button>
                <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                  {Users.map((p)=>(

                      <CloseFriend  key={p.id} user={p}/>
                      )
                      )}
                </ul>
            </div>
        </div>
    )
}
import "./topbar.css"
import { Search, Person,Chat ,Notifications} from '@mui/icons-material/';
import {Link} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext.js"


export default function Topbar() {
const {user} = useContext(AuthContext)

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                <span  className="logo">Facebook</span>
                </Link>
            </div>



            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Seacrh for friend, post or video" className="searchInput" />
                </div>
            </div>



            <div className="topbarRight">


                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>

                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>

                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>

                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">3</span>
                    </div>
                </div>
           <Link to={`/profile/${user.user.username}`}> 
                <img src={user.profilePicture ? PF + user.profilePicture : PF + "Person/noAvatar.jpg"} alt="" className="topbarimage" />
           </Link>
                
            </div>

        </div>
    )
}
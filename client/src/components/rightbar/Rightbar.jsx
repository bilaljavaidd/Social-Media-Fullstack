import "./rightbar.css"
import { Users } from "../../dummyData.js"
import Online from "../online/Online"
import { Home } from "@mui/icons-material";


export default function Rightbar({ user }) {
    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assest/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Uzair </b>and<b> 3 others friends</b>  have a birthday today </span>
                </div>
                <img className="rightbarAd" src="assest/ad.png" alt="" />
                <h4 className="rightBarTitle" >Online Friends</h4>
                <ul className="rightBarFriendlist">

                    {Users.map((u) =>(

                        <Online key={u.id} user={u} />
                        )
                        )}
                </ul>
            </>

        )
    };
    const ProfileRightBar = () => {
        const PF = process.env.REACT_APP_PUBLIC_FOLDER;
        return (
            <>
                <h4 className="rightBarTitle">User Information</h4>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">City:</span>
                        <span className="rightBarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">From:</span>
                        <span className="rightBarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">Realationship:</span>
                        <span className="rightBarInfoValue">{user.relationship === 1 ? "single" : user.relationship === 1 ? "married" : "-"}</span>
                    </div>
                </div>
                <h4 className="rightBarTitle"> User friends</h4>
                <div className="rightBarFollowings">
                    <div className="rightBarFollowing">
                        <img src={`${PF}person/1.jpeg`} alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Bilal</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src={`${PF}person/2.jpeg`} alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Bilal</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src={`${PF}person/6.jpeg`} alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Bilal</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src={`${PF}person/4.jpeg`} alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Bilal</span>
                    </div>
                    <div className="rightBarFollowing">
                        <img src={`${PF}person/5.jpeg`} alt="" className="rightBarFollowingImg" />
                        <span className="rightBarFollowingName">Bilal</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightBar">
            <div className="rightBarWrapper">
                {user ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    )
}
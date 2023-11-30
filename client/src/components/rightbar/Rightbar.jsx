import "./rightbar.css";
import { Users } from "../../dummyData.js";
import Online from "../online/Online";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {Add, Remove} from "@mui/icons-material"
import { Home } from "@mui/icons-material";
// import { AuthContext } from "../../context/AuthContext";



export default function Rightbar({ user }) {
  const [friends, setFriends] = useState([]);
  const {user:currentUser, dispatch} = useContext(AuthContext)
  const [followed, setFollowed] = useState(); 


  



// useEffect(()=>{
//   setFollowed(currentUser.followings.includes(user?.id))
// },[currentUser,user?.id])




useEffect(() => {
  const getFriends = async () => {
    try {
      const friendList = await axios.get(`/users/friends/${currentUser._id}`);
      setFriends(friendList.data);

    } catch (err) {
      console.log(err);
    }
  };
  getFriends();
}, [currentUser._id]);

const handleClick = async ()=>{
  try {
    if(followed){
      await axios.put("/users/"+user._id+"/unfollow",{userId:currentUser._id})
      dispatch({type:"UNFOLLOW", payload:user._id})
    }
    else{
      await axios.put("/users/"+user._id+"/follow",{userId:currentUser._id})
      dispatch({type:"FOLLOW", payload:user._id})
    }
  } catch (error) {
    console.log(error);
  }
  setFollowed(!followed)
}

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="images/gift.png" alt="" />
          <span className="birthdayText">
            <b>Uzair </b>and<b> 3 others friends</b> have a birthday today{" "}
          </span>
        </div>
        <img className="rightbarAd" src="images/ad.png" alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendlist">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
      <>
      {/* {user.username !== currentUser.username && (
        <button className="rightBarFollowButton" onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <Remove/> :  <Add/>}
        </button>
      )} */}
      
        <button className="rightBarFollowButton" onClick={handleClick} >
        {followed ? "Unfollow" : "Follow"}
          {followed ? <Remove/> :  <Add/>}
        </button>
     
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
            <span className="rightBarInfoValue"> <b>Single</b> </span>
            {/* <span className="rightBarInfoValue">{user.relationship === "1" ? "single" : user.relationship === "2" ? "married" : "-"}</span> */}
          </div>
        </div>
        <h4 className="rightBarTitle"> User friends</h4>
        <div className="rightBarFollowings">
        {friends.map((friend) => (
            <Link key={friend}
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightBarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.jpg"
                  }
                  alt=""
                  className="rightBarFollowingImg"
                />
                <span className="rightBarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

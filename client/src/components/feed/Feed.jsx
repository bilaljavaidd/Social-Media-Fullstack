import { useEffect, useState } from "react"
import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from 'axios'



export default function Feed({username}){
    console.log(username, "=== username");
    const [posts , setPosts]= useState([]);


    useEffect(()=>{
   const fetchPosts = async () => {
    try {
        const res = username 
            ? await axios.get("/posts/profile/" + username)
            : await axios.get("/posts/timeline/64f40438581caf9dd9af610d")
        setPosts(res.data);
    } catch (error) {

        console.error("error feed ma hai",error);
        console.log(error.message);
    }
}

       fetchPosts();
    },[username])


    return(
        <div className="feed">

            <div className="feedWrapper">
                <Share/>
                {posts.map((p)=>(

                    <Post key={p._id} post={p}/>
                )
                )}
          
            </div>
        </div>
    )
}
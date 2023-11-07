import "./share.css"
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material"

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={PF+"person/bilal.png"} alt="" />
                    <input type="text" className="shareInput" placeholder="What's on your mind Bilal?" />
                </div>
                <hr className="shareHr" />
                <div className="shareBotttom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="Tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}

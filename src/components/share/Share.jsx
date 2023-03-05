import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions} from '@mui/icons-material';

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                <input 
                    placeholder="What's in your mind?"
                    className="shareInput" />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareOptionIcon"/>
                        <div className="shareOptionText">Photo or Video</div>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareOptionIcon"/>
                        <div className="shareOptionText">Tag</div>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareOptionIcon"/>
                        <div className="shareOptionText">Location</div>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="gold" className="shareOptionIcon"/>
                        <div className="shareOptionText">Feelings</div>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

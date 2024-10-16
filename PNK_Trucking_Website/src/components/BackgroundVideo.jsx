import "../styling/BackgroundVideo.css"
import background_video from '../assets/background_video.mp4'
function BackgroundVideo(){
    return(
        <div className="video">
        <video className="video" autoPlay='autoplay' loop="loop" muted playsInline><source src={background_video} type='video/mp4'/></video>
        </div>
    );
}
export default BackgroundVideo
import '../styling/Promotion.css'
import logo from '../assets/logo.png'
import promotion_video from '../assets/promotion_vid.mp4'
export default function Promotion(){
    return(
        <div className="promotion">
            <video className="p-video" autoPlay='autoplay' loop="loop" muted playsInline><source src={promotion_video} type='video/mp4'/></video>
            <div className='p-message'>
                <h3>Special Offers & Promotions</h3>
                <p>October Special: </p>
                <p>15% off all residential moves booked this month!</p>
                <p>Referral Program: </p>
                <p>Refer a friend and get $50 off your next service.</p>
            </div>
        </div>
    );
}
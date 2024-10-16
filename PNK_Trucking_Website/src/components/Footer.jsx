import '../styling/Footer.css'
import logo from '../assets/logo.png'
export default function Footer(){
    return(
        <footer>
            <div className='footer-message'>
                <div className='message-section'>
                <img src ={logo} className='logo-m' alt='logo'/>
                <h1 className='logo_label'>PNK TRUCKING <p className='logo_label_2'>SERVICES</p></h1>
                    <p className='message'>
                    PNK Trucking Services is Jamaica’s trusted partner for all your residential, commercial, and specialty removal needs. 
                    Our mission is to provide reliable, safe, and efficient transportation solutions, ensuring your belongings get where they need to be — on time and intact.
                    </p>
                    <p className='copyright'>&copy;{new Date().getFullYear()} PNK Trucking Services</p>
                </div>
                <div className='contact'>
                <h5>Contact Us</h5>
                <p>Address: </p>
                <p>Montego Bay, Jamaica</p>
                <p>Phone: </p>
                <p>876-426-6197</p>
                <p>Email: </p>
                <p>pnktrucking@yahoo.com</p>
                </div>
            </div>
            
        </footer>
    );
}
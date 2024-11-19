import '../styling/Contact_Form.css'
import formvideo from '../assets/formvideo.mp4'
export default function Contact_Form(){
    return(
        <div className='bg'>
            <div className='formbg'>
                <h2>Get in Touch</h2>
                <form>
                    <div className='inputbox'>
                        <label for ="name">Name </label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className='inputbox'>
                        <label for ="email">Email </label>
                        <input type="text" id="email" name="email"/>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <video className="formvideo" autoPlay='autoplay' loop="loop" muted playsInline><source src={formvideo} type='video/mp4'/></video>
        </div>
    );
}
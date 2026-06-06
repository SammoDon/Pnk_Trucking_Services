import '../styling/Footer.css';
import logo from '../assets/logo.png';
import privacyPolicyFile from '../assets/Privacy Policy.pdf'; // Import Privacy Policy file
import termsConditionsFile from '../assets/Terms and Conditions.pdf'; // Import Terms and Conditions file

export default function Footer() {
  return (
    <footer>
      <div className='footer-message'>
        <div className='message-section'>
          <img src={logo} className='logo-m' alt='logo' />
          <h1 className='logo_label'>PNK TRUCKING <p className='logo_label_2'>SERVICES</p></h1>
          <p className='message'>
            PNK Trucking Services is Jamaica’s trusted partner for all your residential, commercial, and specialty removal needs. 
            Our mission is to provide reliable, safe, and efficient transportation solutions, ensuring your belongings get where they need to be — on time and intact.
          </p>
          <p className='copyright'>&copy;{new Date().getFullYear()} PNK Trucking Services</p>
        </div>

        {/* Contact Us Section */}
        <div className='contact'>
          <h5>Contact Us</h5>
          <p>Address: </p>
          <p>Montego Bay, Jamaica</p>
          <p>Phone: </p>
          <p>876-426-6197</p>
          <p>Email: </p>
          <p>pnktrucking@yahoo.com</p>
        </div>

        {/* Quick Links Section */}
        <div className='quick-links'>
          <h5>Quick Links</h5>
          <div>
            <strong>Company</strong>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <strong>Support</strong>
            <ul>
              <li><a href="/about-us">FAQs</a></li>
              <li><a href={privacyPolicyFile} download>Privacy Policy</a></li>
              <li><a href={termsConditionsFile} download>Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import privacyPolicyFile from '../assets/Privacy Policy.pdf'; // Import Privacy Policy file
import termsConditionsFile from '../assets/Terms and Conditions.pdf'; // Import Terms and Conditions file
import '../styling/Contact_Us.css';

export default function Contact() {
  return (
    <div className="contact-us">
      <h1>Contact Us | PNK Trucking Services</h1>
      <p>We’re here to help! Whether you have questions about our services, need a custom quote, or want to learn more about how we can assist with your transportation and logistics needs, feel free to reach out. Our dedicated team is ready to assist you.</p>
      
      <div className="contact-details">
        <h2>Get in Touch</h2>
        <div className="contact-item">
          <h3>Phone:</h3>
          <p>876-426-6197</p>
          <p>Call us anytime for immediate assistance or to speak directly with one of our representatives.</p>
        </div>
        
        <div className="contact-item">
          <h3>Email:</h3>
          <p>pnktrucking@yahoo.com</p>
          <p>Send us an email with your inquiry, and we’ll respond within 24 hours.</p>
        </div>
        
        <div className="contact-item">
          <h3>Office Address:</h3>
          <p>PNK Trucking Services</p>
          <p>Montego Bay, St. James, Jamaica</p>
        </div>

        <div className="request-quote">
          <h3>Request a Quote</h3>
          <p>Need a quote for your move or delivery? Click the button below to go over to our form, and we’ll get back to you with a detailed estimate.</p>
          <Link to="/Services">
            <button className="request-quote-btn">Request a Quote</button>
          </Link>
        </div>

        <div className="social-media">
          <h3>Follow Us</h3>
          <p>Stay connected and up to date with the latest news, offers, and updates from PNK Trucking Services.</p>
          <ul>
            <li>Facebook: @PNKTruckingServices</li>
            <li>Instagram: @PNKTruckingServices</li>
          </ul>
        </div>

        <div className="policies">
          <h3>Policies</h3>
          <p>Click below to download both our Privacy Policy and Terms and Conditions documents.</p>
          <a href={privacyPolicyFile} download>
            <button className="download-btn">Download Privacy Policy</button>
          </a>
          <a href={termsConditionsFile} download>
            <button className="download-btn">Download Terms and Conditions</button>
          </a>
        </div>
      </div>
    </div>
  );
}

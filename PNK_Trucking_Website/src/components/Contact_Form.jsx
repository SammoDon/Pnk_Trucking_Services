import '../styling/Contact_Form.css';
import contact_form_img from '../assets/contact_form_img.jpg';
import privacyPolicyFile from '../assets/Privacy Policy.pdf'; // Replace with your actual file path
import termsConditionsFile from '../assets/Terms and Conditions.pdf'; // Replace with your actual file path

export default function Contact_Form() {
  return (
    <div className='bg'>
      <div className='formbg'>
        <h2>Learn More About Our Policies</h2>
        <div className='button-container'>
          <a href={privacyPolicyFile} download>
            <button className="download-button">
              Privacy Policy
            </button>
          </a>
          <a href={termsConditionsFile} download>
            <button className="download-button">
              Terms and Conditions
            </button>
          </a>
        </div>
        <div className="filler-text">
          <p>Click the buttons above to download our Privacy Policy or Terms and Conditions.</p>
          <p>Once clicked, the file will be downloaded to your device.</p>
        </div>
      </div>
      <img src={contact_form_img} className='formimg' alt='home' />
    </div>
  );
}

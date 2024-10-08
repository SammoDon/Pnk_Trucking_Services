import './Nav.css'
import logo from './assets/logo.png'
function Nav(){
    return(
            <nav className='nav'>
                <img src ={logo} className='logo' alt='logo'/>
                <h1 className='logo_label'>PNK TRUCKING <h4 className='logo_label_2'>SERVICES</h4></h1>
                <li><a href="/Home"className="nav-link active">Home</a></li>
                <li><a href=""className="nav-link">Services</a></li>
                <li><a href=""className="nav-link">Contact Us</a></li>
                <li><a href=""className="nav-link">About Us</a></li>
                
            </nav>
    );
}
export default Nav
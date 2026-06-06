import '../styling/Nav.css'
import logo from '../assets/logo.png'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export default function Nav(){
    const path = window.location.pathname
    return(
            <nav className='nav'>
                
                <img src ={logo} className='logo' alt='logo'/>
                <h1 className='logo_label'>PNK TRUCKING <p className='logo_label_2'>SERVICES</p></h1>
                <ul>
                <CustomLink to="/">Home </CustomLink>
                <CustomLink to="/Services">Services</CustomLink>
                <CustomLink to="/Contact" >Contact Us</CustomLink>
                <CustomLink to="/About Us" >About Us</CustomLink>
                </ul>
            </nav>
    );
}

function CustomLink({to,children}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to}>
                {children}
            </Link >
        </li>
    );
}
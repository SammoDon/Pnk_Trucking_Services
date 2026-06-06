import '../styling/Button.css'
import { Link} from 'react-router-dom';
export default function Button(){
    return(
        <button className="button"><Link to="/Services">Get a Quote</Link></button>
    );
}

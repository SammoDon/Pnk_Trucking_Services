import '../styling/Service_Cards.css'
import PropTypes from 'prop-types'
import { useState } from 'react';


function Service_Cards(props){
      // State to track hover for each card
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  // Styles for service cards: white by default, props image on hover
  const backgroundStyle1 = {
    backgroundColor: 'white',
    backgroundImage: isHovered1 ? `url(${props.BgImg1})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 0.3s ease, color 0.3s ease',

  };

  const backgroundStyle2 = {
    backgroundColor: 'white',
    backgroundImage: isHovered2 ? `url(${props.BgImg2})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 0.3s ease, color 0.3s ease',
    
  };

  const backgroundStyle3 = {
    backgroundColor: 'white',
    backgroundImage: isHovered3 ? `url(${props.BgImg3})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 0.3s ease, color 0.3s ease',
    
  };
    return(
        <div  className="service_cards">
            <h2 className="service_card_main_title">{props.title}<p className="service_card_main_title_descrip">{props.title_descrip}</p></h2>
                <div className="service_card1" 
                style={backgroundStyle1}
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
                >
                    <img src ={props.img1} className='icons' alt='home'/>
                    <h3>{props.card_title_1}</h3>
                    <p>{props.card_descrip_1}</p>
                </div>
                <div className="service_card2"
                style={backgroundStyle2}
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
                >
                    <img src ={props.img2} className='icons' alt='bank'/>
                    <h3>{props.card_title_2}</h3>
                    <p>{props.card_descrip_2}</p>
                </div>
                <div className="service_card3"
                style={backgroundStyle3}
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
                >
                    <img src ={props.img3} className='icons' alt='sparkes'/>
                    <h3>{props.card_title_3}</h3>
                    <p>{props.card_descrip_3}</p>
                </div>
        </div>
    );
}
Service_Cards.propTypes ={
    card_title_1: PropTypes.string,
    card_title_2: PropTypes.string,
    card_title_3: PropTypes.string,
    card_descrip_1: PropTypes.string,
    card_descrip_2: PropTypes.string,
    card_descrip_3: PropTypes.string,
}
export default Service_Cards
import './Service_Cards.css'
import PropTypes from 'prop-types'


function Service_Cards(props){
    return(
        <div className="service_cards">
            <h2 className="service_card_main_title">{props.title}<p className="service_card_main_title_descrip">{props.title_descrip}</p></h2>
            <div className="service_card1">
                <img src ={props.img1} className='icons' alt='home'/>
                <h3>{props.card_title_1}</h3>
                <p>{props.card_descrip_1}</p>
            </div>
            <div className="service_card2">
                <img src ={props.img2} className='icons' alt='bank'/>
                <h3>{props.card_title_2}</h3>
                <p>{props.card_descrip_2}</p>
            </div>
            <div className="service_card3">
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
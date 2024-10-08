import "./App.css"
import BackgroundVideo from "./BackgroundVideo.jsx"
import Nav from "./Nav.jsx"
import Content from "./Content.jsx"
import Button from "./Button.jsx"
import Service_Cards from "./Service_Cards.jsx"
import Footer from "./Footer.jsx"
import home from'./assets/home.png'
import bank from'./assets/bank.png'
import piano from'./assets/piano.png'
import map from './assets/map.png'
import people from './assets/people.png'
import professional from './assets/professional.png'
function App() {
    return(
      <>
      <div style={{ position: 'relative', top: 0, width: '100%', zIndex:1 }}>
        <BackgroundVideo/>
        <Nav/>
        <Content/>
        <Button/>
      </div>
      <div style={{ position: 'relative', zIndex: 0, marginTop:'25vh'}}>
          {/* This ensures the new content is placed after the video */}
          {/*this is a props component called Service_Cards used for the cards section, it host the icon, title of the card and also the description*/}
          <Service_Cards
          backgroundImage1 = {map} 
          title= "What do we do ?" 
          title_descrip ="At Pnk Trucking, our main goal is to provide the best customer experience possible while working effective and efficiently"
          img1={home} card_title_1="Residential Removals" card_descrip_1 = "We take the stress out of moving with fast, reliable home removal services"
          img2={bank} card_title_2="Commercial Removals" card_descrip_2 = "Seamless relocation for your business, minimizing downtime"
          img3={piano} card_title_3="Specialty Removals" card_descrip_3 = "Expert handling for fragile and high-value items like art, antiques, and pianos"
          />
          <Service_Cards 
          title= "Why Choose PNK Trucking Services?"
          img1={people} card_title_1="Customer-Centric Approach" card_descrip_1 = "Tailored solutions for every client, ensuring a personalized experience"
          img2={map} card_title_2="Real-Time Tracking" card_descrip_2 = "Stay in the know with up-to-the-minute updates on your deliveries"
          img3={[professional]} card_title_3="Experienced Team" card_descrip_3 = "Our skilled professionals ensure your belongings are handled with care and efficiency"
          />
      </div>
      </>
    );
}
export default App

import Header from "./Header.jsx"
import Nav from "./Nav.jsx"
import Footer from "./Footer.jsx"
import Button from "./Button.jsx"
import Content from "./Content.jsx"
import BackgroundVideo from "./BackgroundVideo.jsx"
import Place from "./Place.jsx"
import "./App.css"
function App() {
    return(
      <>
      <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 1 }}>
        <BackgroundVideo/>
        <Nav/>
        <Content/>
        <Button/>
      </div>
      <div style={{ position: 'relative', zIndex: 0, paddingTop: '100vh' }}>
          {/* This ensures the new content is placed after the video */}
         <Place/>
         <Place/>
         <Place/>
         <Place/>
         <Place/>
         <Place/>
         <Place/>
         <Place/>
         <Place/>
         <Place/>
         <Place/>
         <Place/>
         <Place/>
         <Place/>
         <Place/>
      </div>
      </>
    );
}
export default App

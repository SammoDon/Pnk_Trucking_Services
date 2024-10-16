import "./App.css"
import Home from "./pages/Home.jsx";
import Services from "./pages/Service.jsx"
import {Route, Routes} from "react-router-dom"
import Nav from "./components/Nav.jsx";
export default function App() {
    return(
      <div>
          <Nav/>
          <Routes>
            <Route index element = {<Home/>}/>
            <Route path="/" element = {<Home/>}/>
            <Route path="/Services" element = {<Services/>}/>
          </Routes>
      </div>
    );
}

import Nav from "../components/Nav";
import Map from "../components/Map";
export default function Service(){
    return(
        <>
        <div style={{ position:'relative', zIndex: 1}}>
        <Nav/>
        </div>
        <Map/>
        </>
    );
}
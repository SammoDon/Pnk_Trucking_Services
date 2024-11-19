import {useLoadScript} from "@react-google-maps/api"
import Map from "./Google_Map.jsx"

export default function Maps(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        libraries:["places"]
    });
    if(!isLoaded) return <div>Loading..........</div>
    return <Map/>
}
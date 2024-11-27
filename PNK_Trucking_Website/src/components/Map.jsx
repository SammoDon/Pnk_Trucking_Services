import {useLoadScript} from "@react-google-maps/api"
import Map from "./Google_Map.jsx"
const libraries = ['places', 'marker']

export default function Maps(){
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
        libraries: libraries,
        version: 'weekly',
    });
    if(!isLoaded) return <div>Loading..........</div>
    return <Map/>
}
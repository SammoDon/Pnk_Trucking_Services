import '../styling/Map.css'
import {useMemo, useRef, useState, useCallback} from "react"
import { GoogleMap, Marker,DirectionsRenderer, Circle, MarkerClusterer } from '@react-google-maps/api'
import Places from './Places';
export default function Google_Map(){
    const mapRef = useRef();
    const center = useMemo(() => ({lat: 18.109581,lng:-77.297508}), []);
    const options = useMemo (()=> ({
        disableDefaultUI: true,
        clickableIcons: false,
    }), []);

    const onLoad = useCallback(map => (mapRef.current = map), [])

    return <div className="container">
        <div className='controls'>
            <h1>Commute?</h1>
            <Places setOffice={(position) => {
                setOffice(position); 
                mapRef.current?.panTo(position);

            }}/>
        </div>
        <div className='map'>
            <GoogleMap 
            zoom={10} 
            center={center} 
            mapContainerClassName='map-container'
            options={options}
            onLoad={onLoad}
            ></GoogleMap>
        </div>
    </div>
}
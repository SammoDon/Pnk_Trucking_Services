import '../styling/Map.css';
import { useMemo, useRef, useState, useCallback } from "react";
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';
import Places from './Places';

export default function Google_Map() {
    const dcenter = useMemo(() => ({ lat: 18.46879782149321, lng: -77.89802053489612 }), []);
    const [locations, setLocations] = useState({ pickup: null, destination: null });
    const [directions, setDirections] = useState(null);
    const mapRef = useRef();

    const options = useMemo(() => ({
        disableDefaultUI: true,
        clickableIcons: false,
    }), []);

    const fetchDirections = useCallback(() => {
        if (!locations.pickup || !locations.destination) return;

        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
            {
                origin: locations.pickup,
                destination: locations.destination,
                travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
                if (status === "OK" && result) {
                    setDirections(result);
                } else {
                    console.error(`Error fetching directions: ${status}`);
                }
            }
        );
    }, [locations]);

    useMemo(() => {
        if (locations.pickup && locations.destination) fetchDirections();
    }, [locations, fetchDirections]);

    const center = locations.pickup || dcenter;

    return (
        <div className="container">
            <div className="controls">
                <h1>Delivery Location</h1>
                <Places
                    setLocations={(newLocations) => setLocations(newLocations)}
                    mapRef={mapRef}
                    dcenter={dcenter}
                    calculateDistance={(coord1, coord2) => {
                        const R = 6371;
                        const dLat = ((coord2.lat - coord1.lat) * Math.PI) / 180;
                        const dLng = ((coord2.lng - coord1.lng) * Math.PI) / 180;
                        const a =
                            Math.sin(dLat / 2) ** 2 +
                            Math.cos((coord1.lat * Math.PI) / 180) *
                                Math.cos((coord2.lat * Math.PI) / 180) *
                                Math.sin(dLng / 2) ** 2;
                        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                        return R * c;
                    }}
                />
            </div>
            <div className="map">
                <GoogleMap
                    zoom={10}
                    center={center}
                    mapContainerClassName="map-container"
                    options={options}
                    onLoad={(map) => (mapRef.current = map)}
                >
                    {/* Display the pickup marker */}
                    {locations.pickup && <Marker position={locations.pickup} label="P" />}

                    {/* Display the destination marker */}
                    {locations.destination && <Marker position={locations.destination} label="D" />}

                    {/* Render directions without default markers */}
                    {directions && (
                        <DirectionsRenderer
                            directions={directions}
                            options={{
                                suppressMarkers: true,
                            }}
                        />
                    )}
                </GoogleMap>
            </div>
        </div>
    );
}

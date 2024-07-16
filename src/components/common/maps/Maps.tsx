import { Box } from "@mui/material";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";

const containerStyle: React.CSSProperties = {
    width: "100%",
    height: '100%',
};

const center: google.maps.LatLngLiteral = {
    lat: -3.745,
    lng: -38.523,
};

function MyComponent() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyBFd3SePAftGtbQL78eDsmcqYd0357_FjI",
    });

    const [map, setMap] = React.useState<google.maps.Map | null>(null);
    const [type, setType] = useState("roadmap");
    const [location, setLocation] = useState({
        lat: -3.745,
        lng: -38.523,
    });
    const onLoad = React.useCallback((mapInstance: any) => {
        const bounds = new google.maps.LatLngBounds(center);
        mapInstance.fitBounds(bounds);
        setMap(mapInstance);
    }, []);

    const onUnmount = React.useCallback(() => {
        setMap(null);
    }, []);
    // const handleCurrentLocation = () => {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition((position) => {
    //             setLocation({
    //                 lat: position.coords.latitude,
    //                 lng: position.coords.longitude,
    //             });
    //             map &&
    //                 map.setCenter({
    //                     lat: position.coords.latitude,
    //                     lng: position.coords.longitude,
    //                 });
    //         });
    //     }
    //     console.log(location);
    // };

    // const changeView = () => {
    //     setType("satellite");
    // };
    return isLoaded ? (
        <Box sx={{ width: "100%", height: "100%", position: 'relative' }}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                mapTypeId={type}
            data-testid='maps'>
                <MarkerF position={location} draggable />
                <MarkerF position={location} draggable />
                <MarkerF position={location} draggable />
            </GoogleMap>
            {/* <Box sx={{ display: 'flex', gap: '20px', position: 'absolute', top: '0px' }}>
                <Button onClick={handleCurrentLocation} variant="contained">
                    Current Location
                </Button>
                <Button onClick={changeView} variant="contained">
                    Satellite View
                </Button>
            </Box> */}
        </Box>
    ) : (
        <></>
    );
}

export default React.memo(MyComponent);

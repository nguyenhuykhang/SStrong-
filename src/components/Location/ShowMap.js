import React, { useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { LoadScript } from '@react-google-maps/api';

function ShowMap() {

    const [currentLocation, setCurrentLocation] = useState(null);
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ lat: latitude, lng: longitude });
          },
          (error) => {
            console.log(error);
          }
        );
      }, []);
      

    const [map, setMap] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const { latitude, longitude } = pos.coords;
      const center = new window.google.maps.LatLng(latitude, longitude);
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: center,
      });
      setMap(map);
    });
  }, []);

  const apiKey = "ADD_YOUR_KEY_API";


  return <div id="map" style={{ height: "400px" }}>

        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap center={currentLocation} zoom={10}>
            <Marker position={currentLocation} />
            
            </GoogleMap>
        </LoadScript>

  </div>;
}

export default ShowMap;

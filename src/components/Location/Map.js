import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowMap from "./ShowMap";
import './location.css'
import { Row, Col } from 'antd';

function Map() {
  const [locationInfo, setLocationInfo] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=ADD_YOUR_KEY_API`;
      const response = await axios.get(url);
      const data = response.data;
      setLocationInfo(data.results[0]);
    });
  }, []);

  return (
    <>
    
    <div style={{height: "50px", backgroundColor: "#FEBE10"}}> 
    </div>
    <div className="Map">
    <div className="Sidebar">
        <div className="avaifr">Available Friends: </div>
        <div className="emergency">
        <img src="https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/279217396_3273445276267153_4143083073699297297_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jiEnhplLkD4AX9q8SwY&_nc_ht=scontent-ord5-1.xx&oh=00_AfAeDegQzcIWwpFFqusT8NU3CzPTrtk8nxVMoEpTvTL17g&oe=63F61C10" alt="Avatar" class="avatar"/>
            Minh Pham
        <button class="button-42" role="button">Emergency</button>
        </div>
    </div>
    <div className="Mylocation">
      <h1>My Current Location</h1>
      {locationInfo ? (
        <>
          <p>Address: {locationInfo.formatted_address}</p>
          <p>Latitude: {locationInfo.geometry.location.lat}</p>
          <p>Longitude: {locationInfo.geometry.location.lng}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>

    <ShowMap/>
    </>
  );
}

export default Map;

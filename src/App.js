import React from 'react';
import './App.css';
import {GoogleMap, LoadScript, DrawingManager} from "@react-google-maps/api";

const containerStyle = {
  width: '1200px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function App() {
  const onPolygonEvent = polygon => {
    console.log(polygon)
  }
  return (
    <div className="App">
      <header className="App-header">
        <LoadScript libraries={['drawing']} googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
          <GoogleMap id="drawing-manager-example" mapContainerStyle={containerStyle} center={center} zoom={10} >
            <DrawingManager  onPolygonComplete={onPolygonEvent} />
          </GoogleMap>
        </LoadScript>
      </header>
    </div>
  );
}

export default App;

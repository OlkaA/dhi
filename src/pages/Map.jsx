import React from 'react';
import MapGL from '../components/MapGL';
require('dotenv').config()
 
function Map() {
    const mapboxApiAccessToken = process.env.MAP_BOX_API_ACCESS_TOKEN;
 
  return (
    <>
        <h1>Map</h1>
        <MapGL mapboxApiAccessToken={mapboxApiAccessToken}/>
    </>
  );
}
 
export default Map;
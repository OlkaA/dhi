import React from 'react';
 
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function MapGL() {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 800,
    latitude: 55.6761,
    longitude: 12.5683,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
  );
}
 
export default MapGL;
import React, { useState } from "react";
import Map from "../components/Map";
import Graph from "../components/Graph";
import '../styles/infoPage.css';

function MapPage() {
  const [selectedPlace, setSelectedPlace] = useState({
    lat: 55.6761,
    lon: 12.5683,
  });

  return (
    <div className='flex'>
      <section>
        <h1>Map</h1>
        <Map
          getSelectedPlace={(value) => setSelectedPlace(value)}
          selectedPlace={selectedPlace}
        />
      </section>
      <section>
        <h1>Graph</h1>
        <Graph data={selectedPlace} />
      </section>
    </div>
  );
}

export default MapPage;

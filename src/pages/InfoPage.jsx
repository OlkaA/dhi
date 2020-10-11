import React, { useState } from "react";
import Map from "../components/Map";
import Graph from "../components/Graph";
import "../styles/infoPage.css";

function MapPage() {
  const [selectedPlace, setSelectedPlace] = useState({
    lat: 55.6761,
    lon: 12.5683,
  });

  return (
    <div>
      <h1>
        Click on green info sign and the information about the problem on bike
        path appears alongside with the temperature in this area in the near
        future
      </h1>
      <div className="flex">
          <Map
            getSelectedPlace={(value) => setSelectedPlace(value)}
            selectedPlace={selectedPlace}
          />
          <Graph data={selectedPlace} />
      </div>
    </div>
  );
}

export default MapPage;

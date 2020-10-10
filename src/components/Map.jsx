import React, { useState, useEffect, useRef } from "react";
import MapGL, { Marker, Layer, Feature } from "react-map-gl";
import * as initialData from "../data.json";

const mapboxApiAccessToken = process.env.REACT_APP_MAP_BOX_API_ACCESS_TOKEN;

function Map() {
  const [cykelData, setCykelData] = useState(initialData.default.features);
  const map = useRef();

  useEffect(() => {
    const marRef = map.current.getMap();

    marRef.on("load", function () {
      marRef.addSource("lines", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: 
          cykelData.map(route => {
            return {
              type: "Feature",
              properties: {
                color: "#F7455D", 
              },
              geometry: {
                type: "LineString",
                coordinates: route.geometry.coordinates[0]
              },
            }
          })
        },
      });
      marRef.addLayer({
        id: "lines",
        type: "line",
        source: "lines",
        paint: {
          "line-width": 1,
          "line-color": ["get", "color"],
        },
      });
    });
  }, [cykelData]);

  const [viewport, setViewport] = useState({
    latitude: 55.6761,
    longitude: 12.5683,
    zoom: 10,
    bearing: 0,
    pitch: 0,
  });


  return (
    <MapGL
      ref={map}
      {...viewport}
      width="90vw"
      height="100vh"
      mapStyle="mapbox://styles/olkaa/ckg3hhgiz1oxq1apg7n5zg5no"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={mapboxApiAccessToken}

    >
    </MapGL>
  );
}

export default Map;

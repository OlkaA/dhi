import React, { useState, useEffect, useRef } from "react";
import MapGL, { Marker, Layer, Feature } from "react-map-gl";
import {fetchCykelData, fetchCykelInfrastrukturData} from '../data';
const mapboxApiAccessToken = process.env.REACT_APP_MAP_BOX_API_ACCESS_TOKEN;

function Map() {
  const [cykelData, setCykelData] = useState([]);
  const [cykelInfrastruktur, setCykelInfrastrukturData] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null)
  const map = useRef();

  useEffect(() => {
    const marRef = map.current.getMap();

    fetch('https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=0&lat=55.6761&lon=12.5683')
      .then(res => res.json())
      .then(data => console.log('Cop', data))

    fetchCykelData().then( json => {
      setCykelData(json);

      marRef.on("load", function () {
        marRef.addSource("lines", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: json.map((route) => {
              return {
                type: "Feature",
                properties: {
                  color: "#F7455D",
                },
                geometry: {
                  type: "LineString",
                  coordinates: route.geometry.coordinates[0],
                },
              };
            }),
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
    });

    fetchCykelInfrastrukturData().then( json => {
      setCykelInfrastrukturData(json);
    })
    
  }, []);

console.log(selectedPlace)

  const [viewport, setViewport] = useState({
    latitude: 55.6761,
    longitude: 12.5683,
    zoom: 11,
    bearing: 0,
    pitch: 0,
  });

  return (
    <MapGL
      ref={map}
      {...viewport}
      width="50vw"
      height="50vw"
      mapStyle="mapbox://styles/olkaa/ckg3hhgiz1oxq1apg7n5zg5no"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={mapboxApiAccessToken}
    >
      {cykelInfrastruktur.map(item => (
        <Marker key={item.id} longitude={item.geometry.coordinates[0][0]} latitude={item.geometry.coordinates[0][1]}>
          <button onClick={(e) => {
              e.preventDefault();
              setSelectedPlace(item)
            }
          }>I</button>
        </Marker>
      ))}
    </MapGL>
  );
}

export default Map;

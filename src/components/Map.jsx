import React, { useState, useEffect, useRef } from "react";
import MapGL, { Marker, Layer, Feature } from "react-map-gl";
import {fetchCykelData, fetchCykelInfrastrukturData} from '../data';
const mapboxApiAccessToken = process.env.REACT_APP_MAP_BOX_API_ACCESS_TOKEN;

function Map(props) {
  const [cykelData, setCykelData] = useState([]);
  const [cykelInfrastruktur, setCykelInfrastrukturData] = useState([]);
  // const [selectedPlace, setSelectedPlace] = useState(null)
  const map = useRef();

  useEffect(() => {
    const marRef = map.current.getMap();

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

  const [viewport, setViewport] = useState({
    latitude: props.selectedPlace.lat,
    longitude: props.selectedPlace.lon,
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
              const selectedPlace = {
                lat: item.geometry.coordinates[0][1],
                lon: item.geometry.coordinates[0][0],
              }
              props.getSelectedPlace(selectedPlace)
            }
          }>I</button>
        </Marker>
      ))}
    </MapGL>
  );
}

export default Map;

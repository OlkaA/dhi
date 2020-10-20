import React, { useState, useEffect, useRef } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import { fetchCykelData, fetchCykelInfrastrukturData } from "../data";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const mapboxApiAccessToken = process.env.REACT_APP_MAP_BOX_API_ACCESS_TOKEN;
const mapStyle = `mapbox://styles/olkaa/ckg3hhgiz1oxq1apg7n5zg5no?${mapboxApiAccessToken}`;

function Map(props) {
  const [cykelInfrastruktur, setCykelInfrastrukturData] = useState([]);
  const map = useRef();
  const isMountedRef = useRef(null);

  useEffect(() => {
    const marRef = map.current.getMap();
    isMountedRef.current = true;

    fetchCykelData().then((json) => {
      if (isMountedRef.current) {
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
      }

      return () => (isMountedRef.current = false);
    });

    fetchCykelInfrastrukturData().then((json) => {
      setCykelInfrastrukturData(json);
    });
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
      width="100%"
      height="40vh"
      mapStyle={mapStyle}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={mapboxApiAccessToken}
    >
      {cykelInfrastruktur.map((item) => (
        <div key={item.id}>
          <Marker
            longitude={item.geometry.coordinates[0][0]}
            latitude={item.geometry.coordinates[0][1]}
          >
            <IconButton
              aria-label="delete"
              onClick={(e) => {
                e.preventDefault();
                const selectedPlace = {
                  lat: item.geometry.coordinates[0][1],
                  lon: item.geometry.coordinates[0][0],
                };
                props.getSelectedPlace(selectedPlace);
              }}
            >
              <InfoIcon
                style={{
                  backgroundColor: "#357a38",
                  color: "#6fbf73",
                  borderRadius: "15px",
                }}
              />
            </IconButton>
          </Marker>
          {item.geometry.coordinates[0][0] === props.selectedPlace.lon &&
            item.geometry.coordinates[0][1] === props.selectedPlace.lat && (
              <Popup
                longitude={props.selectedPlace.lon}
                latitude={props.selectedPlace.lat}
              >
                {item.properties.beskrivelse}
              </Popup>
            )}
        </div>
      ))}
    </MapGL>
  );
}

export default Map;

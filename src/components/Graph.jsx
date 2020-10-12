import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Graph(props) {
  const { data } = props;
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.met.no/weatherapi/locationforecast/2.0/complete?altitude=0&lat=${data.lat}&lon=${data.lon}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGraphData(data);
      });
  }, [data.lat, data.lon]);

  let renderedArray = [];
  if (graphData) {
    const shortArray = graphData.properties.timeseries.slice(0, 10);
    renderedArray = shortArray.map((item) => {
      const object = {};
      object.name = item.time.slice(11, 16);
      object["Temperature (C)"] = item.data.instant.details.air_temperature;
      object["Wind (m/s)"] = item.data.instant.details.wind_speed;
      return object;
    });
  }

  return (
    <>
      {renderedArray.length > 0 && (
        <ResponsiveContainer width="100%" height="40%">
          <LineChart
            data={renderedArray}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Temperature (C)"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Wind (m/s)" stroke="#357a38" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
}

export default Graph;

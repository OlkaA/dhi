import React, { useState } from "react";
import "fontsource-roboto";
import Map from "../components/Map";
import Graph from "../components/Graph";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function MapPage() {
  const [selectedPlace, setSelectedPlace] = useState({
    lat: 55.6761,
    lon: 12.5683,
  });

  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={12}>
        <Typography variant="h3">Problems with bike infrastructure</Typography>
        <Typography variant="subtitle1">
          Click on green info sign and the information about the problem on bike
          path appears alongside with the temperature in this area in the near
          future
        </Typography>
      </Grid>
      <Grid item xs={11} sm={12}>
        <Map
          getSelectedPlace={(value) => setSelectedPlace(value)}
          selectedPlace={selectedPlace}
        />
        <Typography variant="h3">The weather in this area</Typography>
        <Graph data={selectedPlace} />
      </Grid>
    </Grid>
  );
}

export default MapPage;

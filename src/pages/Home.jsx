import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../styles/homepage.css";

function Home() {
  return (
    <Grid container justify="center" className="homepage">
      <Grid item xs={11} sm={12}>
        <Typography variant="h3" align="center">
          This project was made to showcase bike paths in Copenhagen, the
          problems that exist on these paths with exact location, and the
          weather for those locations in the near future (probably for roadworkers to fix problems).
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Home;

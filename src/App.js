import React from "react";
import "fontsource-roboto";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import InfoPage from "./pages/InfoPage";
import About from "./pages/About";
import Home from "./pages/Home";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: "1.2rem",
  margin: "2rem 0 1rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2rem",
  },
};

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6}>
            <Navigation />
            <Switch>
              <Route path="/info">
                <InfoPage />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Router>
  );
}

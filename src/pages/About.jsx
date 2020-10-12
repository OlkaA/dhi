import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

function About() {
  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={12}>
        <Typography variant="h3">
          In this project were used technologies:
        </Typography>
        <List component="nav">
          <ListItem component="a" href="https://reactjs.org/docs/getting-started.html" target="_blank" style={{color: "black"}}>
            <ListItemIcon>
              <FiberManualRecordOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="React.js" />
          </ListItem>
          <ListItem  component="a" href="https://reactrouter.com/web/guides/quick-start" target="_blank" style={{color: "black"}}>
            <ListItemIcon>
              <FiberManualRecordOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="React router" />
          </ListItem>
          <ListItem  component="a" href="https://visgl.github.io/react-map-gl/" target="_blank" style={{color: "black"}}>
            <ListItemIcon>
              <FiberManualRecordOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="React-Map-GL" />
          </ListItem>
          <ListItem  component="a" href="https://recharts.org/en-US/" target="_blank" style={{color: "black"}}>
            <ListItemIcon>
              <FiberManualRecordOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Recharts" />
          </ListItem>
          <ListItem  component="a" href="https://material-ui.com/" target="_blank" style={{color: "black"}}>
            <ListItemIcon>
              <FiberManualRecordOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Material-UI" />
          </ListItem>
        </List>

        <Typography variant="h3">To run the project:</Typography>
        <List component="nav">
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="clone repo: 'https://github.com/OlkaA/dhi.git'" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="run 'npm install'" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="run 'npm start'" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <FiberManualRecordOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="enjoy the project" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export default About;

import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import "./Cards.css";

const Cards = (props) => {
  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} className="card">
          <CardContent>
            <Typography color="h2" gutterBottom>
              <b>* EDUCATION</b>
            </Typography>
            <Typography variant="h5">
              Btech: Computer Science (2017 - 2021)
            </Typography>
            <Typography color="textSecondary">
              MES COLLEGE OF ENGINEERING{" "}
            </Typography>
            <Typography variant="textSecondary">CGPA: 8.2</Typography>
            <Typography variant="h5">
              Secondary: Science (2015 - 2017)
            </Typography>
            <Typography color="textSecondary">FAROOK COLLEGE</Typography>
            <Typography variant="textSecondary">MARKS: 96%</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className="card">
          <CardContent>
            <Typography color="h5" gutterBottom>
              <b>* SKILLS (Advanced)</b>
            </Typography>
            <Typography variant="textSecondary">C Programming</Typography>
            <Typography color="textSecondary">Python</Typography>
            <Typography variant="textSecondary">React JS</Typography>
            <Typography color="h5" gutterBottom>
              <b>* SKILLS (Intermediate)</b>
            </Typography>
            <Typography variant="textSecondary">Django</Typography>
            <Typography color="textSecondary">React Native</Typography>
            <Typography color="textSecondary">HTML</Typography>
            <Typography variant="textSecondary">CSS</Typography>
            <Typography color="textSecondary">JAVASCRIPT</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className="card">
          <CardContent>
            <Typography color="h5" gutterBottom>
              <b>* PROJECTS</b>
            </Typography>
            <Typography variant="textSecondary">React JS Projects</Typography>
            <Typography color="textSecondary">
              Python Django Projects
            </Typography>
            <Typography variant="body2">React Native Projects</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className="card">
          <CardContent>
            <Typography color="h5" gutterBottom>
              <b>* INTERNSHIPS</b>
            </Typography>
            <Typography variant="textSecondary">CREVICE MEDIA</Typography>
            <Typography color="textSecondary"></Typography>
            <Typography variant="body2"></Typography>
          </CardContent>
        </Grid>
      </Grid>
    
    </div>
  );
};
export default Cards;

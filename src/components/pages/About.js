import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Box, Grid, Typography } from "@material-ui/core"
import profile from "../images/steven_profile_picture.jpg"
import Typed from "react-typed"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw"
  },
  imgContainer: {
    objectFit: "cover",
    width: "200px",
    height: "250px",
    borderRadius: "50%"
  },
  content: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "lightblue"
  }
}))

const About = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Grid
        container
        className={classes.content}
        alignItems="center"
        justifyContent="center"
      >
        <img
          src={profile}
          className={classes.imgContainer}
          alt="Profile picture of Steven"
        />
        <Typography variant="h4">
          <Typed strings={["Steven Duong"]} typeSpeed={40} />
        </Typography>
        <Typography variant="h5">
          <Typed
            strings={[
              "Frontend Developer",
              "Fullstack Developer",
              "Web Developer"
            ]}
            typeSpeed={50}
            backspeed={10}
            loop
          />
        </Typography>
      </Grid>
      <Box style={{ backgroundColor: "black" }}></Box>
    </Box>
  )
}

export default About

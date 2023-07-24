import {makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {Container } from 'react-bootstrap';
import Carousel from './Carousel';


const useStyles = makeStyles((theme) => ({
    banner: {
      backgroundImage: "url(./banner2.jpg)",
    },
    bannerContent: {
      height: 400,
      display: "flex",
      flexDirection: "column",
      paddingTop: 25,
      justifyContent: "space-around",
    },
    tagline: {
      display: "flex",
      height: "2%",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
  }));

const Banner = () => {
    const classes =  useStyles();

  return (
    
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h3"
            style={{
              fontWeight:"bold",
              marginBottom: 10,
              fontFamily: "Montserrat",
            }}
          >
           <span style={{color:'white'}}> Crypto Dashbord</span>
          </Typography>
          <Typography
            variant="p"
            style={{
              fontWeight:"bold",
              color: "white",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
    
  );
}

export default Banner
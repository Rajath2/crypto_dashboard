import { AppBar, createTheme, makeStyles, MenuItem, Select, ThemeProvider, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { CryptoState } from '../CryptoContext';


const useStyles = makeStyles(()=>({
  title: {
  flex:1,
  color: "White",
  fontFamily: "Montserrat",
  fontSize: "40px",
  fontWeight: "bold",
  cursor: "pointer",
  }
}));

const Header = () => {

  const classes = useStyles();
  const navigate = useNavigate();

  const{currency, setCurrency} = CryptoState()
  console.log(currency);

  const darkTheme = createTheme({
    palette: {
      primary:{
        main: "#36454F",
      },
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
          <Typography onClick={()=> navigate('/')} className={classes.title}>AlmaBetter</Typography>

          <Select variant='outlined'
          style={{
            width:100,
            height:40,
            marginLeft:15,
            color:"white",
          }}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>      
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header

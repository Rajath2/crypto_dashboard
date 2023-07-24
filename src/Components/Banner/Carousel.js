import { makeStyles } from '@material-ui/core'
import { color } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../CryptoContext';

const useStyles = makeStyles((theme) => ({
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
    carouselItems:{
      display: "flex",
      flexDirection:"column",
      alignItems:"center",
      textTransform:"uppercase",
      color:"white",
      cursor:"pointer",
    }
}));


export function numberWithCommas(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}

const Carousel = () => {
    const [trending, setTrending] = useState([]);

    const classes = useStyles();

    //checking state of currency
    const {currency, symbol} =  CryptoState();

    //calling data using api from coingeko
    const fetchTrendingCoins =async () => {
        const { data } = await axios.get(TrendingCoins(currency))
        console.log(trending);
        setTrending(data);
    };

    //calling fetchTrendingCoin function
    useEffect(() => {
      fetchTrendingCoins();
    }, [currency]);

    const items = trending.map((coin) => {
      let profit = coin.price_change_percentage_24h >= 0;

      return (
        <>

        <Link
          className={classes.carouselItems}
          to={`/coin/${coin?.id}`}>
            <img
            src={coin?.image}
            alt={coin.name}
            height="100"
            style={{marginBottom:10}}
          />
          </Link>
          <span style={{color:'black',fontWeight:700}}className={classes.carouselItems}>{coin?.symbol}
            &nbsp;
            <span style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 700,
            }}>
              {profit && "+"}{coin.price_change_percentage_24h?.toFixed(2)}%</span>
          </span>
          <span style={{color:'white',fontWeight:500,display:"flex"}}className={classes.carouselItems}>
            {symbol}{numberWithCommas(coin?.current_price)} </span>
            </>
            

      )
    })

    const responsive = {
      0: {
        items:2,
      },
      512: {
        items:4,
      },
    };

  return (
    <div className={classes.carousel}>
      {/*AliceCarousel is used to display coursal sliding items we can enable or desable for more refer net*/}
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        enabelDotsControls //used for dotted button under scrollCaursol
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
        />
    </div>
  )
}

export default Carousel

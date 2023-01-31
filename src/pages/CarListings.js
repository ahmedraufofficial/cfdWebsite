import * as React from 'react';
import Footer from '../components/footer';
import ResponsiveAppBar from '../components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import ListingCard from '../components/ListingCard';
import { Grid } from '@mui/material';

export default function CarListing() {

  const darkTheme = createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#ff8b3d',
        },
      },
  });

  const [cars, setCars] = useState([])

  const fetchData = () => {
    fetch(`http://backend.carfairdeal.com/listings`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCars(data.data)
    })
  }
  

    useEffect(()=>{
      fetchData();
    }, [])


      return (
        <ThemeProvider theme={darkTheme}>
            <ResponsiveAppBar />
            <Grid minHeight={'80vh'}>
            <Grid container marginTop={"3%"}>
            <h2>
              Car Listing
            </h2>
          </Grid>
              {
                cars && cars.map((x) => {
                  return <ListingCard type={'all'} data={x}/>
                })
              }
              </Grid>
            <Footer />
        </ThemeProvider>
      );
    };
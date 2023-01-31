import * as React from 'react';
import Footer from '../components/footer';
import ResponsiveAppBar from '../components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import ListingCard from '../components/ListingCard';
import { useContext } from 'react';
import {AuthContext} from '../context/AuthProvider';
import { Grid } from '@mui/material';

export default function MyListings() {

  const darkTheme = createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#ff8b3d',
        },
      },
  });

  const [cars, setCars] = useState([])
  const {userInfo} = useContext(AuthContext);


  const fetchData = () => {
    fetch(`http://localhost:5000/listings/all/${userInfo?.email}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCars(data.data)
    })
  }


    useEffect(()=>{
        if (userInfo) {
            fetchData();
        }
    }, [userInfo])


      return (
        <ThemeProvider theme={darkTheme}>
            <ResponsiveAppBar />
            <Grid minHeight={'80vh'}>
            {
                cars && cars?.map((x) => {
                  return <ListingCard type={'self'} data={x}/>
                })
              }
            </Grid>
            <Footer />
        </ThemeProvider>
      );
    };
import { Container, Grid, Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { React } from 'react';
import ResponsiveAppBar from '../components/Navbar';
import { AuthContext } from '../context/AuthProvider';
import {useEffect, useState, useContext} from 'react';
import AuctionCard from '../components/AuctionCard';

const Auctions = () => {
  const {auth} = useContext(AuthContext);
  const [auctions, setAuctions] = useState([])

  const fetchAuctions = () => {
    fetch(`http://localhost:5000/auctions`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAuctions(data.data)
      })
}

  useEffect(()=>{
      let auctionInterval = setInterval(fetchAuctions, 3000)
      return () => {
        clearInterval(auctionInterval); 
      }
  },[])

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <ResponsiveAppBar />
    <Container >
      <Grid>
        <h4 style={{margin: "2.5%"}}>
            Auctions
        </h4>
      </Grid>
      <Grid>
        {
          auctions?.map((auction) => (
            <Stack key={auction._id}>
              <AuctionCard data={auction}/>
            </Stack>
          ))
        }
        </Grid>
        </Container>
    </ThemeProvider>
  )
}

export default Auctions
import { Container, Grid, Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { React } from 'react';
import ResponsiveAppBar from '../components/Navbar';
import { AuthContext } from '../context/AuthProvider';
import {useEffect, useState, useContext} from 'react';
import AuctionCard from '../components/AuctionCard';import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Auctions = () => {
  const {auth} = useContext(AuthContext);
  const [auctions, setAuctions] = useState([])

  const fetchAuctions = () => {
    fetch(`http://backend.carfairdeal.com/auctions`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAuctions(data.data)
      })
}
  const navigate = useNavigate();
  useEffect(()=>{
/*       const userInfo = localStorage.getItem('userInfo')
      if (JSON.parse(userInfo).status == "Inactive") {
        toast("Account not activated yet");
        navigate('/');
      }  */
      let auctionInterval = setInterval(fetchAuctions, 3000)
      return () => {
        clearInterval(auctionInterval); 
      }
  },[])

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ff8b3d',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <ResponsiveAppBar />
    <Container >
    <Grid container marginTop={"3%"}>
            <h2>
              Auctions
            </h2>
          </Grid>
      <Grid>
        {
          auctions?.map((auction) => (
            <Stack key={auction._id}>
              <AuctionCard data={auction}/>
            </Stack>
          )).reverse()
        }
        </Grid>
        </Container>
    </ThemeProvider>
  )
}

export default Auctions
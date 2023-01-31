import { Box, Button } from '@mui/material';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthProvider";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Grid, ListItem } from '@mui/material';
import ResponsiveAppBar from '../components/Navbar';
import Footer from '../components/footer';


export default function AboutUs() {
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
              About Us
            </h2>
          </Grid>
            <h1 style={{fontSize: "20px", marginTop: "25px", color: 'black'}}>
            Car Fair Deal was designed to pave the way for easy, swift, simple and free hassle cars selling in Abu Dhabi. We guarantee that our service is efficient, reliable and safe.
            </h1>
            <h1 style={{fontSize: "20px", marginTop: "25px", color: 'black'}}>
            OUR OFFERS INCLUDE THE FOLLOWING:
            </h1>
            <h1 style={{fontSize: "15px", marginTop: "25px", color: 'black'}}>
            ➼ Efficient Services – our services are distinguished from others.
            </h1>
            <h1 style={{fontSize: "15px", marginTop: "25px", color: 'black'}}>
            ➼ Hassle free – we are aware by the fact that, selling a car is a complex process, so we make it as simple as possible by removing all the hurdles.
            </h1>
            <h1 style={{fontSize: "15px", marginTop: "25px", color: 'black'}}>
            ➼ Free valuation and inspection – as the auto is brought to be checked freely, other procedures will be ongoing.
            </h1>
            <h1 style={{fontSize: "15px", marginTop: "25px", color: 'black'}}>
            ➼ Flexible time for appointments – we put into consideration time availability as many people busy working.
            </h1>
            <h1 style={{fontSize: "15px", marginTop: "25px", color: 'black'}}>
            ➼ You can book your appointment according to your own free time.
            </h1>
            <h1 style={{fontSize: "15px", marginTop: "25px", color: 'black'}}>
            ➼ A fairer price than others – as many car dealers often underestimate the vehicles, we grantee you a fair price.
            </h1>
            <h1 style={{fontSize: "15px", marginTop: "25px", color: 'black'}}>
            ➼ Acceptance of all car conditions – your auto is accepted any way, whether it is a financed car, old, damaged…etc.
            </h1>
            <h1 style={{fontSize: "15px", marginTop: "25px", color: 'black'}}>
            ➼ Smooth guidance – our staff are professionals so they will direct you efficiently through the procedures.
            </h1>
            <h1 style={{fontSize: "15px", marginTop: "25px", color: 'black'}}>
            ➼ A safe and diverse transaction – you can require your money through various means of transactions, cash, bank transfer or cheque.
            </h1>
            </Container>
            <br />
            <br />
            
            <Footer />
            
        </ThemeProvider>

    )
}

import { Box, Button } from '@mui/material';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../context/AuthProvider";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Grid, ListItem } from '@mui/material';
import ResponsiveAppBar from '../components/Navbar';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Footer from '../components/footer';
import { BottomNavigation } from '@mui/material';



export default function AboutUs() {
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
            <h1 style={{fontSize: "25px", marginTop: "25px"}}>
                About Us
            </h1>
            <h1 style={{fontSize: "20px", marginTop: "25px"}}>
            Car Fair Deal was designed to pave the way for easy, swift, simple and free hassle cars selling in Abu Dhabi. We guarantee that our service is efficient, reliable and safe.
            </h1>
            <h1 style={{fontSize: "25px", marginTop: "25px"}}>
            OUR OFFERS INCLUDE THE FOLLOWING:
            </h1>
            <h1 style={{fontSize: "17px", marginTop: "25px"}}>
            Efficient Services – our services are distinguished from others.
            </h1>
            <h1 style={{fontSize: "17px", marginTop: "25px"}}>
            Hassle free – we are aware by the fact that, selling a car is a complex process, so we make it as simple as possible by removing all the hurdles.
            </h1>
            <h1 style={{fontSize: "17px", marginTop: "25px"}}>
            Free valuation and inspection – as the auto is brought to be checked freely, other procedures will be ongoing.
            </h1>
            <h1 style={{fontSize: "17px", marginTop: "25px"}}>
            Flexible time for appointments – we put into consideration time availability as many people busy working.
            </h1>
            <h1 style={{fontSize: "17px", marginTop: "25px"}}>
            You can book your appointment according to your own free time.
            </h1>
            <h1 style={{fontSize: "17px", marginTop: "25px"}}>
            A fairer price than others – as many car dealers often underestimate the vehicles, we grantee you a fair price.
            </h1>
            <h1 style={{fontSize: "17px", marginTop: "25px"}}>
            Acceptance of all car conditions – your auto is accepted any way, whether it is a financed car, old, damaged…etc.
            </h1>
            <h1 style={{fontSize: "17px", marginTop: "25px"}}>
            Smooth guidance – our staff are professionals so they will direct you efficiently through the procedures.
            </h1>
            <h1 style={{fontSize: "17px", marginTop: "25px"}}>
            A safe and diverse transaction – you can require your money through various means of transactions, cash, bank transfer or cheque.
            </h1>
            </Container>
            <br />
            <br />
            
            <BottomNavigation>
            <Footer />
            </BottomNavigation>
            
        </ThemeProvider>

    )
}

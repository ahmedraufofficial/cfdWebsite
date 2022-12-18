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
import { textAlign } from '@mui/system';





export default function Footer() {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });

    return (

      <Grid container spacing={2} style={{position: "relative", marginBottom:"0"}}>
      <Grid item xs={4} style={{backgroundColor: "green", textAlign: "center"}}>
        <h1>
          Car Fair Deal
        </h1>
      </Grid>
      <Grid item xs={4} style={{backgroundColor: "blue"}}>
        
      </Grid>
      <Grid item xs={4} style={{backgroundColor: "pink", textAlign: "center"}}>
        <h4>
          Guide
        </h4>

      </Grid>
      <Grid item xs={4} style={{backgroundColor: "yellow", textAlign: "center"}}>
        <h5>
          Contact us:
        </h5>
        <h6>
          Phone: (+971) 2 444 79 79
        </h6>
        <h6 >
          Email: info@carfairdeal.com
        </h6>
      </Grid>
      <Grid item xs={4} style={{backgroundColor: "purple"}}>
      <h5>
          Our Location:
        </h5>
        <h6>
        ADNOC vehicle inspection centre, Muroor, Al Mushrif - Abu Dhabi - United Arab Emirates
        </h6>
      </Grid>
      <Grid item xs={4} style={{backgroundColor: "violet"}}>

      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4} style={{backgroundColor: "violet", fontSize: "15px", textAlign: "center", marginBottom:"5px"}}>
        <small style={{fontSize: "15px"}}>
          Copyrights © 2019 All Rights Reserved by Car Fair Deal.
        </small> 
      </Grid>
    </Grid>
    )
}

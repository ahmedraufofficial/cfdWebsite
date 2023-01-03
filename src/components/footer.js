import { React } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';






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

      <Grid container spacing={2} style={{position: "relative", marginBottom:"0", backgroundColor: "rgba(3, 17, 31)"}}>
      <Grid item xs={4} style={{textAlign: "center"}}>
        <h1 style={{fontSize: "35px"}}>
          <img src={"/images/cfd.png"} width="50%" alt="Logo" />
        </h1>
      </Grid>
      <Grid item xs={4}>
        
      </Grid>
      <Grid item xs={4} style={{textAlign: "center"}}>
        <h4>
          Guide
        </h4>

      </Grid>
      <Grid item xs={4} style={{textAlign: "center"}}>
        <h5 style={{fontSize: "10px"}}>
          Contact us:
        </h5>
        <h6 style={{fontSize: "10px"}}>
          Phone: (+971) 2 444 79 79
        </h6>
        <h6 style={{fontSize: "10px"}}>
          Email: info@carfairdeal.com
        </h6>
      </Grid>
      <Grid item xs={4}>
      <h5 style={{fontSize: "10px"}}>
          Our Location:
        </h5>
        <h6 style={{fontSize: "10px"}}>
        ADNOC vehicle inspection centre, Muroor, Al Mushrif - Abu Dhabi - United Arab Emirates
        </h6>
      </Grid>
      <Grid item xs={4}>
        <a href='https://www.google.com/'>
          <h1 style={{fontSize: "10px", textAlign: "center"}}>
            https://www.google.com/
          </h1>
        </a>
        <a href='https://www.facebook.com/'>
          <h1 style={{fontSize: "10px", textAlign: "center"}}>
            https://www.facebook.com/
          </h1>
        </a>
        <a href='https://www.twitter.com/'>
          <h1 style={{fontSize: "10px", textAlign: "center"}}>
            https://www.twitter.com/
          </h1>
        </a>
      </Grid>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={4} style={{fontSize: "15px", textAlign: "center", marginBottom:"5px"}}>
        <small style={{fontSize: "7px"}}>
          Copyrights © 2019 All Rights Reserved by Car Fair Deal.
        </small> 
      </Grid>
    </Grid>
    )
}

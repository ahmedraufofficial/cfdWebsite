import * as React from 'react';
import { ReactDOM } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormControl from '@mui/material/FormControl';
import {InputLabel, Input, FormHelperText, TextField, Box, Paper, Grid, MenuItem, Divider} from '@mui/material';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Field, Form, Formik, FormikProps, useFormik } from 'formik';
import { border, fontSize } from '@mui/system';
import Footer from '../components/footer';
import ResponsiveAppBar from '../components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const style02 = {
    padding: 5,
    fontSize: "17px"
  }

const style01 = {
    padding: 1
}


export default function ContactUs() {

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          Website: '',
          User: '',
          Sell_Option: '',
          Location: '',
          Valuation_Status: '',
          Heard_From_Us: '',
          Staff_Lead_Source: '',
          Appointment_Date: '',
          Time: '',
          Customer_Information: {},
          Car_Valuation_Details: {}
        },
        onSubmit: (values) => {
          async function add() {
              const response = await fetch(`https://e7f5-2001-8f8-1623-5e91-c99e-f35a-c239-24a5.in.ngrok.io/add/evaulation`, {
                  method: 'POST',
                  headers: {'Content-Type': 'application/json'},
                  body:values
              })
              const data = await response.json()
              alert(data)  
          }
          add();
          //alert(JSON.stringify(values, null, 2));
        },
      });
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
            <Container style={{marginTop: "35px"}} >
            <Grid container spacing={2}>
                <Grid item xs={6} style={{textAlign: "center", marginTop: "10%", marginBottom: "10%", padding: "5%"}}>
                    <h4>
                    We’re here to answer any questions you may have. Reach out to us and we’ll respond as soon as we can.
                    </h4>
                    <h5 style={{marginTop: "45px"}}>
                    For any inquiries please contact
                    </h5>
                    <h5>
                    info@carfairdeal.com or (+971) 2 444 79 79
                    </h5>
                <Container style={{margin: "10px"}} >
                    <h5 style={{textAlign: "center", marginBottom: "5px"}}>
                        Send us a message
                    </h5>
                    <TextField style={style01}
                        sx={{ width: "160px", margin: "5px" }} size="small"
                        id="ContactUs_Name"
                        name="ContactUs_Name"
                        label="Name"
                        value={formik.values.ContactUs_Name}
                        onChange={formik.handleChange}
                    >
                    </TextField>
                    <TextField style={style01}
                        sx={{ width: "160px", margin: "5px" }} size="small"
                        id="ContactUs_Number"
                        name="ContactUs_Number"
                        label="Number"
                        value={formik.values.ContactUs_Number}
                        onChange={formik.handleChange}
                    >
                    </TextField>
                    <TextField style={style01}
                        sx={{ width: "160px", margin: "5px"  }} size="small"
                        id="ContactUs_Email"
                        name="ContactUs_Email"
                        label="Email"
                        value={formik.values.ContactUs_Email}
                        onChange={formik.handleChange}
                    >
                    </TextField>
                    <TextField style={style01}
                        sx={{ width: "400px", margin: "5px"  }} size="small"
                        id="ContactUs_Message"
                        name="ContactUs_Message"
                        label="Message"
                        value={formik.values.ContactUs_Message}
                        onChange={formik.handleChange}
                    >
                    </TextField>
                    <Button style={{backgroundColor: 'orange'}} variant="contained" type="submit" size='small'>SUBMIT</Button>
                </Container>
          
                </Grid>
                <Grid item xs={6} style={{textAlign: "center", height: "25px"}}>
                    <iframe width="100%" height="700px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Muroor%20Rd%20-%20Al%20Mushrif%20-%20Zone%201%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe>
                </Grid>
            </Grid>   
            </Container>
            <br />
            <br />
            <Footer />
            
        </ThemeProvider>

    )
}

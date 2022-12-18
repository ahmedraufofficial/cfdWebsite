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
import { fontSize } from '@mui/system';
import Footer from '../components/footer';
import ResponsiveAppBar from '../components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const style = {
    position: 'relative',
    width: '80%',
    height: '80%'
  };
  
  const style01 = {
      padding: 1
  }
  
  const style02 = {
    padding: 5
  }
  
  const Websites = [
      {
        value: 'carfairdeal',
        label: 'carfairdeal',
      },
      {
        value: 'dubizzle',
        label: 'dubizzle',
      },
    ];
  
    const Users = [
      {
        value: 'Sattar Sahab',
        label: 'Sattar Sahab',
      },
      {
        value: 'John Cena',
        label: 'John Cena',
      },
    ];
  
    const selloptions = [
      {
        value: 'A1 Option',
        label: 'A2 Option',
      },
      {
        value: 'A2 Option',
        label: 'A2 OPtion',
      },
    ];
  
    const Locations = [
      {
        value: 'LA',
        label: 'LA',
      },
      {
        value: 'LV',
        label: 'LV',
      },
    ];
  
    const valstatuses = [
      {
        value: 'No Idea 01',
        label: 'No Idea 01',
      },
      {
        value: 'No Idea 02',
        label: 'No Idea 02',
      },
    ];
  
    const Heard_From_Uss = [
      {
        value: 'Website',
        label: 'Website',
      },
      {
        value: 'Brochure',
        label: 'Brochure',
      },
    ];
  
    const staffsources = [
      {
        value: 'Source 01',
        label: 'Source 01',
      },
      {
        value: 'Source 02',
        label: 'Source 02',
      },
    ];
  
    const contactLocations =[
      {
        value: 'LA',
        label: 'LA',
      },
      {
        value: 'LV',
        label: 'LV',
      },
    ];
  
    const Model_Years =[
      {
        value: '2020',
        label: '2020',
      },
      {
        value: '2015',
        label: '2015',
      },
    ];
  
    const makes =[
      {
        value: 'Option01',
        label: 'Option01',
      },
      {
        value: 'Option02',
        label: 'Option02',
      },
    ];
  
    const Global_Model_Names =[
      {
        value: 'Option01',
        label: 'Option01',
      },
      {
        value: 'Option02',
        label: 'Option02',
      },
    ];
  
    const Model_Names =[
      {
        value: 'Option01',
        label: 'Option01',
      },
      {
        value: 'Option02',
        label: 'Option02',
      },
    ];
  
    const Car_Optionslist =[
      {
        value: 'Option01',
        label: 'Option01',
      },
      {
        value: 'Option02',
        label: 'Option02',
      },
    ];
  
    const mileages =[
      {
        value: 'Option01',
        label: 'Option01',
      },
      {
        value: 'Option02',
        label: 'Option02',
      },
    ];



export default function Evaluation() {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });

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
      const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
      const handleChange07 = (newValue) => {
        setValue(newValue);
      }
  
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }));
    
      return (
        <ThemeProvider theme={darkTheme}>
            <ResponsiveAppBar />
        <Container sx={style}>
          <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2} style={{marginTop: "3%"}}>
          <Grid item xs={6} md={5} >
            <h4 style={{textAlign: "center"}}>
                Appointment Information
            </h4>
          <TextField style={style01} 
            sx={{ m: 1, minWidth: 150 }} size="small" 
            id="Website"
            name="Website"
            select
            label="Website" 
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Website}
            onChange={formik.handleChange}
          >
            {Websites.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 150, fontSize: "2px" }} size="small"
            id="User"
            name="User"
            select
            label="User"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.User}
            onChange={formik.handleChange}
          >
            {Users.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 150 }} size="small"
            id="Sell_Option"
            name="Sell_Option"
            select
            label="Sell Option"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Sell_Option}
            onChange={formik.handleChange}
          >
            {selloptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 150}} size="small"
            id="Location"
            name="Location"
            select
            label="Location"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Location}
            onChange={formik.handleChange}
          >
            {Locations.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 170 }} size="small"
            id="Valuation_Status"
            name="Valuation_Status"
            select
            label="Valuation Status"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Valuation_Status}
            onChange={formik.handleChange}
          >
            {valstatuses.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack paddingBottom={"2%"} paddingTop={"2%"} paddingLeft={"2%"} paddingRight={"15%"} spacing={1} direction="row">
                  <DesktopDatePicker
                  label="Appointment Date"
                  inputFormat="MM/DD/YYYY"
                  value={value}
                  onChange={handleChange07}
                  renderInput={(params) => <TextField size="small" InputLabelProps={{style: {fontSize: 20, resize: "5px"}}} {...params}/>}
                  />
                  <TimePicker
                  label="Time"
                  value={value}
                  onChange={handleChange07}
                  renderInput={(params) => <TextField size="small" InputLabelProps={{style: {fontSize: 20}}} {...params} />}
                  />
              </Stack>
          </LocalizationProvider>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 170 }} size="small"
            id="Heard_From_Us"
            name="Heard_From_Us"
            select
            label="Hear Us From"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Heard_From_Us}
            onChange={formik.handleChange}
          >
            {Heard_From_Uss.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 170 }} size="small"
            id="Staff_Lead_Source"
            name="Staff_Lead_Source"
            select
            label="Staff Lead Source"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Staff_Lead_Source}
            onChange={formik.handleChange}
          >
            {staffsources.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          </Grid>
          <Grid item xs={6} md={3}>
            <h4 style={{textAlign: "center"}}>
                Customer Information
            </h4>
          <FormControl variant="standard" style={style02}>
          <InputLabel htmlFor="Contact_Name" style={style02}>
            First Name
          </InputLabel>
          <Input
            id="Customer_Information.Contact_Name"
            name="Customer_Information.Contact_Name"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Customer_Information.Contact_Name}
            onChange={formik.handleChange}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          </FormControl>
          <FormControl variant="standard" style={style02}>
          <InputLabel htmlFor="Email" style={style02}>
            Email
          </InputLabel>
          <Input
            id="Customer_Information.Email"
            name="Customer_Information.Email"
            value={formik.values.Customer_Information.Email}
            onChange={formik.handleChange}
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            }
          />
          </FormControl>
          <FormControl variant="standard" style={style01}>
          <InputLabel htmlFor="Contact_Number" style={style01}>
            Contact Number
          </InputLabel>
          <Input
            id="Customer_Information.Contact_Number"
            name="Customer_Information.Contact_Number"
            value={formik.values.Customer_Information.Contact_Number}
            onChange={formik.handleChange}
            startAdornment={
              <InputAdornment position="start">
                <PhoneIcon />
              </InputAdornment>
            }
          />
          </FormControl>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 170 }} size="small"
            id="Customer_Information.Customer_Location"
            name="Customer_Information.Customer_Location"
            select
            label="Contact Location"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Customer_Information.Customer_Location}
            onChange={formik.handleChange}
          >
            {contactLocations.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          </Grid>
          <Grid item xs={6} md={4}>
            <h4 style={{textAlign: "center"}}>
                Car Valuation Details
            </h4>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 150 }} size="small"
            id="Customer_Information.Model_Year"
            name="Customer_Information.Model_Year"
            select
            label="Model Year"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Customer_Information.Model_Year}
            onChange={formik.handleChange}
          >
            {Model_Years.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 150 }} size="small"
            id="Customer_Information.Make"
            name="Customer_Information.Make"
            select
            label="Make"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Customer_Information.Make}
            onChange={formik.handleChange}
          >
            {makes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 150 }} size="small"
            id="Customer_Information.Global_Model_Name"
            name="Customer_Information.Global_Model_Name"
            select
            label="Global Model"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Customer_Information.Global_Model_Name}
            onChange={formik.handleChange}
          >
            {Global_Model_Names.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 150 }} size="small"
            id="Customer_Information.Model_Name"
            name="Customer_Information.Model_Name"
            select
            label="Model Name"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Customer_Information.Model_Name}
            onChange={formik.handleChange}
          >
            {Model_Names.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 150 }} size="small"
            id="Customer_Information.Car_Options"
            name="Customer_Information.Car_Options"
            select
            label=" Car Options"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Customer_Information.Car_Options}
            onChange={formik.handleChange}
          >
            {Car_Optionslist.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 150 }} size="small"
            id="Customer_Information.Mileage"
            name="Customer_Information.Mileage"
            select
            label="Mileage"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Customer_Information.Mileage}
            onChange={formik.handleChange}
          >
            {mileages.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <FormControl variant="standard" style={style02}>
          <InputLabel htmlFor="Evaluation_Options" style={style02}>
            Evaluation Amount
          </InputLabel>
          <Input
            id="Customer_Information.Evaluation_Options"
            name="Customer_Information.Evaluation_Options"
            value={formik.values.Customer_Information.Evaluation_Options}
            onChange={formik.handleChange}
            startAdornment={
              <InputAdornment position="start">
                <AttachMoneyIcon />
              </InputAdornment>
            }
          />
          </FormControl>
          </Grid>
          <Grid item md={12} style={{textAlign: "center"}}>
            <Button sx={{ m: 1, minWidth: 200 }} color="primary" variant="contained" type="submit">
            Submit
          </Button>
          </Grid>
        </Grid>
            </form>
        </Container>
        <Footer/>
        </ThemeProvider>
      );
    };
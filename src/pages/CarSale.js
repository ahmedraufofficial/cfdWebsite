import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {Container} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import {InputLabel, Input, TextField, Paper, Grid, MenuItem} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useFormik} from 'formik';
import Footer from '../components/footer';
import ResponsiveAppBar from '../components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const style = {
    position: 'relative',
    width: '100%',
    height: '100%'
  };
  
  const style01 = {
      padding: 1
  }
  
  const style02 = {
    padding: 5,
    fontSize: "20px"
  }
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



export default function CarSale() {

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
          <Grid container spacing={0} style={{marginTop: "3%"}}>
          <Grid item xs={6} md={3} style={{margin: "auto"}}>
            <h4 style={{marginLeft: "1%"}}>
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
                <AccountCircle fontSize='20px'/>
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
                <EmailIcon fontSize='20px'/>
              </InputAdornment>
            }
          />
          </FormControl>
          <FormControl variant="standard" style={style02}>
          <InputLabel htmlFor="Contact_Number" style={style02}>
            Contact Number
          </InputLabel>
          <Input
            id="Customer_Information.Contact_Number"
            name="Customer_Information.Contact_Number"
            value={formik.values.Customer_Information.Contact_Number}
            onChange={formik.handleChange}
            startAdornment={
              <InputAdornment position="start">
                <PhoneIcon fontSize='20px'/>
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
          <Grid item xs={6} md={4} style={{margin: "auto"}}>
            <h4 style={{marginLeft: "2.5%"}}>
                Car Details
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
            Price
          </InputLabel>
          <Input
            id="Customer_Information.Evaluation_Options"
            name="Customer_Information.Evaluation_Options"
            value={formik.values.Customer_Information.Evaluation_Options}
            onChange={formik.handleChange}
            startAdornment={
              <InputAdornment position="start">
                <AttachMoneyIcon fontSize='20px'/>
              </InputAdornment>
            }
          />
          </FormControl>
          </Grid>
          <Grid item md={12} style={{textAlign: "center"}}>
            <Button sx={{ m: 1, minWidth: 200 }} style={{backgroundColor: "orange"}} variant="contained" type="submit">
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
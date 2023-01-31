import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {Container, Typography} from '@mui/material';
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
import { useState, useEffect } from 'react';

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
    fontSize: "20px",
    width: 250
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
          mode: 'light',
          primary: {
            main: '#ff8b3d',
          },
        },
      });

    const formik = useFormik({
        initialValues: {
        },
        onSubmit: (values, {resetForm}) => {
          async function add(values) {
              const response = await fetch(`http://backend.carfairdeal.com/add/listing`, {
                  method: 'POST',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(values)
              })
              const data = await response.json()
              data ? alert('Succesfully submitted') : alert('Something went wrong');
              resetForm();
          }
          values.Make = value2
          values.Model_Name = value3
          add(values);
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

    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [makes, setMakes] = useState([]);
    const [Model_Names, setModel_Names] = useState([]);

    function handleChange2(event) {
      setValue2(event.target.value);
      getModels(event.target.value);
    }

    function handleChange3(event) {
      setValue3(event.target.value);
    }

    const getMakes = async () => {
      const makesRequest = await fetch('https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=id', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'bc0999e258mshcf4317dd12e51e3p170dc4jsn618b97c551a7',
          'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        }
      })
      const makesJson = await makesRequest.json()
      const makesArray = makesJson.data
      setMakes(makesArray.map((x) => {
        return {
          value: x.name,
          label: x.name
        }
      }))
    }

    const getModels = async (x) => {
      const modelsRequest = await fetch(`https://car-api2.p.rapidapi.com/api/models?make=${x}&sort=id&direction=asc&year=2020&verbose=yes`, {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'bc0999e258mshcf4317dd12e51e3p170dc4jsn618b97c551a7',
          'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
        }
      })
      const modelsJson = await modelsRequest.json()
      const modelsArray = modelsJson.data
      setModel_Names(modelsArray.map((x) => {
        return {
          value: x.name,
          label: x.name
        }
      }))
    }

    useEffect(()=>{
      getMakes();
    }, [ value2, value3])

      return (
        <ThemeProvider theme={darkTheme}>
            <ResponsiveAppBar />
        <Container sx={style}>
          <Grid container marginTop={"3%"}>
            <h2>
              Add Car Advertisement
            </h2>
          </Grid>
          <form onSubmit={formik.handleSubmit}>
          <Grid minHeight={'80vh'} container spacing={2} style={{marginTop: "3%"}}>
          <Grid item xs={6} md={5}>
            <h4 style={{marginLeft: "1%", color: 'black'}}>
                Customer Information
            </h4>
          <FormControl variant="standard" style={style02}>
          <InputLabel htmlFor="Contact_Name" style={style02}>
            First Name
          </InputLabel>
          <Input
            id="Contact_Name"
            name="Contact_Name"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Contact_Name}
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
            id="Email"
            name="Email"
            value={formik.values.Email}
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
            id="Contact_Number"
            name="Contact_Number"
            value={formik.values.Contact_Number}
            onChange={formik.handleChange}
            startAdornment={
              <InputAdornment position="start">
                <PhoneIcon fontSize='20px'/>
              </InputAdornment>
            }
          />
          </FormControl>
          </Grid>
          <Grid md={2}>

          </Grid>
          <Grid item xs={6} md={5}>
            <h4 style={{marginLeft: "2.5%", color: 'black'}}>
                Car Details
            </h4>
            <TextField style={style01}
            sx={{ m: 1, width: 150 }} size="small"
            id="Model_Year"
            name="Model_Year"
            select
            label="Model Year"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Model_Year}
            onChange={formik.handleChange}
          >
            {Model_Years.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, width: 150 }} size="small"
            id="Make"
            name="Make"
            select
            label="Make"
            InputLabelProps={{style: {fontSize: 15}}}
            value={value2}
            onChange={handleChange2}
          >
            {makes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, width: 150 }} size="small"
            id="Model_Name"
            name="Model_Name"
            select
            label="Model Name"
            InputLabelProps={{style: {fontSize: 15}}}
            value={value3}
            onChange={handleChange3}
          >
            {Model_Names.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, minWidth: 150 }} size="small"
            id="Car_Options"
            name="Car_Options"
            select
            label=" Car Options"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Car_Options}
            onChange={formik.handleChange}
          >
            {Car_Optionslist.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <FormControl variant="standard" style={style02}>
          <InputLabel htmlFor="Price" style={style02}>
            Mileage
          </InputLabel>
          <Input
            id="Mileage"
            name="Mileage"
            value={formik.values.Mileage}
            onChange={formik.handleChange}
            startAdornment={
              <InputAdornment position="start">
                <Typography>KM</Typography>
              </InputAdornment>
            }
          />
          </FormControl>
          <FormControl variant="standard" style={style02}>
          <InputLabel htmlFor="Price" style={style02}>
            Price
          </InputLabel>
          <Input
            id="Price"
            name="Price"
            value={formik.values.Price}
            onChange={formik.handleChange}
            startAdornment={
              <InputAdornment position="start">
                <Typography>AED</Typography>
              </InputAdornment>
            }
          />
          </FormControl>
          </Grid>
          <Grid item md={12} style={{textAlign: "center"}}>
            <Button sx={{minWidth: 200 }} style={{backgroundColor: "#ff8b3d"}} variant="contained" type="submit">
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
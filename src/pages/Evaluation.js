import * as React from 'react';
import Button from '@mui/material/Button';
import {Container, Typography} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import {InputLabel, Input, TextField, Box, Paper, Grid, MenuItem} from '@mui/material';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useFormik } from 'formik';
import Footer from '../components/footer';
import ResponsiveAppBar from '../components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router'

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
        value: 'Google',
        label: 'Google',
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
        value: '2002',
        label: '2002',
      },
      {
        value: '2003',
        label: '2003',
      },
      {
        value: '2004',
        label: '2004',
      },
      {
        value: '2005',
        label: '2005',
      },
      {
        value: '2006',
        label: '2006',
      },
      {
        value: '2007',
        label: '2007',
      },
      {
        value: '2008',
        label: '2008',
      },
      {
        value: '2009',
        label: '2009',
      },     {
        value: '2010',
        label: '2010',
      },     {
        value: '2011',
        label: '2011',
      },     {
        value: '2012',
        label: '2012',
      },     {
        value: '2013',
        label: '2013',
      },     {
        value: '2014',
        label: '2014',
      },
      {
        value: '2015',
        label: '2015',
      },
      {
        value: '2016',
        label: '2016',
      },
      {
        value: '2017',
        label: '2017',
      },
      {
        value: '2018',
        label: '2018',
      },
      {
        value: '2019',
        label: '2019',
      },
      {
        value: '2020',
        label: '2020',
      },
      {
        value: '2021',
        label: '2021',
      },
      {
        value: '2022',
        label: '2022',
      }
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
        value: 'Full',
        label: 'Full',
      },
      {
        value: 'Mid',
        label: 'Mid',
      },
      {
        value: 'Trim',
        label: 'Trim',
      },
    ];
  
    const specs =[
      {
        value: 'GCC',
        label: 'GCC',
      },
      {
        value: 'American',
        label: 'American',
      },
    ];



export default function Evaluation() {
    const navigate = useNavigate()
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
          Heard_From_Us: '',
          Appointment_Date: new Date(),
          Appointment_Time: new Date(),
          Customer_Information: {},
          Car_Valuation_Details: {}
        },
        onSubmit: (values) => {
          async function add(x) {
              const response = await fetch(`http://localhost:5000/add/evaluation`, {
                  method: 'POST',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({x: x})
              })
              const data = await response.json()
              alert("Successfully Added") 
              navigate(0);  
          }

          async function add_appointment(x) {
            const response = await fetch(`http://localhost:5000/add/appointment`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({x: x})
            })
            const data = await response.json()
            alert("Succesfully Added")   
            navigate(0);
        }

          const data = values;
          if (!data.Car_Valuation_Details) {
            data.Car_Valuation_Details = {}
          }
          data.Car_Valuation_Details.Make = value2
          data.Car_Valuation_Details.Model_Year = value1
          data.Car_Valuation_Details.Global_Model_Name = value4
          data.Car_Valuation_Details.Model_Name = value3
          data.Car_Valuation_Details.Regional_Specs = value5
          data.Car_Valuation_Details.Evaluation_Option = JSON.stringify(result)
          if (!toggle) {
            delete data.Appointment_Date
            delete data.Appointment_Time
            add(data);
          } else {
            add_appointment(data)
          }
          //alert(JSON.stringify(values, null, 2));
        },
      });
      const [toggle, settoggle] = useState(false);
      const handleChange09 = event => {
        settoggle(current => !current);
      };

      const [selectedTime, setTime] = useState(new Date());
      const [selectedDate, handleDateChange] = useState(new Date());

      const handleTimeChange = (val) => {
        const hours = new Date(val).getHours();
        const minutes = new Date(val).getMinutes();
        const seconds = new Date(val).getSeconds();
        console.log(`${hours}:${minutes}:${seconds}`);
        setTime(val);
      };


    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [result, setResult] = useState('');
    const [makes, setMakes] = useState([]);
    const [trims, setTrims] = useState([]);
    const [Model_Names, setModel_Names] = useState([]);

    function handleChange1(event) {
      setValue1(event.target.value);
    }

    function handleChange2(event) {
      setValue2(event.target.value);
      getModels(event.target.value);
    }

    function handleChange3(event) {
      setValue3(event.target.value);
      getTrim(value1, value2, event.target.value)
    }

    function handleChange4(event) {
      setValue4(event.target.value);
    }

    function handleChange5(event) {
      setValue5(event.target.value);
    }

    function updateResult() {
      console.log(value1, value2, value3, value5)
      if (value1 && value2 && value3 && value5)  {
          fetchEstimate(value2, value3, value1, value5)
      }
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

    const fetchEstimate = (make, model, year, specs) => {
      if (specs) {
        fetch(`http://localhost:5000/dbzestimate/${make}/${model}/${year}/${specs.toLowerCase()}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          if (data.estimate) {
            var price = data.estimate
            setResult(parseInt(price));
          } else {
            fetch(`http://localhost:5000/estimate/${make}/${model}/${year}`)
            .then(response => {
              return response.json()
            })
            .then(data => {
              var price = data.estimate
              setResult(parseInt(price) * 3.68);
            })
          }

        })
      }
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
      if (x == "Nissan") {
        modelsArray.push({name: "Patrol"})
      }
      setModel_Names(modelsArray.map((x) => {
        return {
          value: x.name,
          label: x.name
        }
      }))
    }

    const getTrim = async (year, make, model) => {
      if (model == "Patrol") {
        var patrolList = ["Basic", "GL", "LE", "LE PI", "LE PJ", "LE PK", "LE PL2", "LE PL4", "LE Platinum", "LE Platinum + FES", "Nismo", "Safari", "Safari AT", "Safari KA", "Safari KC", "Safari MT", "Safari SR", "SE", "SE P2", "SE P3", "SE P3L", "SE P4", "SE P5", "SE Platinum", "SE T3", "Super Safari", "VVIP", "XE"]
        setTrims(patrolList.map((x) => {
          return {
            value: x,
            label: x
          }
        }))
      } else {
        fetch(`http://localhost:5000/trim/${make}/${model}/${year}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setTrims(data.trim.map((x) => {
            return {
              value: x,
              label: x
            }
          }))
        })
      }
    }
    
    useEffect(()=>{
      getMakes();
      updateResult();
    }, [value1, value2, value3, value5])

      return (
        <ThemeProvider theme={darkTheme}>
            <ResponsiveAppBar />
        <Container sx={style}>
          <Grid container marginTop={"3%"}>
            <h2>
              Evaluation
            </h2>
          </Grid>
          <form onSubmit={formik.handleSubmit}>
          <Grid minHeight={'80vh'} container spacing={1} marginTop={"3%"}>

          <Grid item xs={6} md={4}>
            <h4 style={{marginLeft: "1%", color: 'black'}}>
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
            sx={{ m: 1, width: 150 }} size="small"
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
            <h4 style={{marginLeft: "2.5%", color: 'black'}}>
                Car Valuation Details
            </h4>
          <TextField style={style01}
            sx={{ m: 1, width: 150 }} size="small"
            id="Car_Valuation_Details.Model_Year"
            name="Car_Valuation_Details.Model_Year"
            select
            label="Model Year"
            InputLabelProps={{style: {fontSize: 15}}}
            value={value1}
            onChange={handleChange1}
          >
            {Model_Years.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, width: 150 }} size="small"
            id="Car_Valuation_Details.Make"
            name="Car_Valuation_Details.Make"
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
            id="Car_Valuation_Details.Global_Model_Name"
            name="Car_Valuation_Details.Global_Model_Name"
            select
            label="Trim/ Global Model"
            InputLabelProps={{style: {fontSize: 15}}}
            value={value4}
            onChange={handleChange4}
          >
            {trims.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, width: 150 }} size="small"
            id="Car_Valuation_Details.Model_Name"
            name="Car_Valuation_Details.Model_Name"
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
            sx={{ m: 1, width: 150 }} size="small"
            id="Car_Valuation_Details.Car_Options"
            name="Car_Valuation_Details.Car_Options"
            select
            label="Car Options"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Car_Valuation_Details.Car_Options}
            onChange={formik.handleChange}
          >
            {Car_Optionslist.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={style01}
            sx={{ m: 1, width: 150 }} size="small"
            id="Car_Valuation_Details.Regional_Specs"
            name="Car_Valuation_Details.Regional_Specs"
            select
            label="Regional Specs"
            InputLabelProps={{style: {fontSize: 15}}}
            value={value5}
            onChange={handleChange5}
          >
            {specs.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          
          <FormControl variant="standard" style={style02}>
          <InputLabel htmlFor="Mileage" style={style02}>
            Mileage
          </InputLabel>
          <Input
          id="Car_Valuation_Details.Mileage"
          name="Car_Valuation_Details.Mileage"
          value={formik.values.Car_Valuation_Details.Mileage}
            onChange={formik.handleChange}
            startAdornment={
              <InputAdornment position="start">
                <Typography>KM</Typography>
              </InputAdornment>
            }
          />
          </FormControl>

          <FormControl variant="standard" style={style02}>
          <InputLabel htmlFor="Evaluation_Option" style={style02}>
            Evaluation Amount
          </InputLabel>
          <Input
            id="Car_Valuation_Details.Evaluation_Option"
            name="Car_Valuation_Details.Evaluation_Option"
            value={result}
            onChange={formik.handleChange}
            startAdornment={
              <InputAdornment position="start">
                <Typography>AED</Typography>
              </InputAdornment>
            }
          />
          </FormControl>
          </Grid>
          <Grid item xs={6} md={4} >
            <h4 style={{marginLeft: "2.5%", color: 'black'}}>
                Appointment Information
            </h4>
          <TextField style={style01}
            sx={{ m: 1, width: 150 }} size="small"
            id="Heard_Us_From"
            name="Heard_Us_From"
            select
            label="Heard Us From"
            InputLabelProps={{style: {fontSize: 15}}}
            value={formik.values.Heard_Us_From}
            onChange={formik.handleChange}
          >
            {Heard_From_Uss.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <FormGroup style={{textAlign: "center"}}>
              <FormControlLabel control={
              <Switch defaultValue={false} onChange={handleChange09} color="warning" />} label="Book an Appointment" />
              {toggle && (
                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Stack spacing={3}>
                      <DesktopDatePicker
                      label="Select Date"
                      inputFormat="MM/DD/YYYY"
                      width="250px"
                      value={selectedDate}
                      onChange={(date) => handleDateChange(date)}
                      minDate={new Date()}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                      label="Select Time"
                      value={selectedTime}
                      onChange={handleTimeChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
                </Box>
              )}
            </FormGroup>
          </Grid>
          <Grid item md={12} style={{textAlign: "center"}}>

            <Button sx={{ m: 1, minWidth: 200, backgroundColor: "#ff8b3d" }} color="primary" variant="contained" type="submit">
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
import * as React from 'react';
import Button from '@mui/material/Button';
import Footer from '../components/footer';
import ResponsiveAppBar from '../components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import {Container} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import {InputLabel, Input, FormHelperText, TextField, Box, Paper, Grid, MenuItem, Divider} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useFormik, Field } from 'formik';
import { orange } from '@mui/material/colors';

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

function createData(prop, value) {
  return { prop, value};
}

export default function CarListing() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });

      const rows = [
        createData('Make', 'Nissan'),
        createData('Model', 'Altima'),
        createData('Year', '2011'),
        createData('Mileage', '190000'),
      ];

      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

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

      return (
        <ThemeProvider theme={darkTheme}>
            <ResponsiveAppBar />
            <Card sx={{ maxWidth: 300 }} style={{margin: '25px'}}>
                <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/images/SUPRA.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Toyota Supra 
                </Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 150}} size='small' aria-label="simple table">
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.prop}</TableCell>
                          <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </CardContent>
            <CardActions>
              <Button sx={{ m: 1, minWidth: 100, backgroundColor: "orange", margin:"auto"}} size="small" variant="contained" onClick={handleOpen}>Inquiry</Button>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                <Grid item xs={6} md={3}>
            <h4 style={{marginLeft: "1%"}}>
                Customer Information
            </h4>
          <FormControl variant="standard" style={style02}>
          <InputLabel htmlFor="Contact_Name" style={style02}>
            Name
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
          </Grid>
          <Grid item md={12} style={{textAlign: "center"}}>
            <Button sx={{ m: 1, minWidth: 200, backgroundColor: "orange" }} color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
                </Box>
              </Modal>
            </CardActions>
            </Card>
        <Footer />
        </ThemeProvider>
      );
    };
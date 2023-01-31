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
import { useNavigate } from 'react-router-dom';

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


export default function ListingCard({data, type}) {
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
          mode: 'light',
          primary: {
            main: '#ff8b3d',
          },
        },
      });

      const rows = [
        createData('Make', data?.Make),
        createData('Model', data?.Model_Name),
        createData('Year', data?.Model_Year),
        createData('Mileage', `${data?.Mileage} KM` ),
        createData('Price', `${data?.Price} AED` ),
      ];
      const navigate = useNavigate();
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const formik = useFormik({
        initialValues: {},
        onSubmit: (x) => {
          async function add(x) {
            
              const response = await fetch(`http://localhost:5000/add/inquiry`, {
                  method: 'POST',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(x)
              })
              const data = await response.json()
              alert("Successfully submitted. We will contact you soon!")
              setOpen(false);
          }
          x.Vehicle = `${data?.Make} ${data?.Model_Name} ${data?.Model_Year}`
          add(x);
          //alert(JSON.stringify(values, null, 2));
        },
      });

      return (
        <ThemeProvider theme={darkTheme}>
            <Card sx={{ maxWidth: 300 }} style={{margin: '25px'}}>
                <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/images/SUPRA.jpg"
            />
            <CardContent>
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
              { type == 'self' ? <Button sx={{ m: 1, minWidth: 100, backgroundColor: "red", margin:"auto"}} size="small" variant="contained" onClick={handleOpen}>Delete</Button> : <Button sx={{ m: 1, minWidth: 100, backgroundColor: "#ff8b3d", margin:"auto"}} size="small" variant="contained" onClick={handleOpen}>Inquiry</Button> }
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>  
                { type == 'self' ? 
                <Grid item xs={6} md={3}>
                <Typography>
                Are you sure you want to delete this listing?
                </Typography>
                <Button onClick={() => {
                    fetch(`http://localhost:5000/listings/${data._id}`, {
                        method: 'DELETE',
                    }).then((res) => {
                        navigate(0)   
                    })
                }}>
                    YES
                </Button>
                </Grid> :
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={style}>
                    <Grid item xs={4} style={{textAlign: "center"}}>
        <h5 style={{fontSize: "14px", color: 'black'}}>
          Contact us:
        </h5>
        <h6 style={{fontSize: "14px", color: 'black'}}>
          Phone: (+971) 2 444 79 79
        </h6>
        <h6 style={{fontSize: "14px", color: 'black'}}>
          Mobile: (+971) 50 512 14 21
        </h6>
        <h6 style={{fontSize: "14px", color: 'black'}}>
          Email: wael@carfairdeal.com
        </h6>
      </Grid>
                            <Grid item xs={6} md={3}>
                        <h4 style={{marginLeft: "1%", marginTop: '2%', color: 'black'}}>
                            Customer Information
                        </h4>
                    <FormControl variant="standard" style={style02}>
                    <InputLabel htmlFor="Name" style={style02}>
                        Name
                    </InputLabel>
                    <Input
                        id="Name"
                        name="Name"
                        InputLabelProps={{style: {fontSize: 15}}}
                        value={formik.values.Name}
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
                    <Grid item md={12} style={{textAlign: "center"}}>
                        <Button sx={{ m: 1, minWidth: 200, backgroundColor: "#ff8b3d" }} color="primary" variant="contained" type="submit">
                        Submit
                        </Button>
                    </Grid>
                    </Box>
                </form>
                }
                </Box>
              </Modal>
            </CardActions>
            </Card>
        </ThemeProvider>
      );
    };
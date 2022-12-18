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



export default function Homepage() {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });
      const navigate = useNavigate();
      const navigateToForm = () => {
        navigate('/car-valuation');
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <ResponsiveAppBar />
            <div style={{ backgroundImage: 'url("/images/vroom.jpg")', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", display: "grid", placeItems: "center", width:"60%", alignContent: "center", margin: "auto", paddingLeft:"5%", paddingTop: "5%", paddingBottom: "6%", paddingRight: "5%"}}>
                <h1 style={{fontSize: "40px"}}>
                    Are you ready to sell? 
                </h1>
                <Button variant="contained" style={{fontSize: "15px", color: "white", border: "1px solid white", marginTop: "5%", backgroundColor: "rgb(14, 6, 58)"}} onClick={navigateToForm}>Instant Valuation</Button>
                
            </div>
            <Container >
                <h1 style={{color: "White", fontSize: "25px", textAlign: "center"}}>
                    Convert your Ride into Revenue in just three easy steps
                </h1>
                <Grid container spacing={0} style={{marginTop: "15px"}}>
                    <Grid item xs={4} md={4}>
                        <Card style={{ width:"275px", backgroundColor: "black", justifyContent: "center"}}>
                            <CardMedia
                            component="img"
                            image="/images/valuation.png" 
                            style={{filter: "invert()", width: "150px", justifyContent: "center", marginLeft: "25%"}}
                            />
                            <CardContent>
                                <h1 style={{fontSize: "25px", textAlign: "left", textAlign: "center"}}>
                                    Online Valuation
                                </h1>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Card style={{ width:"300px", backgroundColor: "black", justifyContent: "center"}}>
                            <CardMedia
                            component="img"
                            image="/images/caliii.png" 
                            style={{filter: "invert()", width: "150px", justifyContent: "center", marginLeft: "25%"}}
                            />
                            <CardContent>
                                <h1 style={{fontSize: "25px", textAlign: "left", textAlign: "center"}}>
                                    Make an Appointment
                                </h1>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Card style={{ width:"275px", backgroundColor: "black", justifyContent: "center"}}>
                            <CardMedia
                            component="img"
                            image="/images/car.png" 
                            style={{filter: "invert()", width: "150px", justifyContent: "center", marginLeft: "25%"}}
                            />
                            <CardContent>
                                <h1 style={{fontSize: "25px", textAlign: "left", textAlign: "center"}}>
                                    Online Valuation
                                </h1>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Container style={{backgroundColor: "rgb(14, 6, 58)", padding: "30px", marginTop:"50px", borderRadius: "50px"}}>
                <Typography component="div" variant="h6" style={{textAlign: "center"}}>
                    WHY YOU SHOULD NOT BE HESITANT WHEN YOU CHOOSE US?
                </Typography>
                <Typography variant="caption" display="block" gutterBottom style={{textAlign: "center"}}>
                    Choose us and enjoy the ultimate goals of selling your car.
                </Typography>
            <Grid container spacing={0} style={{marginTop: "15px"}}>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: "flex" }} style={{backgroundColor: "transparent"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            
                            image="/images/timer.png"
                            style={{filter: "invert()", height: "90px", marginTop: "2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        Quick
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        We buy your car in no more than than 30 minutes.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "transparent"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image="/images/scales.png"
                            style={{filter: "invert()", height: "90px", marginTop: "2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        Fair Price
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        We will offer you a fairer price than others.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "transparent"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image="/images/short-term.png"
                            style={{filter: "invert()", height: "90px", marginTop: "2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        Instant
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Get your payment immediately via the method that you prefer cash, bank transfer or cheque
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "transparent"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image="/images/shield.png"
                            style={{filter: "invert()", height: "100px", marginTop: "2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        Safe
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        The ownership of your car is transferred swiftly without causing any disruptions
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "transparent"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image="/images/valuuu.png"
                            style={{filter: "invert()", height: "100px", marginTop: "2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        Valuation
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Enjoy a free, instant and perfect online valuation.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "transparent"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image="/images/inspection.png"
                            style={{filter: "invert()", height: "100px", marginTop: "2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        Free Inspection
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Your car will be inspected freely.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "transparent"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image="/images/car-loan.png"
                            style={{filter: "invert()", height: "100px", marginTop: "2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        Mortgage
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Your financed auto is not a problem; we will deal with such case smoothly.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "transparent"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 100 }}
                            image="/images/agreement.png"
                            style={{filter: "invert()", height: "100px", marginTop: "2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        Any Condition
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Your car is accepted anyway, whether it is brand new, second hand or very old car.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <br />
            <br />
            <Footer />
            
        </ThemeProvider>

    )
}

import { Box, Button } from '@mui/material';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
import ResponsiveAppBar from '../components/Navbar';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
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

      const navigateToForm01 = () => {
        navigate('/car-sale');
    };
    return (
        <ThemeProvider theme={darkTheme}>
            <ResponsiveAppBar />
            <div className="shadow" style={{ backgroundImage: 'url("/images/vroom.jpg")', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", display: "grid", placeItems: "center", width:"60%", alignContent: "center", margin: "auto", paddingLeft:"5%", paddingTop: "5%", paddingBottom: "6%", paddingRight: "5%"}}>
                <h1 style={{fontSize: "40px"}}>
                    Are you ready to sell? 
                </h1>
                <Button variant="contained" style={{fontSize: "15px", color: "white", border: "1px solid white", marginTop: "5%", backgroundColor: "orange", width: "200px"}} onClick={navigateToForm}>Instant Valuation</Button>
                <Button variant="contained" style={{fontSize: "15px", color: "white", border: "1px solid white", marginTop: "1%", backgroundColor: "orange", width: "200px"}} onClick={navigateToForm01}>Instant Sale</Button>
                
            </div>
            <Container >
                <h1 style={{color: "White", fontSize: "25px", textAlign: "center", marginTop: 25}}>
                    Convert your Ride into Revenue in just three easy steps
                </h1>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 25}}>
                    
                        <Card style={{ width:"275px", paddingTop: 15, justifyContent: "center"}}>
                            <CardMedia
                            component="img"
                            image="/images/valuation.png" 
                            style={{filter: "invert()", width: "120px", justifyContent: "center", marginLeft: "25%"}}
                            />
                            <CardContent>
                                <h1 style={{fontSize: "25px", textAlign: "center"}}>
                                    Online Valuation
                                </h1>
                            </CardContent>
                        </Card>
               
                        <Card style={{ width:"300px", paddingTop: 15, justifyContent: "center"}}>
                            <CardMedia
                            component="img"
                            image="/images/caliii.png" 
                            style={{filter: "invert()", width: "120px", justifyContent: "center", marginLeft: "25%"}}
                            />
                            <CardContent>
                                <h1 style={{fontSize: "25px", textAlign: "center"}}>
                                    Make an Appointment
                                </h1>
                            </CardContent>
                        </Card>
               
        
                        <Card style={{ width:"275px", paddingTop: 15, justifyContent: "center"}}>
                            <CardMedia
                            component="img"
                            image="/images/car.png" 
                            style={{filter: "invert()", width: "158px", justifyContent: "center", marginLeft: "25%"}}
                            />
                            <CardContent>
                                <h1 style={{fontSize: "25px", textAlign: "center"}}>
                                    Online Valuation
                                </h1>
                            </CardContent>
                        </Card>
              
                </div>
            </Container>
            <Container style={{padding: "30px", marginTop:"50px"}}>
                <Typography component="div" variant="h6" style={{textAlign: "center"}}>
                    WHY YOU SHOULD NOT BE HESITANT WHEN YOU CHOOSE US?
                </Typography>
                <Typography variant="caption" display="block" gutterBottom style={{textAlign: "center"}}>
                    Choose us and enjoy the ultimate goals of selling your car.
                </Typography>
            <Grid container spacing={0} style={{marginTop: "15px"}}>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: "flex" }} style={{backgroundColor: "rgba(3, 17, 31)"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 70 }}
                            
                            image="/images/timer.png"
                            style={{filter: "invert()", height: "70px", marginTop: "2%", marginLeft:"2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography style={{fontSize: "20px"}} variant="body1" gutterBottom>
                                        Quick
                                    </Typography>
                                    <Typography style={{fontSize: "15px"}} variant="body1" gutterBottom>
                                        We buy your car in no more than than 30 minutes.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "rgba(3, 17, 31)"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 70 }}
                            image="/images/scales.png"
                            style={{filter: "invert()", height: "70px", marginTop: "2%", marginLeft:"2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography style={{fontSize: "20px"}} variant="body1" gutterBottom>
                                        Fair Price
                                    </Typography>
                                    <Typography style={{fontSize: "15px"}} variant="body1" gutterBottom>
                                        We will offer you a fairer price than others.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "rgba(3, 17, 31)"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 70 }}
                            image="/images/short-term.png"
                            style={{filter: "invert()", height: "70px", marginTop: "2%", marginLeft:"2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography style={{fontSize: "20px"}} variant="body1" gutterBottom>
                                        Instant
                                    </Typography>
                                    <Typography style={{fontSize: "15px"}} variant="body1" gutterBottom>
                                        Get your payment immediately via the method that you prefer cash, bank transfer or cheque
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "rgba(3, 17, 31)"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 70 }}
                            image="/images/shield.png"
                            style={{filter: "invert()", height: "70px", marginTop: "2%", marginLeft:"2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography style={{fontSize: "20px"}} variant="body1" gutterBottom>
                                        Safe
                                    </Typography>
                                    <Typography style={{fontSize: "15px"}} variant="body1" gutterBottom>
                                        The ownership of your car is transferred swiftly without causing any disruptions
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "rgba(3, 17, 31)"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 70 }}
                            image="/images/valuuu.png"
                            style={{filter: "invert()", height: "70px", marginTop: "2%", marginLeft:"2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography style={{fontSize: "20px"}} variant="body1" gutterBottom>
                                        Valuation
                                    </Typography>
                                    <Typography style={{fontSize: "15px"}} variant="body1" gutterBottom>
                                        Enjoy a free, instant and perfect online valuation.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "rgba(3, 17, 31)"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 70 }}
                            image="/images/inspection.png"
                            style={{filter: "invert()", height: "70px", marginTop: "2%", marginLeft:"2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography style={{fontSize: "20px"}} variant="body1" gutterBottom>
                                        Free Inspection
                                    </Typography>
                                    <Typography style={{fontSize: "15px"}} variant="body1" gutterBottom>
                                        Your car will be inspected freely.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "rgba(3, 17, 31)"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 70 }}
                            image="/images/car-loan.png"
                            style={{filter: "invert()", height: "70px", marginTop: "2%", marginLeft:"2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography style={{fontSize: "20px"}} variant="body1" gutterBottom>
                                        Mortgage
                                    </Typography>
                                    <Typography style={{fontSize: "15px"}} variant="body1" gutterBottom>
                                        Your financed auto is not a problem; we will deal with such case smoothly.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <Card sx={{ display: 'flex' }} style={{backgroundColor: "rgba(3, 17, 31)"}}>
                            <CardMedia
                            component="img"
                            sx={{ width: 70 }}
                            image="/images/agreement.png"
                            style={{filter: "invert()", height: "70px", marginTop: "2%", marginLeft:"2%"}}
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography style={{fontSize: "20px"}} variant="body1" gutterBottom>
                                        Any Condition
                                    </Typography>
                                    <Typography style={{fontSize: "15px"}} variant="body1" gutterBottom>
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

import { Container, Grid, Stack, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { React } from 'react';
import ResponsiveAppBar from '../components/Navbar';
import { AuthContext } from '../context/AuthProvider';
import {useEffect, useState, useContext} from 'react';
import AuctionCard from '../components/AuctionCard';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomTable from '../components/CustomTable';
import AuctionTimer from '../components/AuctionTimer';
import moment from 'moment';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import Box from '@mui/material/Box';
import CustomBid from '../components/CustomBid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Carousel from 'react-img-carousel';

require('react-img-carousel/lib/carousel.css');


const AuctionPage = () => {
  const {auth} = useContext(AuthContext);
  const [auction, setAuction] = useState({Bids: []})
  const [vehicle, setVehicle] = useState(null)
  const [bid, setBid] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();


  const fetchAuction = () => {
    fetch(`http://backend.carfairdeal.com/auction/${location.pathname.split("/")[2]}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setAuction(data.response)
      })
    }

    const {userInfo} = useContext(AuthContext);

    const fetchData = () => {
        fetch(`http://backend.carfairdeal.com/inspection/${auction?.Vehicle_Id}`)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setVehicle(data.data)
        })
      }

  useEffect(()=>{
      /* const userInfo = localStorage.getItem('userInfo')
      if (JSON.parse(userInfo).status == "Inactive") {
        toast("Account not activated yet");
        navigate('/');
      } */
      if (auction) {
        fetchData();
      } 
      fetchAuction();
  },[auction])

  const darkTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ff8b3d',
      },
    },
  });


    
  return (
    <ThemeProvider theme={darkTheme}>
    <Container >
      <Grid container>
      <img src={"/images/cfd.png"} width="100" alt="Logo" marginTop={"3%"} />
      </Grid>
          <Grid container marginTop={"3%"}>
            <h2>
              Auction Page
            </h2>
          </Grid>
        {
          auction ? <AuctionCard data={auction} /> : <></>
        }
        <Grid>
        {vehicle && <Carousel  cellPadding={ 5 }>
          {
            vehicle.Images.map((x) => {
              return <img src={`http://backend.carfairdeal.com/images/${x}`} />
            })
          }
        </Carousel>}
        </Grid>
        <Grid>
            {
                vehicle ? 
                <>
                <CustomTable header={"General Details"} icon={"protection"} values={[
                    {"Vehicle Manufacturer": [vehicle?.Vehicle_Manufacturer]},
                    {"Model": [vehicle?.Model]},
                    {"Manufacturing Year": [vehicle?.Manufacturing_Year]},
                    {"Year Of Registration": [vehicle?.Year_Of_Registration]},
                    {"Color": [vehicle?.Color]},
                    {"Chassis Number": [vehicle?.Chassis_Number]},
                    {"Registration Number": [vehicle?.Registration_Number]},
                    {"Engine Number": [vehicle?.Engine_Number]},
                ]} />
                <CustomTable header={"Vehicle Information"}  icon={"cluster"} values={[
          {"Trim": [vehicle?.Vehicle_Information?.Trim]},
          {"Body Type": [vehicle?.Vehicle_Information?.Body_Type?.Value,vehicle?.Vehicle_Information?.Body_Type?.Comment]},
          {"Options": [vehicle?.Vehicle_Information?.Options?.Value,vehicle?.Vehicle_Information?.Options?.Comment]},
          {"Odometer": [vehicle?.Vehicle_Information?.Odometer]},
          {"Regional Specs": [vehicle?.Vehicle_Information?.Regional_Specs?.Value,vehicle?.Vehicle_Information?.Regional_Specs?.Comment]},
          {"Bank Finance": [vehicle?.Vehicle_Information?.Bank_Finance?.Value,vehicle?.Vehicle_Information?.Bank_Finance?.Comment]},
          {"User Type": [vehicle?.Vehicle_Information?.User_Type?.Value,vehicle?.Vehicle_Information?.User_Type?.Comment]},
          {"Service History": [vehicle?.Vehicle_Information?.Service_History?.Value,vehicle?.Vehicle_Information?.Service_History?.Comment]},
          {"Service Type": [vehicle?.Vehicle_Information?.Service_Type?.Value,vehicle?.Vehicle_Information?.Service_Type?.Comment]},
          {"Number Of Owners": [vehicle?.Vehicle_Information?.Number_Of_Owners?.Value,vehicle?.Vehicle_Information?.Number_Of_Owners?.Comment]},
          {"Number Of Keys": [vehicle?.Vehicle_Information?.Number_Of_Keys?.Value,vehicle?.Vehicle_Information?.Number_Of_Keys?.Comment]},
          {"Number Of Seats": [vehicle?.Vehicle_Information?.Number_Of_Seats?.Value,vehicle?.Vehicle_Information?.Number_Of_Seats?.Comment]},
          {"Paint Condition": [vehicle?.Vehicle_Information?.Paint_Condition?.Value,vehicle?.Vehicle_Information?.Paint_Condition?.Comment]},
          {"Accident History": [vehicle?.Vehicle_Information?.Accident_History?.Value,vehicle?.Vehicle_Information?.Accident_History?.Comment]},
          {"Chassis": [vehicle?.Vehicle_Information?.Chassis?.Value,vehicle?.Vehicle_Information?.Chassis?.Comment]},
          {"Registered In UAE": [vehicle?.Vehicle_Information?.Registered_In_UAE?.Value,vehicle?.Vehicle_Information?.Registered_In_UAE?.Comment]},
          {"Engine Type": [vehicle?.Vehicle_Information?.Engine_Type?.Value,vehicle?.Vehicle_Information?.Engine_Type?.Comment]},
          {"Number Of Cylinders": [vehicle?.Vehicle_Information?.Number_Of_Cylinders?.Value,vehicle?.Vehicle_Information?.Number_Of_Cylinders?.Comment]},       
          {"Engine Capacity": [vehicle?.Vehicle_Information?.Engine_Capacity]},        
          {"Transmission Type": [vehicle?.Vehicle_Information?.Transmission_Type?.Value,vehicle?.Vehicle_Information?.Transmission_Type?.Comment]},
          {"Powertrain": [vehicle?.Vehicle_Information?.Powertrain?.Value,vehicle?.Vehicle_Information?.Powertrain?.Comment]}
        ]}
        pagination={false} />

<CustomTable header={"Left"} icon={"coupeCar2"} values={[
           {"Front Fender": [vehicle?.Car_Exterior?.Left_Side_Body_Details?.Front_Fender?.Condition,vehicle?.Car_Exterior?.Left_Side_Body_Details?.Front_Fender?.Value,vehicle?.Car_Exterior?.Left_Side_Body_Details?.Front_Fender?.Comment]},
           {"Front Door": [vehicle?.Car_Exterior?.Left_Side_Body_Details?.Front_Door?.Condition,vehicle?.Car_Exterior?.Left_Side_Body_Details?.Front_Door?.Value,vehicle?.Car_Exterior?.Left_Side_Body_Details?.Front_Door?.Comment]},
           {"Rear Door": [vehicle?.Car_Exterior?.Left_Side_Body_Details?.Rear_Door?.Condition,vehicle?.Car_Exterior?.Left_Side_Body_Details?.Rear_Door?.Value,vehicle?.Car_Exterior?.Left_Side_Body_Details?.Rear_Door?.Comment]},
           {"Rear Fender": [vehicle?.Car_Exterior?.Left_Side_Body_Details?.Rear_Fender?.Condition,vehicle?.Car_Exterior?.Left_Side_Body_Details?.Rear_Fender?.Value,vehicle?.Car_Exterior?.Left_Side_Body_Details?.Rear_Fender?.Comment]}, 
        ]} pagination={false}/> 
        <CustomTable header={"Right"} icon={"coupeCar"} values={[
          {"Front Fender": [vehicle?.Car_Exterior?.Right_Side_Body_Details?.Front_Fender?.Condition,vehicle?.Car_Exterior?.Right_Side_Body_Details?.Front_Fender?.Value,vehicle?.Car_Exterior?.Right_Side_Body_Details?.Front_Fender?.Comment]},
          {"Front Door": [vehicle?.Car_Exterior?.Right_Side_Body_Details?.Front_Door?.Condition,vehicle?.Car_Exterior?.Right_Side_Body_Details?.Front_Door?.Value,vehicle?.Car_Exterior?.Right_Side_Body_Details?.Front_Door?.Comment]},
          {"Rear Door": [vehicle?.Car_Exterior?.Right_Side_Body_Details?.Rear_Door?.Condition,vehicle?.Car_Exterior?.Right_Side_Body_Details?.Rear_Door?.Value,vehicle?.Car_Exterior?.Right_Side_Body_Details?.Rear_Door?.Comment]},
          {"Rear Fender": [vehicle?.Car_Exterior?.Right_Side_Body_Details?.Rear_Fender?.Condition,vehicle?.Car_Exterior?.Right_Side_Body_Details?.Rear_Fender?.Value,vehicle?.Car_Exterior?.Right_Side_Body_Details?.Rear_Fender?.Comment]},
        ]} pagination={false}/>
        <CustomTable header={"Middle"} icon={"coupeCar3"} values={[
          {"Front Bumper": [vehicle?.Car_Exterior?.Middle_Body_Details?.Front_Bumper?.Condition,vehicle?.Car_Exterior?.Middle_Body_Details?.Front_Bumper?.Value,vehicle?.Car_Exterior?.Middle_Body_Details?.Front_Bumper?.Comment]},
          {"Show Grill": [vehicle?.Car_Exterior?.Middle_Body_Details?.Show_Grill?.Condition,vehicle?.Car_Exterior?.Middle_Body_Details?.Show_Grill?.Value,vehicle?.Car_Exterior?.Middle_Body_Details?.Show_Grill?.Comment]},
          {"Hood": [vehicle?.Car_Exterior?.Middle_Body_Details?.Hood?.Condition,vehicle?.Car_Exterior?.Middle_Body_Details?.Hood?.Value,vehicle?.Car_Exterior?.Middle_Body_Details?.Hood?.Comment]},
          {"Roof": [vehicle?.Car_Exterior?.Middle_Body_Details?.Roof?.Condition,vehicle?.Car_Exterior?.Middle_Body_Details?.Roof?.Value,vehicle?.Car_Exterior?.Middle_Body_Details?.Roof?.Comment]},
          {"Trunk Or Tailgate": [vehicle?.Car_Exterior?.Middle_Body_Details?.Trunk_Or_Tailgate?.Condition,vehicle?.Car_Exterior?.Middle_Body_Details?.Trunk_Or_Tailgate?.Value,vehicle?.Car_Exterior?.Middle_Body_Details?.Trunk_Or_Tailgate?.Comment]},
          {"Rear Bumper": [vehicle?.Car_Exterior?.Middle_Body_Details?.Rear_Bumper?.Condition,vehicle?.Car_Exterior?.Middle_Body_Details?.Rear_Bumper?.Value,vehicle?.Car_Exterior?.Middle_Body_Details?.Rear_Bumper?.Comment]},
        ]} pagination={false}/>
        <CustomTable header={"Glasses"} icon={"windscreen"} values={[
          {"Left Front Window": [vehicle?.Car_Exterior?.Glasses?.Left_Front_Window?.Condition,vehicle?.Car_Exterior?.Glasses?.Left_Front_Window?.Value,vehicle?.Car_Exterior?.Glasses?.Left_Front_Window?.Comment]},     
          {"Left Rear Window": [vehicle?.Car_Exterior?.Glasses?.Left_Rear_Window?.Condition,vehicle?.Car_Exterior?.Glasses?.Left_Rear_Window?.Value,vehicle?.Car_Exterior?.Glasses?.Left_Rear_Window?.Comment]},
          {"Right Front Window": [vehicle?.Car_Exterior?.Glasses?.Right_Front_Window?.Condition,vehicle?.Car_Exterior?.Glasses?.Right_Front_Window?.Value,vehicle?.Car_Exterior?.Glasses?.Right_Front_Window?.Comment]}, 
          {"Right Rear Window": [vehicle?.Car_Exterior?.Glasses?.Right_Rear_Window?.Condition,vehicle?.Car_Exterior?.Glasses?.Right_Rear_Window?.Value,vehicle?.Car_Exterior?.Glasses?.Right_Rear_Window?.Comment]},     
          {"Sun Or Moon Roof": [vehicle?.Car_Exterior?.Glasses?.Sun_Or_Moon_Roof?.Condition,vehicle?.Car_Exterior?.Glasses?.Sun_Or_Moon_Roof?.Value,vehicle?.Car_Exterior?.Glasses?.Sun_Or_Moon_Roof?.Comment]},
          {"Front Windshield": [vehicle?.Car_Exterior?.Glasses?.Front_Windshield?.Condition,vehicle?.Car_Exterior?.Glasses?.Front_Windshield?.Value,vehicle?.Car_Exterior?.Glasses?.Front_Windshield?.Comment]},
          {"Rear Windshield": [vehicle?.Car_Exterior?.Glasses?.Rear_Windshield?.Condition,vehicle?.Car_Exterior?.Glasses?.Rear_Windshield?.Value,vehicle?.Car_Exterior?.Glasses?.Rear_Windshield?.Comment]}, 
        ]} pagination={false}/>
        <CustomTable header={"Light and Mirrors"} icon={'light'} values={[
          {"Left Side View Mirror": [vehicle?.Car_Exterior?.Light_And_Mirrors?.Left_Side_View_Mirror?.Condition,vehicle?.Car_Exterior?.Light_And_Mirrors?.Left_Side_View_Mirror?.Value,vehicle?.Car_Exterior?.Light_And_Mirrors?.Left_Side_View_Mirror?.Comment]},
          {"Right Side View Mirror": [vehicle?.Car_Exterior?.Light_And_Mirrors?.Right_Side_View_Mirror?.Condition,vehicle?.Car_Exterior?.Light_And_Mirrors?.Right_Side_View_Mirror?.Value,vehicle?.Car_Exterior?.Light_And_Mirrors?.Right_Side_View_Mirror?.Comment]},
          {"Left Front Head Light": [vehicle?.Car_Exterior?.Light_And_Mirrors?.Left_Front_Head_Light?.Condition,vehicle?.Car_Exterior?.Light_And_Mirrors?.Left_Front_Head_Light?.Value,vehicle?.Car_Exterior?.Light_And_Mirrors?.Left_Front_Head_Light?.Comment]},
          {"Right Front Head Light": [vehicle?.Car_Exterior?.Light_And_Mirrors?.Right_Front_Head_Light?.Condition,vehicle?.Car_Exterior?.Light_And_Mirrors?.Right_Front_Head_Light?.Value,vehicle?.Car_Exterior?.Light_And_Mirrors?.Right_Front_Head_Light?.Comment]},
          {"Left Tail Light": [vehicle?.Car_Exterior?.Light_And_Mirrors?.Left_Tail_Light?.Condition,vehicle?.Car_Exterior?.Light_And_Mirrors?.Left_Tail_Light?.Value,vehicle?.Car_Exterior?.Light_And_Mirrors?.Left_Tail_Light?.Comment]},
          {"Right Tail Light": [vehicle?.Car_Exterior?.Light_And_Mirrors?.Right_Tail_Light?.Condition,vehicle?.Car_Exterior?.Light_And_Mirrors?.Right_Tail_Light?.Value,vehicle?.Car_Exterior?.Light_And_Mirrors?.Right_Tail_Light?.Comment]},          
        ]} pagination={false}/>
        <CustomTable header={"Rims"} icon={"rim"} values={[
          {"Front Left": [vehicle?.Car_Exterior?.Rims?.Front_Left?.Condition,vehicle?.Car_Exterior?.Rims?.Front_Left?.Value,vehicle?.Car_Exterior?.Rims?.Front_Left?.Comment]},
          {"Front Right": [vehicle?.Car_Exterior?.Rims?.Front_Right?.Condition,vehicle?.Car_Exterior?.Rims?.Front_Right?.Value,vehicle?.Car_Exterior?.Rims?.Front_Right?.Comment]},
          {"Rim Type": [vehicle?.Car_Exterior?.Rims?.Rim_Type?.Value,vehicle?.Car_Exterior?.Rims?.Rim_Type?.Comment]},
          {"Rear Left": [vehicle?.Car_Exterior?.Rims?.Rear_Left?.Condition,vehicle?.Car_Exterior?.Rims?.Rear_Left?.Value,vehicle?.Car_Exterior?.Rims?.Rear_Left?.Comment]},
          {"Rear Right": [vehicle?.Car_Exterior?.Rims?.Rear_Right?.Condition,vehicle?.Car_Exterior?.Rims?.Rear_Right?.Value,vehicle?.Car_Exterior?.Rims?.Rear_Right?.Comment]},
        ]} pagination={false}/>
        <CustomTable header={"Tyres"} icon={"tyres"} values={[
          {"Front Left": [vehicle?.Car_Exterior?.Tyres?.Front_Left?.Condition,vehicle?.Car_Exterior?.Tyres?.Front_Left?.Value,vehicle?.Car_Exterior?.Tyres?.Front_Left?.Comment]},
          {"Front Right": [vehicle?.Car_Exterior?.Tyres?.Front_Right?.Condition,vehicle?.Car_Exterior?.Tyres?.Front_Right?.Value,vehicle?.Car_Exterior?.Tyres?.Front_Right?.Comment]},
          {"Rear Left": [vehicle?.Car_Exterior?.Tyres?.Rear_Left?.Condition,vehicle?.Car_Exterior?.Tyres?.Rear_Left?.Value,vehicle?.Car_Exterior?.Tyres?.Rear_Left?.Comment]},
          {"Rear Right": [vehicle?.Car_Exterior?.Tyres?.Rear_Right?.Condition,vehicle?.Car_Exterior?.Tyres?.Rear_Right?.Value,vehicle?.Car_Exterior?.Tyres?.Rear_Right?.Comment]},
        ]} pagination={false}/>


<CustomTable header={"Interior Details"} icon={"carSeat"} values={[
          {"Seat Type": [vehicle?.Car_Interior?.Seat_Type?.Value,vehicle?.Car_Interior?.Seat_Type?.Comment]},
          {"Seats Condition": [vehicle?.Car_Interior?.Seats_Condition?.Condition,vehicle?.Car_Interior?.Seats_Condition?.Value,vehicle?.Car_Interior?.Seats_Condition?.Comment]},
          {"Seat Belt": [vehicle?.Car_Interior?.Seat_Belt?.Condition,vehicle?.Car_Interior?.Seat_Belt?.Value,vehicle?.Car_Interior?.Seat_Belt?.Comment]},
          {"Sun Or Moon Roof": [vehicle?.Car_Interior?.Sun_Or_Moon_Roof?.Condition,vehicle?.Car_Interior?.Sun_Or_Moon_Roof?.Value,vehicle?.Car_Interior?.Sun_Or_Moon_Roof?.Comment]},
          {"Convertible": [vehicle?.Car_Interior?.Convertible?.Condition,vehicle?.Car_Interior?.Convertible?.Value,vehicle?.Car_Interior?.Convertible?.Comment]},
          {"Steering Wheel": [vehicle?.Car_Interior?.Steering_Wheel?.Condition,vehicle?.Car_Interior?.Steering_Wheel?.Value,vehicle?.Car_Interior?.Steering_Wheel?.Comment]},
          {"Horn": [vehicle?.Car_Interior?.Horn?.Condition,vehicle?.Car_Interior?.Horn?.Value,vehicle?.Car_Interior?.Horn?.Comment]}, 
          {"Dashboard": [vehicle?.Car_Interior?.Dashboard?.Condition,vehicle?.Car_Interior?.Dashboard?.Value,vehicle?.Car_Interior?.Dashboard?.Comment]},
          {"AC Vents": [vehicle?.Car_Interior?.AC_Vents?.Condition,vehicle?.Car_Interior?.AC_Vents?.Value,vehicle?.Car_Interior?.AC_Vents?.Comment]},
          {"Gear knob": [vehicle?.Car_Interior?.Gear_knob?.Condition,vehicle?.Car_Interior?.Gear_knob?.Value,vehicle?.Car_Interior?.Gear_knob?.Comment]},
          {"Glovebox": [vehicle?.Car_Interior?.Glovebox?.Condition,vehicle?.Car_Interior?.Glovebox?.Value,vehicle?.Car_Interior?.Glovebox?.Comment]},
          {"Console Box": [vehicle?.Car_Interior?.Console_Box?.Condition,vehicle?.Car_Interior?.Console_Box?.Value,vehicle?.Car_Interior?.Console_Box?.Comment]},
          {"Roof Liner": [vehicle?.Car_Interior?.Roof_Liner?.Condition,vehicle?.Car_Interior?.Roof_Liner?.Value,vehicle?.Car_Interior?.Roof_Liner?.Comment]},
          {"Front Left Door": [vehicle?.Car_Interior?.Door_Trim_Or_Switches?.Front_Left_Door?.Condition,vehicle?.Car_Interior?.Door_Trim_Or_Switches?.Front_Left_Door?.Value,vehicle?.Car_Interior?.Door_Trim_Or_Switches?.Front_Left_Door?.Comment]},
          {"Front Right Door": [vehicle?.Car_Interior?.Door_Trim_Or_Switches?.Front_Right_Door?.Condition,vehicle?.Car_Interior?.Door_Trim_Or_Switches?.Front_Right_Door?.Value,vehicle?.Car_Interior?.Door_Trim_Or_Switches?.Front_Right_Door?.Comment]},
          {"Rear Left Door": [vehicle?.Car_Interior?.Door_Trim_Or_Switches?.Rear_Left_Door?.Condition,vehicle?.Car_Interior?.Door_Trim_Or_Switches?.Rear_Left_Door?.Value,vehicle?.Car_Interior?.Door_Trim_Or_Switches?.Rear_Left_Door?.Comment]},
          {"Rear Right Door": [vehicle?.Car_Interior?.Door_Trim_Or_Switches?.Rear_Right_Door?.Condition,vehicle?.Car_Interior?.Door_Trim_Or_Switches?.Rear_Right_Door?.Value,vehicle?.Car_Interior?.Door_Trim_Or_Switches?.Rear_Right_Door?.Comment]},
          {"Cluster": [vehicle?.Car_Interior?.Cluster_And_Warning_Lights?.Cluster?.Condition,vehicle?.Car_Interior?.Cluster_And_Warning_Lights?.Cluster?.Value,vehicle?.Car_Interior?.Cluster_And_Warning_Lights?.Cluster?.Comment]}, 
          {"Warning Lights": [vehicle?.Car_Interior?.Cluster_And_Warning_Lights?.Warning_Lights?.Condition,vehicle?.Car_Interior?.Cluster_And_Warning_Lights?.Warning_Lights?.Value,vehicle?.Car_Interior?.Cluster_And_Warning_Lights?.Warning_Lights?.Comment]},
        ]}
        pagination={false}/>
        <CustomTable header={"Driving Conditions"} icon={"generalDrivingCondition"} values={[
          {"Air Conditioning": [vehicle?.General_Driving_Condition?.Air_Conditioning?.Condition,vehicle?.General_Driving_Condition?.Air_Conditioning?.Value,vehicle?.General_Driving_Condition?.Air_Conditioning?.Comment]},
          {"Engine": [vehicle?.General_Driving_Condition?.Engine?.Condition,vehicle?.General_Driving_Condition?.Engine?.Value,vehicle?.General_Driving_Condition?.Engine?.Comment]},
          {"Transmission": [vehicle?.General_Driving_Condition?.Transmission?.Condition,vehicle?.General_Driving_Condition?.Transmission?.Value,vehicle?.General_Driving_Condition?.Transmission?.Comment]},
          {"Turbo Or Supercharger": [vehicle?.General_Driving_Condition?.Turbo_Or_Supercharger?.Condition,vehicle?.General_Driving_Condition?.Turbo_Or_Supercharger?.Value,vehicle?.General_Driving_Condition?.Turbo_Or_Supercharger?.Comment]},
          {"Steering": [vehicle?.General_Driving_Condition?.Steering?.Condition,vehicle?.General_Driving_Condition?.Steering?.Value,vehicle?.General_Driving_Condition?.Steering?.Comment]},
          {"Braking System": [vehicle?.General_Driving_Condition?.Braking_System?.Condition,vehicle?.General_Driving_Condition?.Braking_System?.Value,vehicle?.General_Driving_Condition?.Braking_System?.Comment]},
          {"Shock Absorbers": [vehicle?.General_Driving_Condition?.Shock_Absorbers?.Condition,vehicle?.General_Driving_Condition?.Shock_Absorbers?.Value,vehicle?.General_Driving_Condition?.Shock_Absorbers?.Comment]},
          {"Rubber Or Bushes": [vehicle?.General_Driving_Condition?.Rubber_Or_Bushes?.Condition,vehicle?.General_Driving_Condition?.Rubber_Or_Bushes?.Value,vehicle?.General_Driving_Condition?.Rubber_Or_Bushes?.Comment]},
          {"Drive Axles": [vehicle?.General_Driving_Condition?.Drive_Axles?.Condition,vehicle?.General_Driving_Condition?.Drive_Axles?.Value,vehicle?.General_Driving_Condition?.Drive_Axles?.Comment]},
          {"Distronic": [vehicle?.General_Driving_Condition?.Drive_Assist?.Distronic?.Value,vehicle?.General_Driving_Condition?.Drive_Assist?.Distronic?.Comment]},
          {"Lane Change": [vehicle?.General_Driving_Condition?.Drive_Assist?.Lane_Change?.Value,vehicle?.General_Driving_Condition?.Drive_Assist?.Lane_Change?.Comment]},
          {"Blindspot": [vehicle?.General_Driving_Condition?.Drive_Assist?.Blindspot?.Value,vehicle?.General_Driving_Condition?.Drive_Assist?.Blindspot?.Comment]},
          {"Front Sensor": [vehicle?.General_Driving_Condition?.Park_Assist?.Front_Sensor?.Value,vehicle?.General_Driving_Condition?.Park_Assist?.Front_Sensor?.Comment]},
          {"Front Camera": [vehicle?.General_Driving_Condition?.Park_Assist?.Front_Camera?.Value,vehicle?.General_Driving_Condition?.Park_Assist?.Front_Camera?.Comment]},
          {"Rear Sensor": [vehicle?.General_Driving_Condition?.Park_Assist?.Rear_Sensor?.Value,vehicle?.General_Driving_Condition?.Park_Assist?.Rear_Sensor?.Comment]},
          {"Rear Camera": [vehicle?.General_Driving_Condition?.Park_Assist?.Rear_Camera?.Value,vehicle?.General_Driving_Condition?.Park_Assist?.Rear_Camera?.Comment]},
          {"Left Camera": [vehicle?.General_Driving_Condition?.Park_Assist?.Left_Camera?.Value,vehicle?.General_Driving_Condition?.Park_Assist?.Left_Camera?.Comment]},
          {"Right Camera": [vehicle?.General_Driving_Condition?.Park_Assist?.Right_Camera?.Value,vehicle?.General_Driving_Condition?.Park_Assist?.Right_Camera?.Comment]},
        ]} 
        pagination={false}/>
        
        <CustomTable header={"Technical Conditions"} icon={"warningLights"} values={[
          {"Engine Condition": [vehicle?.Technical_Condition?.Engine_Condition?.Condition,vehicle?.Technical_Condition?.Engine_Condition?.Value,vehicle?.Technical_Condition?.Engine_Condition?.Comment]},
          {"Transmission Condition": [vehicle?.Technical_Condition?.Transmission_Condition?.Condition,vehicle?.Technical_Condition?.Transmission_Condition?.Value,vehicle?.Technical_Condition?.Transmission_Condition?.Comment]},
          {"Sign Of Leakages": [vehicle?.Technical_Condition?.Sign_Of_Leakages?.Condition,vehicle?.Technical_Condition?.Sign_Of_Leakages?.Value,vehicle?.Technical_Condition?.Sign_Of_Leakages?.Comment]},
          {"Exhaust": [vehicle?.Technical_Condition?.Exhaust?.Condition,vehicle?.Technical_Condition?.Exhaust?.Value,vehicle?.Technical_Condition?.Exhaust?.Comment]},
        ]} 
        pagination={false}/>
                </>
                 : null
            }
        </Grid>
    </Container>
    <Footer/>
    </ThemeProvider>
  )
}

export default AuctionPage
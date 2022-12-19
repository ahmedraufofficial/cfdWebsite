import React from 'react'
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import moment from 'moment';
import AuctionTimer from './AuctionTimer';
import CustomBid from './CustomBid';
import { AuthContext } from '../context/AuthProvider';
import { useContext } from 'react';
import Alert from '@mui/material/Alert';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

const AuctionCard = ({data}) => {

    const {userInfo} = useContext(AuthContext);
    
    const [auction, setAuction] = useState(data)
    const [bid, setBid] = useState(null);
    
    const getAuction = async () => {
        fetch(`http://localhost:5000/auction/${auction?._id}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setAuction(data.response)
        })
    }

    useEffect(() => {
        let auctionInterval = setTimeout(getAuction, 1000);
        return () => {
            clearInterval(auctionInterval);
        }
    }, [auction]);

    const startingTime = moment(auction?.Auction_Start_Date).format("YYYY-MM-DD")+"T"+auction?.Auction_Start_Time+":00"
    const endTime = new Date(startingTime).getTime() + 60000 * parseInt(auction.Total_Bidding_Duration || 10); 
    const [timeLeft, setEndTime] = AuctionTimer(endTime, auction);

    const minutes = Math.floor(timeLeft / 60000) % 60;
    const seconds = Math.floor(timeLeft / 1000) % 60;
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);

    const handleTextFieldChange = (e) => {
        setBid(e.target.value)
    }

    return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography style={{marginTop: 10, fontSize: 15}}>{auction?.Vehicle_Title}</Typography>
          <Typography style={{marginTop: 10, fontSize: 15}}>
            { auction?.Bids.length > 0 ? auction?.Bids[auction?.Bids?.length - 1].user === userInfo.username ? <Typography sx={{color: "green", fontSize: 15}}><ArrowDropUpIcon fontSize="small" color='success'/>Bid</Typography> : <Typography sx={{color: "red", fontSize: 15}}><ArrowDropDownIcon fontSize="small" color='danger'/>Bid</Typography> : null}
          </Typography>
          <Typography style={{marginTop: 10, fontSize: 15, color: 'green'}}>{`Current Bid: ${auction?.Current_Bid} ${auction?.Currency}`}</Typography>
          <Typography style={{marginTop: 10, fontSize: 15}}>
          { auction.Status === 'Pre-Negotiation' ? <Typography sx={{color: "green", fontSize: 15}}><TimelapseIcon color='success' fontSize="small"/>Active</Typography> : null }
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
        { auction.Status === 'Pre-Negotiation' ? 
            <Typography style={{fontSize: 12}}>
                Time Left: 
                <Typography style={{fontSize: 12, color: "white"}}> {String(hours).length > 1 ? hours: `0${hours}`} : {String(minutes).length > 1 ? minutes: `0${minutes}`} : {String(seconds).length > 1 ? seconds : `0${seconds}`}</Typography>
            </Typography>  :
            <Typography style={{fontSize: 12, color: "red"}}>
                Auction Completed
            </Typography>
        }
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 2, pb: 1 }}>
      {auction.Status === 'Pre-Negotiation' ? <>
        <TextField
            value={bid}
            onChange={handleTextFieldChange}
            mode='outlined'
            keyboardType='numeric'
            label="Custom Bid"
            variant="outlined" 
        />
        <Button variant="contained" sx={{marginLeft: 1}} onClick={() => {
             !(parseInt(bid) > 0) ? 
                toast(<Alert severity="error">
                Re-check Bid. Bid value is incorrect or 0
                </Alert>)
                :
                parseInt(bid) < parseInt(auction?.Current_Bid) ? 
                toast(<Alert severity="error">
                    Re-check Bid. Bid value is less than the current bid
                </Alert>)
                :
                parseInt(bid) < parseInt(auction?.Current_Bid) + parseInt(auction?.Set_Incremental_Price) ? 
                toast(<Alert severity="error">
                {`Bid value should be greater than ${parseInt(auction?.Current_Bid || 0) + parseInt(auction?.Set_Incremental_Price) - 1}`}
                </Alert>)
                :
                (parseInt(bid) % parseInt(auction?.Set_Incremental_Price)) != 0 ? 
                toast(<Alert severity="error">
                {`Bid value should be in multiples of ${parseInt(auction?.Set_Incremental_Price)}`}
                </Alert>)
                :
                !(auction?.Bids.length > 0) ? 
                toast(<Alert
                    action={
                        <Button color="inherit" size="small" onClick={()=>{
                            CustomBid( auction, setEndTime, parseInt(bid), setAuction, userInfo.username);
                            setBid(null);
                            getAuction();
                        }}>
                        Yes
                        </Button>
                    }
                >
                {`You are about to bid ${bid} ${auction?.Currency}, confirm?`}
                </Alert>)
                :
                auction?.Bids[auction?.Bids?.length - 1].user === userInfo.username ? 
                toast(<Alert
                    action={
                        <Button color="inherit" size="small" onClick={()=>{
                            CustomBid( auction, setEndTime, parseInt(bid), setAuction, userInfo.username);
                            setBid(null);
                            getAuction();
                        }}>
                        Yes
                        </Button>
                    }
                >
                {`You are already the highest bidder. Do you still want to bid ${bid} ${auction?.Currency}?`}
                </Alert>)
                :
                toast(<Alert
                    action={
                        <Button color="inherit" size="small" onClick={()=>{
                            CustomBid( auction, setEndTime, parseInt(bid), setAuction, userInfo.username);
                            setBid(null);
                            getAuction();
                        }}>
                        Yes
                        </Button>
                    }
                >
                {`You are about to bid ${bid} ${auction?.Currency}, confirm?`}
                </Alert>) 
              }}>
                BID
              </Button> 
              </>:null}
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
        alt="Live from space album cover"
      />
    </Card>
      );
}

export default AuctionCard
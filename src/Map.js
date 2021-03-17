import React, { useState } from 'react';
import "./Map.css";
import {Map as LeafletMap, TileLayer} from "react-leaflet";
import {showDataOnMap}  from "./Utils";
import {FormControl, Hidden, makeStyles, MenuItem, Select, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container:{
    position: "relative",
    display:"flex",
    flexDirection: "column",
    width:"100%",
    height:250,
    background:' url("https://ourworldindata.org/app/uploads/2021/01/covid-policy-responses-768x404.png")',
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat", 
    backgroundAttachment: "fixed",
    [theme.breakpoints.down('md')]:{
      height:"10vh",
},
},
heading:{
  position: "relative",
  zIndex: 2,
  fontFamily: "sans-serif",
  color: "#fff",
  textAlign:"center",
  fontSize:50,
  paddingTop:theme.spacing(15),
  fontWeight:700,
  color:"#448aff",
[theme.breakpoints.down('xs')]:{
  display:"none",
},   
},
    input:{
       
        background:theme.palette.grey[100],
        width:330,
        color:"blue",
        textAlign:"left",
        margin:theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
        background:theme.palette.grey[100],
        width:120,
         padding:theme.spacing(0),
         textAlign:"left",
         height:50,
     
    
         
        },
      },
      map:{
        [theme.breakpoints.down('xs')]:{
          width:"96%",
        } 
      },
      div:{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between",  
      },
      Name:{
        marginTop:theme.spacing(5),
        marginLeft:theme.spacing(3),

        [theme.breakpoints.down('md')]: {
             color:theme.palette.grey[500],
           fontSize:"18px",
         
        
             
            },
     
      }

}))

const Map = ({countries,center,zoom}) => {
   
    const[casesType,setcasesType] = useState('cases');
    const classes = useStyles()
  
    return (
      <>
         <div className={classes.container}>
       <div className="overlay"></div>
       <Hidden only="sm">
        <Typography  className={classes.heading} variant="h4"> MAP</Typography>
        </Hidden>
       </div>
           <div className={classes.div}>
           <Typography  className={classes.Name} variant="h5">Currently displayed</Typography>
         <FormControl className={classes.input}>
          <Select 
          variant="outlined"
          value={casesType}
           >
        <MenuItem  value="cases" onClick={e => setcasesType('cases')}>Cases</MenuItem>
        <MenuItem value="recovered" onClick={e => setcasesType('recovered')}>Recovered</MenuItem>
        <MenuItem value="deaths" onClick={e => setcasesType('deaths')}>Deaths</MenuItem>
   
      
  </Select>
  </FormControl>
</div>


    <div className="map">
           <LeafletMap  center={center}
          zoom={zoom} >
           <TileLayer
           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

           ></TileLayer>
           {/* loop through the countries and make circles */}
           {showDataOnMap(countries,casesType)}
       </LeafletMap>
       </div>  
    </>    
    )
}

export default Map

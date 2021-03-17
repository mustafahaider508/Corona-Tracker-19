import React, { useEffect, useState } from 'react';
import {FormControl,Select,MenuItem, Grid, Typography,Box} from "@material-ui/core";
import "./Img.css";
import { makeStyles} from "@material-ui/core/styles";

const useStyles= makeStyles((theme => ({
  body:{
    margin:0,
    padding:0,
  },
  container:{
    position: "fixed",
    display:"flex",
    flexDirection: "column",
    width:"100%",
    height: "80vh",
    background:' url("https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/04/handwash-1586440171.jpg")',
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat", 
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    
  },
  site_title:{
    paddingTop: 0,
    margin: 0,
    position: "absolute",
    zIndex: 2,
    fontFamily: "sans-serif",
    color: "#fff",
    textAlign:"center",
  
    [theme.breakpoints.down('xs')]:{
      paddingTop:theme.spacing(4),
      textAlign:"center",
    },
   
  },

  subtitle1:{
    display:"none",
    [theme.breakpoints.down('xs')]: {
      display:"flex",
      margin:0,
      paddingBottom:theme.spacing(1),
      marginLeft:theme.spacing(15),
     
      
      // fontSize:18,
     
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
    width:230,
     padding:theme.spacing(0),
     textAlign:"left",
     height:50,
 

     
    },
  },
  heading:{
    textAlign:"center",
    paddingTop:theme.spacing(9),
    fontSize:30,
    [theme.breakpoints.down('xs')]:{
       textAlign:"center",
       paddingLeft:theme.spacing(0),
       paddingBottom:theme.spacing(1),
       paddingTop:theme.spacing(8),
      
    },
  },
  heading1:{
    
      textAlign:"center",
      fontSize:30,
      paddingTop:theme.spacing(16),
    
    [theme.breakpoints.down('xs')]:{
      paddingTop:theme.spacing(3),
      paddingLeft:theme.spacing(2),
       fontSize:25,
  },
 
},
 heading2:{
  textAlign:"center",
  fontSize:30,
  paddingTop:theme.spacing(1),
  [theme.breakpoints.down('xs')]:{
    paddingTop:theme.spacing(3),
    paddingLeft:theme.spacing(0),
     fontSize:21,
 },
}
  
})))



function Img() {
  const classes= useStyles();
    const[countries,SetCountries] = useState([]);
    const[country,SetCountry] = useState("worldwide");


     useEffect(() =>{
       const getCountriesData = async () =>{
         await fetch("https://disease.sh/v3/covid-19/countries")
         .then((response) => response.json())
         .then((data) => { 
           const countries = data.map((country) =>(
             {
                name:country.country,
                value:country.countryInfo.iso2
             }));
     
           //   const sortedData = sortData(data);
           //   SetTableData(sortedData);
             SetCountries(countries);
         });
       };
       getCountriesData();
     
     },[]);


     const onCountryChange = async (event) =>{
       const  countryCode = event.target.value;
    
       const url = countryCode === 'worldwide' ? 'https://disease.sh/v3/covid-19/all' :
       `https://disease.sh/v3/covid-19/countries/${countryCode}`;
      
        await fetch(url)
        .then(response => response.json())
        .then(data => {
          SetCountry(countryCode);
       //    SetcountryInfo(data);
       //    setMapCenter([data.countryInfo.lat, data.countryInfo.long])
       //     setMapZoom(4);
    
        });
    
      }
  
    return (
     
      <>
        <div className={classes.container}>
         <div className={classes.site_title}>
         <Typography className={classes.subtitle1} color="secondary" variant="subtitle1">Corona-19 Tracker</Typography>
        
      <Typography className={classes.heading1}  variant="h4">Wear a mask And Save lives</Typography>
      <Typography className={classes.heading2} variant="h4">Stay aware of the latest COVID-19 information by regularly checking updates from  your national and local public health authorities.</Typography>
      <Typography className={classes.heading} color="secondary" variant="h5">Select your Region</Typography>
        
        <FormControl className={classes.input}>
          <Select 
          variant="outlined"
            value={country}
            onChange={onCountryChange}
            >
        <MenuItem value="worldwide">worldwide</MenuItem>
             {
              countries.map((country) =>(
         <MenuItem  value={country.value}>{country.name}</MenuItem>
      ))
     }
  </Select>
  </FormControl>
      
      </div>
         
      

            <div className="overlay">
          
            </div>
           
        </div>
        
</>
    )
}

export default Img

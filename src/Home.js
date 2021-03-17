import React, { useEffect, useState } from 'react';
import {FormControl,Select,MenuItem, Grid,Typography, Card, CardContent, Paper,Box, Container} from "@material-ui/core";
import "./Img.css";
import { makeStyles} from "@material-ui/core/styles";
import InfoBox, { InfoBox2, InfoBox3 } from "./InfoBox";
import {InfoBox1} from "./InfoBox";
import "./App.css";
import {sortData,plusNum} from "./Utils";
import Map from "./Map";
import "leaflet/dist/leaflet.css";
import DailogBox from "./DailogBox";
import LineGraph from './LineGraph';
import LineGraphDeath from './LineGraphDeath';
import LineGraphRec from './LineGraphRec';
import axios from "axios"
import { Line,Bar } from "react-chartjs-2";

const useStyles= makeStyles((theme => ({
  app:{
     
    },
    container:{
       
      position: "relative",
      display:"flex",
      flexDirection: "column",
      width:"100%",
      height: "80vh",
      background:' url("https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/04/handwash-1586440171.jpg")',
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat", 
      backgroundAttachment: "fixed",
      [theme.breakpoints.down('md')]:{
        height:"80vh",
      },
      
     
      [theme.breakpoints.down('xs')]:{
        height:"100vh",
      }
    
     
      
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
      fontWeight:600,
      color:"#448aff",
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
        paddingTop:theme.spacing(15),
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
  },
  app:{

    display:"flex",
    flexDirection: "column",
   

  },
  aap__boxes:{
    display:"flex",
    flexDirection:"column",
    justifyContent: "center",
    paddingTop:theme.spacing(2),
    paddingLeft:theme.spacing(),
    width:"98%",
    [theme.breakpoints.down('xs')]:{
      width:"96%",
     
    } 
  },
 
  graph:{
    paddingTop:theme.spacing(3),
  },
  headingGraph:{
     fontFamily:"sans-serif",
     fontWeight:200,
     paddingBottom:"20px",
     textAlign:"center",
     justifyContent:"center",
     alignItems:"center",

    [theme.breakpoints.down('xs')]:{
      fontSize:25,
    },
    fontSize:35,
    color:"black",
    textAlign:"center",
    fontWeight:600,


  },
  mapName:{
    fontWeight:'bold',
    fontSize:"35px",
    textAlign:"center",
    color:"#448aff",
    paddingTop:theme.spacing(4),
    paddingBottom:theme.spacing(3),
  },
  worldwide:{
    textAlign:"center",
    marginTop:"30px",
    fontWeight:600,
    fontSize:"35px",
    color:"#448aff",
    
  }
 
    
  })))

function Home() {

  const classes = useStyles();
  const[countries,SetCountries] = useState([]);
  const[country,SetCountry] = useState("worldwide");
  const[countryInfo,SetcountryInfo] = useState({});  
  // const[tableData,SetTableData] = useState([]);
  const[casesType,setcasesType] = useState('cases');
  const[CasesType,SetcasesType] = useState('deaths');
 
  
  
   useEffect(() =>{
     fetch("https://disease.sh/v3/covid-19/all")
     .then((response) => response.json())
     .then((data) => {
      SetcountryInfo(data);
     })
   },[]);
  
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
  
          // const sortedData = sortData(data);
          // // SetTableData(sortedData)
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
        SetcountryInfo(data);
      
  
      });
  
    }
    console.log("COUNTRY INFO>>>",countryInfo);
            
    return (
      <>
       
           <div className={classes.container}>
         <div className={classes.site_title}>
        
        
      <Typography className={classes.heading1}  variant="h4">Wear a mask And Save lives</Typography>
      <Typography className={classes.heading2} variant="h4">Stay aware of the latest COVID-19 information by regularly checking updates from  your national and local public health authorities.</Typography>
      <Typography className={classes.heading}  variant="h5">SELECT YOUR REGION</Typography>
        
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
       
        <Container maxWidth="xl">
          <div className={classes.aap__boxes}>
    
        <Grid container spacing={2}>
            <Grid item lg={3} md={3} xs={6}>
            
            <InfoBox 
             title="CoronaCases" cases={plusNum(countryInfo.todayCases)} total={plusNum(countryInfo.cases)} />
       
            </Grid>
          

          
            <Grid item lg={3} md={3} xs={6}>
             <InfoBox1 
              title="Recovered" cases={plusNum(countryInfo.todayRecovered)} total={plusNum(countryInfo.recovered)}/>
             </Grid>

             <Grid item lg={3} md={3} xs={6}>
             <InfoBox2 
             title="Deaths" cases={plusNum(countryInfo.todayDeaths)} total={plusNum(countryInfo.deaths)} />
             </Grid>
            
             
             <Grid item lg={3} md={3} xs={6}>
             <InfoBox3 
             title="Active" cases={plusNum(countryInfo.active)} total={plusNum(countryInfo.active)} />
             </Grid>
             </Grid>
      </div>
      </Container>   
          <Typography className={classes.worldwide} variant="h5">WORLDWIDE DATA</Typography>
      <Container maxWidth="xl">
       <div className={classes.graph}>
        <Grid container spacing={2}>
        <Grid item lg={6} xs={12}>
        <Typography className={classes.headingGraph} variant="h4">Total Cases</Typography>
              <LineGraph casesType={casesType} /> 
        </Grid>
        <Grid item lg={6} xs={12}>
        <Typography className={classes.headingGraph} variant="h4">Total Deaths</Typography>
              <LineGraphDeath CasesType={CasesType} />
        </Grid>
       </Grid> 
       </div>
       </Container>
    
        

        
            
          
      </>
        )
    }

export default Home

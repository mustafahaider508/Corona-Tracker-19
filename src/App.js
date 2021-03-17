import React,{useState,useEffect, createContext} from "react";
import './App.css';
import {Container,Box, Hidden} from "@material-ui/core";
import Navbar from "./Navbar.js";
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./Home";
import AgeGroup from "./AgeGroup";
import HealthTip from "./HealthTip"
import LatestNews from "./LatestNews";
import About from "./About"
import {makeStyles} from "@material-ui/core/styles";
import Sidebar from "./components/Sidebar";
import Img from "./Img";
import Map from "./Map";
import Pakistan from "./Pakistan";
import SimpleBottomNavigation from "./Mobnav";
import Footer from "./Footer";

const useStyles = makeStyles((theme) =>({
  root:{
    width:"100%",
    height:"100vh",
    paddingLeft:0,
    paddingRight:0,
   
  
    
  },

}));
export const Context=createContext(null);
function App() {
  const[mapCenter,setMapCenter] = useState({lat:34.80746, lng:-40.4796});
  const[mapZoom,setMapZoom] = useState(3);
  const[mapCountries,setmapCountries] = useState([]);
  const[casesType,setcasesType] = useState('cases');

  


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
  
         
          setmapCountries(data);
      
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
       setMapCenter([data.countryInfo.lat, data.countryInfo.long])
        setMapZoom(4);
 
     });
 
   }
  const classes = useStyles()
  return (
  // This is the Navabr of the App

   <div className="app">
  <BrowserRouter>
    <Box className={classes.root} >
    <Hidden only="lg">
    <SimpleBottomNavigation/>
    </Hidden>
     <Navbar /> 
      {/* <Sidebar /> */}
    
      <Switch>
     <Route  path="/" exact component={Home} />
     <Route path="/agegroup" component={AgeGroup} />
     <Route  path="/healthtip" component={HealthTip} />
     <Route  path="/pakistan" component={Pakistan} />
     <Route   path="/map" component={()=>
           <Map
           casesType={casesType} countries={mapCountries} center={mapCenter}
                    zoom={mapZoom}
           />}/>   
     </Switch>
     <Footer />

    </Box>
  </BrowserRouter>
  </div>
    
 

  );
}

export default App;

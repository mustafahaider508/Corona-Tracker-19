import { Container, Grid, Paper, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import {makeStyles,withStyles} from "@material-ui/core";
import {Context} from "./App";
import axios from "axios";
import Urls from "./urls";
import { useRouteMatch } from 'react-router';
import { faPills,faDisease,faVirusSlash,faProceduresfaViruses,faViruses,faHeadSideMask,faStethoscope,faVirus,faHospitalUser,faShieldVirus,faClinicMedical,faProcedures } from '@fortawesome/free-solid-svg-icons';
import LinearProgress from '@material-ui/core/LinearProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {plusNum} from "./Utils";



const useStyles = makeStyles((theme) => ({
    root:{
     margin:0,
     padding:0,
     backgroundColor:"white",
     
    },
    container:{
        position: "relative",
        display:"flex",
        backgroundImage:"url('https://th.bing.com/th/id/Reb1aa35affa532cd7b5829a5ba08dec7?rik=QDYJju4wCl4RoA&riu=http%3a%2f%2f3.bp.blogspot.com%2f_wmBpAwbbN4s%2fTP5Q0e84OJI%2fAAAAAAAAAB8%2fvWuKUFn1UIc%2fs1600%2fpakistan%2bmoment.jpg&ehk=Rzmd6QzoSEbdH5HKdDe9NMbcRvJmHLb6CZPcW2CirGo%3d&risl=&pid=ImgRaw')",
        backgroundPosition:"center",
        backgroundSize:" cover",
        backgroundRepeat:"no-repeat",
             height: '38vh' ,
             display:"flex",
             alignItems:"center",
             justifyContent:"center",
             flexDirection:"column",
        [theme.breakpoints.down('md')]:{
          height:"25vh",
    },
},
  heading:{
    position: "relative",
    zIndex: 2,
    fontFamily: "sans-serif",
    color: "#fff",
    textAlign:"center",
    fontSize:50,
    paddingTop:theme.spacing(13),
    fontWeight:700,
    color:"#448aff",
  [theme.breakpoints.down('xs')]:{
    paddingTop:theme.spacing(10),
    paddingLeft:theme.spacing(2),
     fontSize:28,
},   
  },
  paper:{
    height:"auto",
    background:"#212121",
   
 },
 border:{
   //  border:"2px solid black",
   display:"flex",
   justifyContent:"space-around",
   flexDirection:"column",
   alignItems:"center",
   color:"white",
   
 },
 span1:{
     color:"#4caf50",
     fontSize:"25px",
     
 },
 span2:{
    color:"#b71c1c",
    fontSize:"25px",
},
span3:{
    color:"#ff3d00",
    fontSize:"25px",
},
Paper2:{
    background:"#212121",
    height:"150px",
    display:"flex",
    justifyContent:"space-around",
    flexDirection:"column" ,  
},
Data:{
    textAlign:"right",
    paddingRight:"20px",
    fontSize:"32px",
    [theme.breakpoints.down('xs')]:{
        fontSize:"20px",
    }
},
Icon:{
    [theme.breakpoints.down('xs')]:{
        fontSize:"20px",
    },
},
name:{
    fontWeight:300,
    color:"lightgray",
    paddingLeft:"15px",
    [theme.breakpoints.down('xs')]:{
        fontSize:"15px",
    },

}



}))

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      width:200,
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#4caf50',
    },
  }))(LinearProgress);
  
  const BorderLinearProgress1 = withStyles((theme) => ({
    root: {
        width:200,
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#d50000',
    },
  }))(LinearProgress);

  const BorderLinearProgress2 = withStyles((theme) => ({
    root: {
        width:200,
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#ff3d00',
    },
  }))(LinearProgress);


  
  

function Pakistan() {
    

    const [api, setapi] = useState({});
    const [api1, setapi1] = useState({});
  useEffect(()=>{
    axios.get("https://corona.lmao.ninja/v2/countries/pakistan").then(promise=>{
      setapi(promise.data.countryInfo)
      setapi1(promise.data)
    }).catch(error=>console.log(error))
  },[])

console.log(api);

const contrydata=[
    {data:api1.active,name:"Total Active",icon:faPills,color:"#0A79DF"},
    {data:api1.deaths,name:"Total Deceased",icon:faProcedures,color:"#B83227"},
    {data:api1.recovered,name:"Total Recovered",icon:faClinicMedical,color:"#43BE31"},
   {data:api1.updated,name:"Total Updated",icon:faViruses,color:"#616C6F"},
   {data:api1.todayCases,name:"TodayCases",icon:faStethoscope,color:"#AE1438"},
  
  {data:api1.todayDeaths,name:"TodayDeaths",icon:faVirus,color:"#4834DF"},
  {data:api1.todayRecovered,name:"TodayRecovered",icon:faHospitalUser,color:"#6AB04A"},
  {data:api1.critical,name:"Critical",icon:faShieldVirus,color:"#1BCA9B"},
  {data:api1.casesPerOneMillion,name:"CasesPerOneMillion",icon:faDisease,color:"#F3B431"},
  {data:api1.tests,name:"Total Tests People",icon:faPills,color:"#1287A5"},
  {data:api1.oneDeathPerPeople,name:"OneDeathPerPeople",icon:faHeadSideMask,color:"#E74292"},
  {data:api1.criticalPerOneMillion,name:"CriticalPerOneMillion",icon:faVirusSlash,color:"#10A881"}
]
//  console.log(contrydata[0]);






    const classes = useStyles();
    return (
        <>
        <div className={classes.container}>
       <div className="overlay"></div>
        <Typography  className={classes.heading} variant="h4"> PAKISTAN</Typography>
       </div>

       <Container maxWidth="xl" style={{paddingTop:"20px"}}>
       <Grid container spacing={3} >
         <Grid item xs={12} sm={12} md={6} >
           <Paper variant="outlined" className={classes.paper}>
              <Grid container >
                <Grid item xs={6} className={classes.border} >
                 <img src={api.flag} style={{margin:"20px",border:`1px solid #CBD5E0`, width: "60%",
                     height: "auto"}}  />
                       </Grid>

                   
                   <Grid item xs={6} className={classes.border}>          
                   <Typography  variant="h5" style={{fontWeight:"bold",color:"#35BAF6"}}>POPULATION</Typography>
                  <Typography style={{fontSize:"25px"}} variant="h6">{plusNum(api1.population)}<br/></Typography>    
                 </Grid>
               </Grid>

             </Paper>
         </Grid>
         
         <Grid item xs={12} sm={12} md={6}>
             <Paper variant="outlined" className={classes.paper} style={{padding:"20px"}}>

            <Grid container>
                <Grid item xs={12}>
                <div style={{display:"flex",justifyContent:"space-around",paddingBottom:"15px"}}>
                <div  style={{color:"white"}}>
                <BorderLinearProgress variant="determinate" value={100} />Recovered </div>
                  <span  className={classes.span1} >{plusNum(573014)}</span>
                </div>

                <div style={{display:"flex",justifyContent:"space-around",paddingBottom:"15px"}}>
                <div style={{color:"white"}}>
                <BorderLinearProgress1 variant="determinate" value={100} />Deaths </div>
                  <span className={classes.span2} >{plusNum(13595)}</span>
                </div>

                <div style={{display:"flex",justifyContent:"space-around",paddingBottom:"15px"}}>
                <div style={{color:"white"}}>
                <BorderLinearProgress2 variant="determinate" value={100} />Critical </div>
                  <span className={classes.span3}>{plusNum(1895)}</span>
                </div>

               
                </Grid>
            </Grid>             
             </Paper>
         </Grid>
  
         </Grid>
<div style={{paddingBottom:"30px"}}>
         <Grid container spacing={2}> 
              {contrydata.map((i)=>
                  <Grid item xs={6} sm={6} md={3} >
                   <Paper variant="outlined"  className={classes.Paper2}>
                    <Typography variant="h6" className={classes.name} >
                        {i.name}
                </Typography>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <div style={{paddingLeft:"20px"}}>
                <FontAwesomeIcon className={classes.Icon} size="2x" style={{color:`${i.color}`}} icon={i.icon}/>
                </div>
                   <Typography variant="h5" className={classes.Data} style={{color:`${i.color}`}} >
                   {plusNum(i.data)}
                   </Typography>
                   </div>
                   
                  </Paper>
                    </Grid>
                  )}
              </Grid>
              </div>
          

  
    

       </Container>
            
        </>
    )
}

export default Pakistan

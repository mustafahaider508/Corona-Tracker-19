import { Box, Container, Divider, Paper, Typography } from '@material-ui/core';
import React from 'react';
import {makeStyles} from "@material-ui/core";
import "./HealthTip.css";


const useStyles = makeStyles((theme) => ({
    container:{
        position: "relative",
        display:"flex",
        flexDirection: "column",
        width:"100%",
        height:300,
        background:' url("https://familydoctor.org/wp-content/uploads/2020/03/coronavirus-1200-1.jpg")',
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat", 
        backgroundAttachment: "fixed",
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
    paddingTop:theme.spacing(18),
    fontWeight:700,
    color:"#448aff",
  [theme.breakpoints.down('xs')]:{
    paddingTop:theme.spacing(12),
    paddingLeft:theme.spacing(2),
     fontSize:28,
},  
[theme.breakpoints.down('md')]:{
  paddingTop:theme.spacing(10),
  paddingLeft:theme.spacing(2),
   fontSize:33,
},     
  },
  details:{
    paddingTop:theme.spacing(2),
    padding:theme.spacing(2),
     textAlign:"left",
    fontWeight:500,
    color:"#448aff",
    fontSize:25,
    paddingBottom:theme.spacing(5),
    [theme.breakpoints.down('xs')]:{
        fontSize:20,
    }
  },
  per:{
    color:"white",
     fontSize:"12px",
      
  },
  paperr:{
      background:"#212121",
      color:"#448aff",
  },
   heading2:{
    position: "relative",
    zIndex: 2,
    fontFamily: "sans-serif",
    color: "#fff",
    textAlign:"center",
    fontSize:50,
    padding:theme.spacing(2),
    fontWeight:700,
    color:"white",
  [theme.breakpoints.down('xs')]:{
    padding:theme.spacing(2),

     fontSize:28,
    
   }, 
},
list:{
    padding:"20px",
}  
  

}))

const items = [
    {
      name:"Fever",
      per:"87.9%",
    },
    {
        name:"Dry cough",
        per:"67.7%",
      },
      {
        name:"Fatigue",
        per:"38.1%",
      },
      {
        name:"Sputum production",
        per:"33.4%",
      },
      {
        name:"Shortness of breath",
        per:"18.6%",
      },
      {
        name:"Muscle pain or joint pain",
        per:"14.8%",
      },
      {
        name:"Sore throat",
        per:"13.9%",
      },
      {
        name:"Headache",
        per:"13.6%",
      },
      {
        name:"Chills",
        per:"11.4%",
      },
      {
        name:"Nausea or vomiting",
        per:"5.0%",
      },
      {
        name:"Nasal congestion",
        per:"4.8%",
      },
      {
        name:"Diarrhea",
        per:"3.7%",
      },
      {
        name:"Haemoptysis",
        per:"0.9%",
      },
      {
        name:"Conjuctival congestion",
        per:"0.8%",
      },

]

function HealthTip() {
    const classes = useStyles();
    return (
       <>
        <div className={classes.container}>
       <div className="overlay"></div>
        <Typography  className={classes.heading} variant="h4"> SYMTOMPS</Typography>
       </div>

       <Typography className={classes.details}>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</Typography>
       <Container maxWidth="xl">
       <Paper style={{height:"780px"}} variant="outlined">
       <div  className="table">
       {items.map((i) => (
        <tr>
          <td>{i.name}</td>
          <div style={{padding:"10px"}}>
          <Paper style={{borderRadius:"20%",background:"#b71c1c"}} variant="outlined">
          <td className={classes.per}>{i.per}</td>
          </Paper>
       
          </div>
        </tr>
        
       ))}
        </div>
        </Paper>
        <div style={{paddingTop:"40px"}}>
        <Paper className={classes.paperr} variant="outlined">
        <Typography  className={classes.heading2}  variant="h4"> PREVENTION</Typography>
        </Paper>
       </div>
       <div style={{paddingTop:"20px",paddingBottom:"30px"}}>
       <Paper variant="outlined">  
        
        <ul style={{paddingLeft:"25px"}}>
            <li className={classes.list}>Avoid going to crowded places. Why? Where people come together in crowds, you are more likely to come into close contact with someone that has COIVD-19 and it is more difficult to maintain physical distance of 1 metre (3 feet).</li>
            <Divider />
            <li className={classes.list}>Maintain at least 1 metre (3 feet) distance between yourself and others. Why? When someone coughs, sneezes, or speaks they spray small liquid droplets from their nose or mouth which may contain virus. If you are too close, you can breathe in the droplets, including the COVID-19 virus if the person has the disease.</li>
             <Divider />
             <li className={classes.list}>Avoid touching eyes, nose and mouth. Why? Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth. From there, the virus can enter your body and infect you.</li>
            <Divider />
            <li className={classes.list}>Make sure you, and the people around you, follow good respiratory hygiene. This means covering your mouth and nose with your bent elbow or tissue when you cough or sneeze. Then dispose of the used tissue immediately and wash your hands. Why? Droplets spread virus. By following good respiratory hygiene, you protect the people around you from viruses such as cold, flu and COVID-19.</li>
             <Divider />
             <li className={classes.list}>Stay home and self-isolate even with minor symptoms such as cough, headache, mild fever, until you recover. Have someone bring you supplies. If you need to leave your house, wear a mask to avoid infecting others. Why? Avoiding contact with others will protect them from possible COVID-19 and other viruses.</li>
            <Divider />
            <li className={classes.list}>If you have a fever, cough and difficulty breathing, seek medical attention, but call by telephone in advance if possible and follow the directions of your local health authority. Why? National and local authorities will have the most up to date information on the situation in your area. Calling in advance will allow your health care provider to quickly direct you to the right health facility. This will also protect you and help prevent spread of viruses and other infections.</li>
            <Divider />
            <li className={classes.list}>Keep up to date on the latest information from trusted sources, such as WHO or your local and national health authorities. Why? Local and national authorities are best placed to advise on what people in your area should be doing to protect themselves.</li>

        </ul>
       </Paper>
       </div>
       </Container>
       
      
       </>
    )
}

export default HealthTip

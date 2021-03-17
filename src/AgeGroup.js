import React,{useState,useEffect} from 'react';
import { Box, Paper, Typography,Grid, Container } from '@material-ui/core';
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import "./Img.css";
import {faViruses} from '@fortawesome/free-solid-svg-icons';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



const useStyles = makeStyles((theme) => ({
    root:{
     margin:0,
     padding:0,
     backgroundColor:"white",
     
    },
    container:{
        position: "relative",
        display:"flex",
        flexDirection: "column",
        width:"100%",
        height:300,
        background:' url("https://images.unsplash.com/photo-1584707823901-1122f7028325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80")',
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
    paddingTop:theme.spacing(10),
    paddingLeft:theme.spacing(2),
     fontSize:28,
},  
[theme.breakpoints.down('md')]:{
  paddingTop:theme.spacing(10),
  paddingLeft:theme.spacing(2),
   fontSize:33,
},    
  },
  title:{
      paddingTop:theme.spacing(4),
      textAlign:"center",
      fontWeight:700,
      color:"#448aff",
      [theme.breakpoints.down('xs')]:{
         fontSize:35,
      },
  },
  details:{
    paddingTop:theme.spacing(2),
    padding:theme.spacing(0),
     textAlign:"center",
    fontWeight:500,
    color:"black",
    fontSize:25,
    color:"#424242",
    paddingBottom:theme.spacing(5),
    [theme.breakpoints.down('xs')]:{
        fontSize:20,
    }
  },
  paper:{
    background:' url("https://images.unsplash.com/photo-1584707823901-1122f7028325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80")', 
    height:"30vh",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-around",
      flexDirection:"column",  
      borderRadius:"10%",
},
age:{
    color:"white",
    fontWeight:700,
    fontSize:"30px",
    [theme.breakpoints.down('xs')]:{
        fontSize:"20px",
    },
},
death:{
    color:"white",
    fontWeight:600,
    fontSize:"25px",
    [theme.breakpoints.down('xs')]:{
        fontSize:18,
    },
},
Paper:{
  height:"40vh",
  backgroundPosition:"center",
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  display:"flex",
  alignItems:"center",
  justifyContent:"space-around",
  flexDirection:"column",  


},
paper1:{
  height:"auto",
  // color:"white",
  // background:"#212121",
  

},

circle:{
  height:"auto",
  width:"150px",
  [theme.breakpoints.down('xs')]:{
    width:"110px",

},
}
}))


 

function AgeGroup() {
    const classes = useStyles();
    return (
       <>
       <Box className={classes.root}>
       <div className={classes.container}>
       <div className="overlay"></div>
        <Typography  className={classes.heading} variant="h4"> AGEGROUP</Typography>
       </div>
       <Container maxWidth="xl">
        
             <Typography className={classes.title} variant="h3">COVID-19 Fatality Rate by AGE</Typography>
             <Typography className={classes.details} variant="body1">Death Rate = (number of deaths / number of cases) = probability of dying if infected by the virus (%). This probability differs depending on the age group. The percentages shown below do not have to add up to 100%, as they do NOT represent share of deaths by age group. Rather, it represents, for a person in a given age group, the risk of dying if infected with COVID-19.</Typography>
            
            <Grid container  spacing={3}>
             <Grid item xs={6} sm={6} md={3}>
              <Paper  className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./1.png)"}}>

                <Typography className={classes.age} variant="h4">80+ years old</Typography>
                <i className={faViruses}></i>
                <Typography className={classes.death} variant="h5">Death Rate: 21.9%</Typography>
              </Paper>
             </Grid>

             <Grid item xs={6} sm={6} md={3}>
              <Paper  className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./2.png)"}}>
                <Typography className={classes.age} variant="h4">70-79 years old</Typography>
                <Typography className={classes.death} variant="h5">Death Rate: 8.0%</Typography>
              </Paper>
             </Grid>

             <Grid item xs={6} sm={6} md={3}>
              <Paper  className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./3.png)"}}>
                <Typography className={classes.age} variant="h4">60-69 years old</Typography>
                <Typography className={classes.death} variant="h5">Death Rate: 3.6%</Typography>
              </Paper>

             </Grid>
             <Grid item xs={6} sm={6} md={3}>
              <Paper  className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./4.png)"}}>
                <Typography className={classes.age} variant="h4">50-59 years old</Typography>
                <Typography className={classes.death} variant="h5">Death Rate: 1.3%</Typography>
              </Paper>

             </Grid>
             <Grid item xs={6} sm={6} md={3}>
              <Paper  className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./5.png)"}}>
                <Typography className={classes.age} variant="h4">40-49 years old</Typography>
                <Typography className={classes.death} variant="h5">Death Rate: 0.4%</Typography>
              </Paper>

             </Grid>
             
             <Grid item xs={6} sm={6} md={3}>
              <Paper  className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./6.png)"}}>
                <Typography className={classes.age} variant="h4">30-39 years old</Typography>
                <Typography className={classes.death} variant="h5">Death Rate: 0.2%</Typography>
              </Paper>

             </Grid>
             <Grid item xs={6} sm={6} md={3}>
              <Paper  className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./7.png)"}}>
                <Typography className={classes.age} variant="h4">20-29 years old</Typography>
                <Typography className={classes.death} variant="h5">Death Rate: 0.2%</Typography>
              </Paper>
             </Grid>

             <Grid item xs={6} sm={6} md={3}>
              <Paper  className={classes.paper} style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./1.png)"}}>
                <Typography className={classes.age} variant="h4">10-19 years old</Typography>
                <Typography  className={classes.death} variant="h5">Death Rate: 0.2%</Typography>
              </Paper>
              </Grid>

             
            </Grid>

            {/* COVID-19 Fatality Rate by Gender */}
            <Typography className={classes.title} variant="h3">COVID-19 Fatality Rate by Gender</Typography>
            <Typography className={classes.details} variant="body1">Death Rate = (number of deaths / number of cases) = probability of dying if infected by the virus (%). This probability differs depending on sex. When reading these numbers, it must be taken into account that smoking in China is much more prevalent among males. Smoking increases the risks of respiratory complications.</Typography>
            <div style={{paddingBottom:"30px"}}>
           <Grid container spacing={4}>
         <Grid item xs={12} sm={12} md={6}>
             <Paper variant="outlined" className={classes.paper1} style={{padding:"20px"}}>
            <Typography style={{textAlign:"center",fontWeight:600}} variant="h5">MALE</Typography>
            <Grid container>
                <Grid item xs={6}>
                    <center>
                <CircularProgressbar  styles={buildStyles({
          textColor: "#b71c1c",
          pathColor: "#b71c1c",
          //trailColor: "#01411C"
        })} className={classes.circle} value={4.7} text={`4.7%`} />

        
                <Typography>Death Rate (Confirmed Cases)</Typography>
                </center>
                </Grid>
                <Grid item xs={6}>
                <center>
                <CircularProgressbar
                styles={buildStyles({
                    textColor: "#b71c1c",
                    pathColor: "#b71c1c",
                    //trailColor: "#01411C"
                  })}
                 className={classes.circle} value={2.8} text={`2.8%`} 
                />
                <Typography>Death Rate (All Cases)</Typography>
                </center>
                </Grid>
                
            </Grid>    
            </Paper>
            </Grid>        

           {/* 2 grid */}
           <Grid item xs={12} sm={12} md={6}>
             <Paper variant="outlined" className={classes.paper1} style={{padding:"20px"}}>
            <Typography style={{textAlign:"center",fontWeight:600}} variant="h5">FEMALE</Typography>
            <Grid container>
                <Grid item xs={6}>
                    <center>
                <CircularProgressbar  styles={buildStyles({
          textColor: "#b71c1c",
          pathColor: "#b71c1c",
          //trailColor: "#01411C"
        })} className={classes.circle} value={2.8} text={`2.8%`} />

        
                <Typography>Death Rate (Confirmed Cases)</Typography>
                </center>
                </Grid>
                <Grid item xs={6}>
                <center>
                <CircularProgressbar
                styles={buildStyles({
                    textColor: "#b71c1c",
                    pathColor: "#b71c1c",
                    //trailColor: "#01411C"
                  })}
                 className={classes.circle} value={1.7} text={`1.7%`} 
                />
                <Typography>Death Rate (All Cases)</Typography>
                </center>
                </Grid>
                
            </Grid>    
            </Paper>
            </Grid>   
</Grid>
            
 </div>
 </Container>
 </Box>
             </>
    )
}

export default AgeGroup

  
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,makeStyles,Grid,Paper} from '@material-ui/core';
import {BrowserRouter,Route,Link} from "react-router-dom";
import Room from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
export default function SimpleContainer(props) {

    const useStyles=makeStyles({
        container:{
          background:"#263238",minheight: '35vh',
        },
        paper:{
        height:"30vh",
        borderRadius:"0px",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
                flexDirection:"column",
                backgroundColor:"transparent" ,
                //border:"1px solid black",
                color:"white"

           },
           paper1:{
            height:"30vh",
            borderRadius:"0px",
            display:"flex",
           //alignItems:"center",
           paddingLeft:"30px",
            justifyContent:"center",
                    flexDirection:"column",
                    backgroundColor:"transparent" ,
                    //border:"1px solid black",
                    color:"white"
    
               }
    }
    )

    const classes=useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters >
        <Typography component="div" className={classes.container}>
           <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper className={classes.paper} elevation={0}>
            <div style={{display:"flex"}}>
          {/* <img 
      src={}
      alt="new"
      //style={{width:"48px"}}
      width="40" height="40"
      /> */}
              <Typography variant="h4" style={{fontWeight:"bold",paddingTop:"3px",color:"#17c0eb"}}>&nbsp;Corona Tracker-19</Typography>
              </div>
              <Typography>Develop By :
             Mustafa Haider
  </Typography>
              <Typography>powered By:
              Cecos University
</Typography>
              </Paper>
        </Grid>
        <Grid item xs={12}  sm={6} md={4} lg={4}>
          <Paper className={classes.paper} elevation={0}>
          <Typography variant="h4" style={{fontWeight:"bold",color:"#17c0eb"}}>Company</Typography>
          <Link to="privacy"
              style={{color:"white",textDecoration: "none"}}>
             Privacy Policy
  </Link>
 <Link to="service"
              style={{color:"white",textDecoration: "none"}}>
              Terms and Conditions
  </Link>
              
              </Paper>
        </Grid>
        <Grid item xs={12}  sm={12} md={5} lg={5}>
          <Paper className={classes.paper1} elevation={0}>
          <div style={{display:"flex"}}>
          <Room style={{color:"#17c0eb"}}/>
          <Typography>&nbsp;CECOS University of IT & Emerging Sciences, F-5, Phase-6, Hayatabad, Peshawar, Khyber Pakhtunkhwa, Pakistan, Pakistan-25000</Typography>
          </div>
          <div style={{display:"flex"}}>
          <PhoneIcon style={{color:"#17c0eb"}}/>
          <Typography><a style={{color:"white" ,textDecoration:"none"}} href="https://api.whatsapp.com/send?phone=923150969602&text=Hello">&nbsp;03150969602</a></Typography>
          </div>
          <div style={{display:"flex"}}>
          <EmailIcon style={{color:"#17c0eb"}}/>
          <Typography><a style={{color:"white" ,textDecoration:"none"}} href="mailto:mustafahaider508@gmail.com">&nbsp;mustafahaider508@gmail.com</a> </Typography>
          </div>
               </Paper>
        </Grid>
        </Grid>
  <Typography style={{textAlign:"center", backgroundColor:"#17c0eb",color:"white",fontSize:"12px",padding:"3px"}}>&copy;Copyright Cecos University</Typography>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
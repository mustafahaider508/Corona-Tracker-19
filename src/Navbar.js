import React, { Fragment, useState } from 'react';
import {AppBar,Toolbar,Typography, Button,IconButton} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import "./Navbar.css";
import Sidebar from './components/Sidebar';





function Navbar() {
  const [color1, setcolor1] = useState('transparent');
  const [color2, setcolor2] = useState("#0ABDE3")

  const useStyles = makeStyles((theme =>({
    AppBar:{
      marginBottom:0,
      width:"100%",
      height:80,
      boxShadow:theme.shadows[0],
            backgroundColor:color1,
    },
    Desktop:{
      display:"none",
      [theme.breakpoints.up('md')]: {
        display:"flex",
      },
      [theme.breakpoints.down('sm')]: {
        display:"none",
        
        
      },
    },
    Button:{
      display:"flex",
      [theme.breakpoints.up('md')]: {
        display:"none",
      },
    },
    navItem:{
      fontSize:15,
      paddingTop:theme.spacing(1),
    }
   
  
  })));
 

  
  const classes = useStyles();
  window.addEventListener("scroll",()=>{
     var   a=window.scrollY;
       if(a>49){
         setcolor1("hsla(199, 98%, 52%, 0.5)");
         setcolor2("white")
       }
       else{
          setcolor1('transparent'); 
          setcolor2("#0ABDE3")
       }
   })
    return (
      <Fragment>
     
          <AppBar  position="absolute"   className={classes.AppBar}>
        <Toolbar>
          <Typography variant="h5" style={{flexGrow:1,color:"#448aff",fontWeight:600}}>Corona Tracker-19</Typography>
         <div className={classes.Desktop}>
          <Button className={classes.navItem} color="inherit" component={Link} to="/">Home</Button>
          <Button  className={classes.navItem} color="inherit" component={Link} to="/pakistan">Country</Button>
          <Button  className={classes.navItem} color="inherit" component={Link} to="/agegroup">AgeGroup</Button>
           <Button  className={classes.navItem} color="inherit" component={Link} to="/map">Map</Button>
           <Button className={classes.navItem}  color="inherit" component={Link} to="/healthtip">HealthTip</Button>
          
           
          </div>
         
          <IconButton  className={classes.Button}>
          <Sidebar />
          </IconButton>
         
        </Toolbar>
      </AppBar>
      
  
      </Fragment>
    )
}

export default Navbar

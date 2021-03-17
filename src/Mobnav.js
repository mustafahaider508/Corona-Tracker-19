  
import React,{useContext} from 'react';
import {Context} from "./App"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Home from '@material-ui/icons/Home';
import Room from '@material-ui/icons/Room';
import Block from '@material-ui/icons/Block';
import MapIcon from '@material-ui/icons/Map';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    zIndex:1,
    bottom: 0,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/"  icon={<Home/>} />
      <BottomNavigationAction  component={Link} to="pakistan" icon={<Room/>} />
      <BottomNavigationAction  component={Link} to="map" icon={<MapIcon/>} />
      <BottomNavigationAction  component={Link} to="HealthTip" icon={<LocalHospitalIcon />} />
     
      
    </BottomNavigation>
  );
}
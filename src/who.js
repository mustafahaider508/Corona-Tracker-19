import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,makeStyles, Button} from '@material-ui/core';

export default function Who() {

    const useStyles=makeStyles({
        container:{
            backgroundColor: '#cfe8fc',
            backgroundImage:"url("+process.env.PUBLIC_URL + "./2.png)",
            backgroundPosition:" center",
            backgroundSize:" cover",
            backgroundRepeat:"no-repeat",
             height: '40vh', 
             display:"flex",
             alignItems:"center",
             justifyContent:"center",
             flexDirection:"column",
             color:"white",
             marginTop:"25px"
             

             
             
        }
    })
    const classes=useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters id="Who">
        <Typography component="div" className={classes.container}>

         <center>
        <Typography style={{fontWeight:"bold"}} variant="h4">For More Information please Visit World Health Organization Website </Typography>

        <Button style={{marginTop:"20px"}} href="https://www.who.int/health-topics/coronavirus#tab=tab_1" target="_blank" variant="contained" color="primary">
  Visit WHO
</Button>
</center>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
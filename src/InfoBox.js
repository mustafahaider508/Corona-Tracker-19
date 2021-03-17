import React from 'react'
import {Card,CardContent,Grid,Typography} from "@material-ui/core";
import "./infoBox.css";

function InfoBox({title,total,cases,...props}) {
    return (
        
        <Card
        onClick={props.onClick}
    className="infoBox"
    style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./chart4.jpg)",backgroundSize:" cover"}}>
            <CardContent  >
             <Typography className="infoBox__title" style={{color:"white"}}> {title} </Typography>
             <h2 className="infoBox__cases"> {cases} </h2>
             <Typography className="infoBox__total"> {total} Total </Typography>


            </CardContent>
        </Card>
   
       
      
            
   
    )
}

export default InfoBox;



export  function InfoBox1({title,total,cases,...props}) {
    return (
        <div>
            <Card
           
        onClick={props.onClick}
    className="infoBox"
    style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./pic4.jpg)",backgroundSize:" cover"}}>
            <CardContent  >
             <Typography className="infoBox__title" style={{color:"white"}}> {title} </Typography>
             <h2 className="infoBox__cases"> {cases} </h2>
             <Typography className="infoBox__total" > {total} Total </Typography>


            </CardContent>
        </Card>
   
       
        </div>
    )
}

export  function InfoBox2({title,total,cases,...props}) {
    return (
        <div>
            <Card
           
        onClick={props.onClick}
    className="infoBox"
    style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./chart2.jpg)",backgroundSize:" cover"}}>
            <CardContent  >
             <Typography className="infoBox__title" style={{color:"white"}}> {title} </Typography>
             <h2 className="infoBox__cases"> {cases} </h2>
             <Typography className="infoBox__total" > {total} Total </Typography>


            </CardContent>
        </Card>
   
       
        </div>
    )
}

export  function InfoBox3({title,total,cases,...props}) {
    return (
        <div>
            <Card
           
        onClick={props.onClick}
    className="infoBox"
    style={{backgroundImage:"url("+process.env.PUBLIC_URL + "./pic7.jpg)",backgroundSize:" cover"}}>
            <CardContent  >
             <Typography className="infoBox__title" style={{color:"white"}}> {title} </Typography>
             <h2 className="infoBox__cases"> {cases} </h2>
             <Typography className="infoBox__total" > {total} Total </Typography>


            </CardContent>
        </Card>
   
       
        </div>
    )
}




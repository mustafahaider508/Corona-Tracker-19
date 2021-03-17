import { Box, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import axios from "axios";

function LatestNews() {

    useEffect(async()=>{
       await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=062bb52dec5844229eab9e1a47a5e179").then((res)=>{
                 console.log(res.data);
        
        })
      },[])
    return (
        <Box py={20} textAlign="center">
        <Typography variant="h3" color="primary">This is LatestNews Section...MF!!</Typography>
    </Box>
        
    )
}

export default LatestNews

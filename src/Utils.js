import React from "react";
import numeral from "numeral";
import {Circle,Popup} from "react-leaflet";

const  casesTypeColors ={
  cases:{
    hex:"#CC1034",
    multiplier:400,
  },
  recovered:{
    hex:"#7dd71d",
    multiplier:600,
},
 deaths:{
   hex:"#fb4443",
   multiplier:3000,
 },
 active:{
   hex:"#338999",
   multiplier:700,
 },
}

export const sortData =(data) =>{
    const sortData=[...data];

  return  sortData.sort((a,b) => (a.cases > b.cases ? -1: 1));

};

// Draw circles on the map with interactive tooltip
export const showDataOnMap = (data,casesType='cases') => (
 data.map(country => (
   <Circle
    center={[country.countryInfo.lat,country.countryInfo.long]}
    fillOpacity={0.4}
    color={casesTypeColors[casesType].hex}
    fillColor={casesTypeColors[casesType].hex}
    radius={
      Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
    }
   >
  <Popup>
  <div className="info-container">
    <div className="info-flag"
     style={{backgroundImage:`url(${country.countryInfo.flag})`}}
    />
      <div className="info-name">{country.country}</div>
      <div className="info-cases">Cases: {numeral(country.cases).format("0,0")}</div>
      <div className="info-recover">Recovered: {numeral(country.recovered).format("0,0")}</div>
      <div className="info-death">Death: {numeral(country.deaths).format("0,0")}</div>
    </div>
    
  </Popup>
  
     

   </Circle>
 ))

);

export const showDataOnModal = (data,casesType='cases') => (
  data.map(country => (
    
    
    <div className="info-container">
      <div className="info-flag"
       style={{backgroundImage:`url(${country.countryInfo.flag})`}}
      />
        <div className="info-name">{country.country}</div>
        <div className="info-cases">Cases: {numeral(country.cases).format("0,0")}</div>
        <div className="info-recover">Recovered: {numeral(country.recovered).format("0,0")}</div>
        <div className="info-death">Death: {numeral(country.deaths).format("0,0")}</div>
      </div>
      
   
     ))

  );

  //This function is for cases which can be showed by + symbol
  export const plusNum = (num) =>
   num ? `+${numeral(num).format("0.0a")}`: "+0";
   


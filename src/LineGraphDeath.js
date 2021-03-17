import React, { useState, useEffect } from "react";
import { Line,Bar } from "react-chartjs-2";
import numeral from "numeral";
import {Paper} from "@material-ui/core";




const options = {
  
  legend: {
    display: true,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartData = (data, CasesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[CasesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[CasesType][date];
  }
  return chartData;
};

function LineGraph({ CasesType }) {
 
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let chartData = buildChartData(data, CasesType);
          setData(chartData);
          console.log(chartData);
          // buildChart(chartData);
        });
    };

    fetchData();
  }, [CasesType]);

  return (
    <div>
      {data?.length > 0 && (
       <Paper style={{height:"50vh"}} elevation={0}> 
        <Bar
          data={{
            datasets: [
              {
                backgroundColor: "#e74c3c",
                borderColor: "#CC1034",
                data: data,
                type:'bar',
                label:"Deaths",
              
              },
           
            ],
          }}
          
        
          
          width={400} 
          height={400}
          options={options}
        />
        </Paper>
      )}
    </div>
  );
}

export default LineGraph;

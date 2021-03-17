import React from 'react';

function Graph() {

    var data1={
        labels:totaldeathsC,
        datasets: [{
            label: 'Total Deaths',
            data:totaldeathsD,
            backgroundColor: "#e74c3c",
           
            borderWidth: 1
        }]
    }

    return (
        <div>
             <Bar
             data={data1}
             options={{
             title: {
             display: true,
             text: 'Custom Chart Title',
             fontSize:"12px",
             position:"top"
        },
        legend: {
          display: true,
          labels: {
              fontColor: 'rgb(255, 99, 132)'
          }
      }
 }
 }
          width={400} 
          height={400}
           options={{ maintainAspectRatio: false }}
/> 
        </div>
    )
}

export default Graph

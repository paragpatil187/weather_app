import React from 'react'
import Chart from "react-apexcharts"
const UnkownGraph = () => {
   const state = {
        options: {
          chart: {    
    height: 180,
    type: "area"
          },
          xaxis: {
            categories: [" "," ","5am"," "," ","2pm"," ","6pm"," "]
          }
        },
        series: [
          {
            type:"area",
            name: "series-1",
            data: [0,0,10, 20, 30, 20, 10,0,0],
            
          }
        ],
        stroke: {
            curve: 'smooth',
          },
          fill: {
            type: "solid",
            
          },
          dataLables:{
            enable:false
          },
          zoom:{
            enable:false,
          },
          colors: ['#FF7F00']
          
      }
    
  return (
    <div style={{ overflow: "scroll",
        maxWidth: "650px",
        margin: "35px auto",
        }}>
        <div className="app">
        <div className="row">
          <div className="mixed-chart" style={{stroke:"none",fill:"none",opacity:"0.6"}}>
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="500"
              
            />
          </div>
        </div>
      </div>


    </div>
  )
}

export default UnkownGraph
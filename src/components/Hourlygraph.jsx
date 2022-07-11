
import React from 'react'
import Chart from "react-apexcharts"

const Hourly = ({ items }) => {
    const chartDatatemp = items.map((el) => {
        return el.temp;
    });
    console.log("chartData:", chartDatatemp)
    const chartDatatitle = items.map((el) => {
        return el.title;
    });


    const res = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: chartDatatitle
            }
        },
        series: [
            {
                name: "series-1",
                data: chartDatatemp
            }
        ]
    };



    return (
        <>
            <h1>hello</h1>

            <div className="app">hourly
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={res.options}
                            series={res.series}
                            type="line"
                            width="1000"
                        />
                    </div>
                </div>
            </div>


        </>)
}




export default Hourly
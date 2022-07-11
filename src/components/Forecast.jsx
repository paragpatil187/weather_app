import React from 'react'
import { iconUrlFromCode } from './weatherApi'
import "./Css/forcast.css"

const Forecast = ({ title, items }) => {
    console.log("items:", items)
    return (
    <div className='forcast-second-div'>
            {items.map(data => (
                <div key={data.title} className='forcastdiv'>
                    <div className='seconddiv'>
                    <p className='forcast-div-title'>{data.title}</p>
                    <p className='temp-div'>
                        <span>{`${data.min_temp.toFixed()}°`}</span>
                        <span>{`${data.max_temp.toFixed()}°`}</span>
                    </p>
                    <img src={iconUrlFromCode(data.icon)} className='forecastimage' />

                    <p className='desc'>{data.desc}</p>

                </div>
                </div>
            ))}
        </div>


    )
}

export default Forecast
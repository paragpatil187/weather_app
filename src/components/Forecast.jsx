import React, { useState } from 'react'
import { iconUrlFromCode } from './weatherApi'
import "./Css/forcast.css"
import TimeAndLocation from './TimeAndLocation'
import Timed from './Timed'

const Forecast = ({ title, items }) => {
    const [tempday,setTempday]=useState(items[0].temp);
    const[desc,setDesc]=useState("");
    const[icon,setIcon]=useState("");

const mydata={
    tempday,
    desc,
    icon
}

    console.log("items:", items)
    return (
        <>
    <div className='forcast-second-div'>
            {items.map(data => (
                <div key={data.title} className='forcastdiv'>
                    <div className='seconddiv' onClick={()=>{
                        setTempday(data.temp)
                    }}>
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

<Timed mydata={mydata}/>
</>


    )
}

export default Forecast
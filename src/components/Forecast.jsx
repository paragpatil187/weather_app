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
                    <div className='days'><p className='forcast-div-title'>{data.title}</p></div>
                    <div className='temperature-div'>
                        <p className=''>{`${data.min_temp.toFixed()}°`}</p>
                        <p className=''>{`${data.max_temp.toFixed()}°`}</p>
                    </div>
                    <div><img src={iconUrlFromCode(data.icon)} className='' /></div>

                    <div> <p>{data.desc}</p></div>

                </div>
                </div>
            ))}
        </div>


    )
}

export default Forecast
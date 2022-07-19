import React from 'react'
import "./Css/bottom.css"
import { formatToLocalTime } from './weatherApi'
const Bottom = ({weather:{sunrise,sunset,timezone}}) => {
  return (
    <>
    <div>
              <img className="image" src="https://www.suntoday.org/images/sunrise-sunset.png" alt=""/>
              

             </div>
             <div className="times">
              <p>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</p>
              <p>{formatToLocalTime(sunset, timezone, "hh:mm a")}</p>
             </div>
             </>       
  )
}

export default Bottom
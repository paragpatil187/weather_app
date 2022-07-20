import React from 'react'
import { formatToLocalTime, iconUrlFromCode } from '../components/weatherApi'
import "./Css/temp.css"
const TimeAndLocation = ({weather : { dt, timezone, name, country,temp,details,icon}}) => {
  return (
    <>
    <div className='maintempdetail'>
      <h1 style={{textAlign:"right",fontSize:"3rem",fontWeight:"700",margin:"0", color:"#000",marginLeft:"1rem"}}>{`${temp.toFixed()}°C`}</h1>
      <img
          src={iconUrlFromCode(icon)}
          style={{height:"8rem",marginLeft:"0.5rem",marginTop:"-2rem"}}
        />
        <div>
        <div className=''>
    <p style={{fontWeight:"bold"}}>{`${name}, ${country}`}</p>
</div> 
        <div className=''>
    <p style={{fontWeight:"510"}}>
        {formatToLocalTime(dt, timezone)}
    </p>
</div>
</div>


    </div>
    
</>
  )
}

export default TimeAndLocation
  
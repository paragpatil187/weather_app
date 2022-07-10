import React from "react";
import "./Css/temperature.css"

import { formatToLocalTime, iconUrlFromCode } from "../components/weatherApi";

const TemperatureAndDetails = ({weather : {
    details, icon, temp, temp_min, temp_max, humidity, sunrise, sunset, timezone,pressure
}}) => {
  return (
    <div className="main-div-temparature">
      <div>
        <p>{details}</p>
      </div>

      <div className="">
        <img
          src={iconUrlFromCode(icon)}
          className=""
        />
        <p className="">{`${temp.toFixed()}°`}</p>
        <div className="">
         
          <div className="">
            
            Humidity :<span className="">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="">
            Pressure:{pressure}
            
          </div>
        </div>
      </div>

      <div className="">
    
        <p className="">
          sunRise :<span className="">{formatToLocalTime( sunrise, timezone, "hh:mm a")}</span>
        </p>
        

        
        <p className="">
          sunSet :<span className="">{formatToLocalTime( sunset, timezone, "hh:mm a")}</span>
        </p>
      

        
  

        
       
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
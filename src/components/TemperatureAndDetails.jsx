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

      <div className="flex flex-row items-center justify-between text-white py-3">
        <img
          src={iconUrlFromCode(icon)}
          className="w-20"
        />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-center font-light text-sm">
            
          </div>
          <div className="flex items-center justify-center font-light text-sm">
            
            Humidity :<span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex items-center justify-center font-light text-sm">
            Pressure:{pressure}
            
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center space-x-2 text-white text-sm py-3">
    
        <p className="font-light">
          Rise :<span className="font-medium ml-1">{formatToLocalTime( sunrise, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>

        
        <p className="font-light">
          Set :<span className="font-medium ml-1">{formatToLocalTime( sunset, timezone, "hh:mm a")}</span>
        </p>
        <p className="font-light">|</p>

        
        <p className="font-light">
          High :<span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        
        <p className="font-light">
          Low :<span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
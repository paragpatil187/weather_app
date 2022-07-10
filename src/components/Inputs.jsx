import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import "./Css/input.css"

const Inputs = ({setQuery, setUnits, units}) => {

  const [city, setCity] = useState("");

  const handleSearchClick = () => {
      if( city ) setQuery({q : city})
  }

  const handleLocationClick = () => {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          setQuery({
            lat, lon
          })
        })
      }
  }

  

  return (
    <div className="input-main-div">
      <div className="input-second-div">
         <UilLocationPoint
        onClick={handleLocationClick}
          size={25}
          className=""
        />
        <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
          placeholder="search for city..."
          type="text"
          className="input-third"
        />
        <UilSearch
         onClick={handleSearchClick}
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
       
      </div>

     
    </div>
  );
};

export default Inputs;
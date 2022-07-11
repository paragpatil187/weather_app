import React, { useEffect, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import "./Css/input.css"
const Inputs = ({ setQuery }) => {

  const [city, setCity] = useState("pune");

  const handleSearchClick = () => {
    if (city) setQuery({ q: city })
  }
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };



  const handleLocationClick = () => {
    if (navigator.geolocation) {
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
    <>

      <div className="input-main-div">

        <div>
          <UilLocationPoint
            onClick={handleLocationClick}
            size={25}
          />
        </div>
        <div className="inputdiv">
          <input
            value={city}
            onChange={handleInputChange}
            placeholder="search your city"
            className="input"

          />
        </div>
        <div>
          <UilSearch
            onClick={handleSearchClick}
            size={25}
            className="search"
          />

        </div>





      </div>

    </>
  )
}

export default Inputs





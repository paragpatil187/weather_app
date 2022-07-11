import React, { useEffect, useRef, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import "./Css/input.css"
import styled from "styled-components";
import { useThrottle } from "use-throttle";
const Inputs = ({setQuery,loading, setLoading,suggestions,trail}) => {

  const [city, setCity] = useState("");
  const [active, setActive] = useState(0);
  const scrollRef = useRef();
  const throttledText = useThrottle(city, 1000);
  useEffect(() => {
    trail(throttledText);
  }, [throttledText, trail]);
  const handleSearchClick = () => {
      if( city ) setQuery({q : city})
  }
  const handleInputChange = (e) => {
    setCity(e.target.value);
    setLoading(true);
  };
  const handleClear = () => {
    setCity("");
    trail("");
    setLoading(false);
  };


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
  const handleActiveSuggestions = (e) => {
    console.log(scrollRef.current?.scrollTop);
    switch (e.keyCode) {
      //ArrowDown
      case 40:
        if (active >= 5) {
          setActive((prev) => prev + 1);
          scrollRef.current.scrollTop += 38.05;
        } else {
          setActive((prev) => prev + 1);
        }
        break

      //ArrowUp
      case 38:
        if (active <= 2) {
          scrollRef.current.scrollTop -= 38.05;
          setActive((prev) => prev - 1);
        } else {
          setActive((prev) => prev - 1);
        }
        break

      //Enter
      case 13:
        break

      default:
        return
    }
  }

  

  return (
    <>
    
    <div className="input-main-div">

    {/* <div
        len={suggestions.length}
        onKeyUp={handleActiveSuggestions}
      ></div> */}
    
   
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
        {/* <div>
          {city && (
            <img
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/cross-3158260-2635455.png"
              alt="Close button"
              style={{ cursor: "pointer" }}
              onClick={handleClear}
            />
          )}
          {loading && (
            <div viewBox="0 0 50 50">
              <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
              />
            </div>
          )} */}
        

      
    
    </div>
    
    </>
  )
}

export default Inputs





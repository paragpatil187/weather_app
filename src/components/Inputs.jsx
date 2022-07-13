import React, { useEffect, useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import "./Css/input.css"
import Bulk from "./db.json";
const Inputs = ({ setQuery,query }) => {
const[display,setDisplay]=useState([]);
const [inputStyle, setInputStyle] = useState(false);
const [displayMode, setDisplayMode] = useState(true);
  const handleSearchClick = () => {
    if (query) setQuery({ q: query })
  }
  
   
  const inPutBox = () => {
    setInputStyle((current) => !current);
    {
      !query ? filterBulkData("") : filterBulkData(query);
    }
    setDisplayMode(true);
  };
  const filterBulkData = (text) => {
    let matches = Bulk.filter((x) => {
      const regex = new RegExp(`${text}`, "gi");
      return x.city.match(regex) || x.state.match(regex);
    });
    setDisplay(matches);
  };
  const handleChange = (e) => {
    filterBulkData(e.target.value);
    setQuery(e.target.value);
    setDisplayMode(true);
  };
  const setSearch = (city) => {
    const edit = Bulk.filter((item) => {
      return item.city === city;
    });
    setQuery(edit[0].city);
    setDisplayMode((current) => !current);
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
 <form onSubmit={(e)=>e.preventDefault()}>
      <div className="input-main-div" style={{
            border: inputStyle ? "2px solid #131313" : "none",
          }}>
       
        <div>
          <UilLocationPoint
            onClick={handleLocationClick}
            size={25}
          />
        </div>
        <div className="inputdiv">
          <input
            onClick={inPutBox}
            type="text"
            value={query.q}
            onChange={handleChange}
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
        </form>

      <div className="bulk-data-container">
        {displayMode &&
          display.map((e, i) => (
            <div
              key={i}
              className="bulk-data"
              onClick={() => setSearch(e.city)}
            >
              <div className="bulk-data-info">
                <strong>{e.city},</strong>
                <p>{e.state}</p>
              </div>
              <div className="bulk-data-icon">
                
              </div>
            </div>
          ))}
      </div>
      

    </>
  )
}

export default Inputs





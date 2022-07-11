import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import getFormattedWeatherData from "../src/components/weatherApi";
import Hourly from "./components/Hourlygraph";
import UnkownGraph from "./components/UnkownGraph";


function App() {

  const [query, setQuery] = useState({q : "pune"});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units }).then(data=> {
        setWeather(data);
      })
    }
    fetchWeather();
  }, [ query, units])

  // useEffect(() => {
  //   if (query === "") {
  //     setSuggestions([]);
  //   } else {
  //     let newListOfSuggestions = countries
  //       .filter((item) =>
  //         item.country.toLowerCase().indexOf(query) !== -1 ? true : false
  //       )
  //       .map((item) => item.country);
  //     setSuggestions(newListOfSuggestions);
  //   }
  //   console.log("suggestions:",suggestions)
  //   setTimeout(() => setLoading(false), 1000);
  // }, [query]);
console.log(weather);
  return (
    <div className="main-app-div">
        
         <Inputs setQuery={setQuery} units={units} setUnits={setUnits} suggestions={suggestions} trail={(val)=>setQuery(val)}/>

         { weather && (
            <>
             <Forecast title="daily forecast" items={weather.daily}/>
             <TimeAndLocation weather={weather}/>
             <Hourly items={weather.hourly} />
             <TemperatureAndDetails weather={weather}/>
             <UnkownGraph/>
             
                

               
            </>
         )}

         

    </div>
  );
}

export default App;
import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import getFormattedWeatherData from "../src/components/weatherApi";



function App() {

  const [query, setQuery] = useState({q : "berlin"});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    //const message = query.q ? query.q : "current location."
    const fetchWeather = async () => {
      await getFormattedWeatherData({...query, units }).then(data=> {
        setWeather(data);
      })
    }
    fetchWeather();
  }, [ query, units])
console.log(weather);
  return (
    <div className="main-app-div">
        
         <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

         { weather && (
            <>
             <Forecast title="daily forecast" items={weather.daily}/>
                <TimeAndLocation weather={weather}/>
                <TemperatureAndDetails weather={weather}/>

               
            </>
         )};

         

    </div>
  );
}

export default App;
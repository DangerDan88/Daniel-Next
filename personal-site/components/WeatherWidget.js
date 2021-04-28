import { useEffect } from "react";
import axios from "axios";

//todo api request failing with 404 I think it has to do with the url having local host attached works in postman without that local host part

const WeatherWidget = () => {
  useEffect(() => {
    axios(
      "api.openweathermap.org/data/2.5/weather?q=London&appid=127c4e3c16ae1e9d22ad527bfe38537a"
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Weather widget</h1>
      <button>push for weather</button>
    </div>
  );
};

export default WeatherWidget;

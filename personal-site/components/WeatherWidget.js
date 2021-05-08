import axios from "axios";
import { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa";
//todo pass down data as props to a display component
const WeatherWidget = () => {
  const [weather, setWeather] = useState("");

  const getWeather = async function () {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Herriman&units=imperial&appid=${process.env.KEY}`
      )
      .then((response) => {
        let weatherTemp = response.data.main.temp;
        let des = response.data.weather[0].description;
        let feelsLike = response.data.main.feels_like;
        setWeather(weather);
        console.log(feelsLike);
        console.log(des);
        console.log(weatherTemp);

        // console.log(response.data.list.[1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      <FaSun onClick={getWeather} size={24} />
    </div>
  );
};

export default WeatherWidget;

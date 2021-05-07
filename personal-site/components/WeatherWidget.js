import axios from "axios";
import { ButtonStyles } from "../styles/reusable";
import { useState } from "react";

//todo got data to to generate need to template it out into a card and figure out api key not working in env variables
//todo want to make an icon where you click and weather card is generated with key stats
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

  //useEffect(() => {
  //  getWeather();
  // }, []);

  return (
    <div>
      <ButtonStyles onClick={getWeather}>push for weather</ButtonStyles>
    </div>
  );
};

export default WeatherWidget;

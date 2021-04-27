import { useEffect } from "react";
//Todo need to figure out api call not getting a response check api docs api key will be activated in a few hours
const WeatherWidget = () => {
  useEffect(() => {
    fetch(
      "api.openweathermap.org/data/2.5/weather?q=London&appid={process.env.API_KEY}"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div>
      <h1>Weather widget</h1>
      <button>push for weather</button>
    </div>
  );
};

export default WeatherWidget;

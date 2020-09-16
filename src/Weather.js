import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}c`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=adc304e0d775bfcd34cc43d2a3830fc0&units=metric`;
  axios.get(url).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}

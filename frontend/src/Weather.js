import React, { Component } from "react";
import "./Weather.css";

const weatherImages = {
  Thunderstorm:
    "https://cdn4.iconfinder.com/data/icons/weatherful/72/Lightning_Cloudy-1024.png",
  Drizzle: "https://cdn4.iconfinder.com/data/icons/weatherful/72/Drip-1024.png",
  Rain: "https://cdn4.iconfinder.com/data/icons/weatherful/72/Raining-1024.png",
  Snow: "https://cdn4.iconfinder.com/data/icons/weatherful/72/Snow_Clody-1024.png",
  Mist: "https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_38-1024.png",
  Fog: "https://cdn4.iconfinder.com/data/icons/weatherful/72/Foggy-1024.png",
  Tornado:
    "https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Tornado-1024.png",
  Clear:
    "https://cdn2.iconfinder.com/data/icons/weather-emoticon/64/07_sun_smile_happy_emoticon_weather_smiley-1024.png",
  Clouds:
    "https://cdn4.iconfinder.com/data/icons/weatherful/72/Cloudy-1024.png",
};

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
      temperature: "",
      high: "",
      low: "",
      description: "",
      city: "",
      error: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ zipcode: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const apiKey = "&appid=052f26926ae9784c2d677ca7bc5dec98";
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
    const zipCode = this.state.zipcode;
    const units = "&units=imperial";

    fetch(`${baseUrl}${zipCode}${units}${apiKey}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.cod === "404") {
          this.setState({
            error: "Invalid zip code. Please try again.",
            temperature: "",
            high: "",
            low: "",
            description: "",
            city: "",
          });
        } else {
          this.setState({
            error: "",
            temperature: json.main.temp,
            high: json.main.temp_max,
            low: json.main.temp_min,
            description: json.weather[0].description,
            city: json.name,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div class="weather-content">
        <h1>Weather Forecast</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter your zip code:
            <input type="text" onChange={this.handleChange} />
          </label>
          <br />
          <br />
          <input type="submit" value="Get my forecast!" />
          <br />
          <br />
          <p>
            {this.state.error && <span>{this.state.error}</span>}
            {this.state.temperature && (
              <span>
                The current temperature in {this.state.city} is{" "}
                {this.state.temperature}°F.
                <br /> There is a possible high of {this.state.high}°F and a low
                of {this.state.low}°F.
                <br />
                The last reported description of the weather was:{" "}
                {this.state.description}.
              </span>
            )}
          </p>
        </form>
      </div>
    );
  }
}

export default Weather;

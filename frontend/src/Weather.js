import React, { Component } from "react";
import "./Weather.css";

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
      weather: null,
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
            weather: null,
          });
        } else {
          this.setState({
            error: "",
            temperature: json.main.temp,
            high: json.main.temp_max,
            low: json.main.temp_min,
            description: json.weather[0].description,
            city: json.name,
            weather: json.weather,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { description } = this.state;

    let weatherIcon = null;

    if (description) {
      const iconCode = this.state.weather ? this.state.weather[0].icon : null;
      const iconUrl = iconCode
        ? `http://openweathermap.org/img/w/${iconCode}.png`
        : null;
      weatherIcon = iconUrl && <img src={iconUrl} alt={description} />;
    }

    return (
      <div className="weather-page-content">
        <h2>Weather Forecast</h2>
        <form onSubmit={this.handleSubmit}>
          <label class="weather-label">
            Enter your zip code:  <input type="text" onChange={this.handleChange} />
          </label>
          <br />
          <br />
          <input type="submit" class="weather-submit" value="Get my forecast!" />
          <br />
          <br />
          <p>
            <div className="weather-icon-container">{weatherIcon}</div>
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
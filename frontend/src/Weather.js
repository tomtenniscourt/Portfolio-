import React, { Component } from "react";

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
      <div>
        <h1>Weather Forecast</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter your zip code:
            <input type="text" onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Get my forecast!" />
          <br />
          <p>
            {this.state.error && <span>{this.state.error}</span>}
            {this.state.temperature && (
              <span>
                Current temperature in {this.state.city}:{" "}
                {this.state.temperature}°F, with a high of {this.state.high}°F
                and a low of {this.state.low}°F. {this.state.description}.
              </span>
            )}
          </p>
        </form>
      </div>
    );
  }
}

export default Weather;

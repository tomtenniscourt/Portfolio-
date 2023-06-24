import React from "react";

function Home() {
  return (
    <div class="page-content">
      <h2>Hello</h2>
      <p>This is the home page.</p>
      <p>
        Below is a list of projects that I have been working on, in order to
        demonstate my skills as a Junior Software Engineer:
      </p>
      <ul class="home-links">
        <li>
          <a href="./tictactoe">Tic Tac Toe</a>
          <p>
            A game of tic tac toe usesing simple JavaScript logic, that can be
            played by two users on the same computer.
          </p>
          <button class="tic-tac-toe-go">Go to App</button> <button class="tic-tac-toe-info">More info</button>
        </li>
        <br />
        <li>
          <a href="./joke">Dad Joke Generator</a>
          <p>
            Using a 3rd party API, a random 'Dad Joke' is generated on the
            screen for the user
          </p>
          <button class="joke-go">Go to App</button> <button class="joke-info">More info</button>
        </li>
        <br />
        <li>
          <a href="./weather">Weather Forecast</a>
          <p>
            Another application that uses a 3rd party API - this time using real
            time data to fetch weather information for any given U.S. zip code
          </p>
          <button class="weather-go">Go to App</button> <button class="weather-info">More info</button>
        </li>
        <br />
        <li>
          <a href="./paint">Paint</a>
          <p>
            A JavaScript application that enables users to paint on a blank
            canvas
          </p>
          <button class="paint-go">Go to App</button> <button class="paint-info">More info</button>
        </li>
        <br />
      </ul>
    </div>
  );
}

export default Home;

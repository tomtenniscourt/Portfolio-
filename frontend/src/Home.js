import React, { useState } from "react";
import Tictactoe from "./Tictactoe";
import Joke from "./Joke";
import Weather from "./Weather";
import Paint from "./Paint";

function Home() {
  const [showTicTacToe, setShowTicTacToe] = useState(false);

  const handleShowTicTacToe = () => {
    setShowTicTacToe(true);
  };

  const handleHideTicTacToe = () => {
    setShowTicTacToe(false);
  };

  

  return (
    <div className="home-page-content">
      <h2>Hello</h2>
      <p>
        Below is a list of projects that I have been working on, in order to
        demonstrate my skills as a Junior Software Engineer:
      </p>
      <ul className="home-links">
        <div className="tic-tac-toe-home">
          <li>
            <h3>Tic Tac Toe</h3>
            <p>
              A game of tic tac toe using simple JavaScript logic, that can be
              played by two users on the same computer.
            </p>
            <div className="button-container">
              {!showTicTacToe ? (
                <button
                  className="reveal-tictactoe"
                  onClick={handleShowTicTacToe}
                >
                  Play!
                </button>
              ) : (
                <button
                  className="reveal-tictactoe" 
                  onClick={handleHideTicTacToe}
                >
                  End Game
                </button>
              )}
            </div>
            {showTicTacToe && (
              <Tictactoe onHideTicTacToe={handleHideTicTacToe} />
            )}
            <br />
          </li>
        </div>
        <div className="dad-joke-generator-home">
          <li>
            <h3>Dad Joke Generator</h3>
            <p>
              Using a 3rd party API, a random 'Dad Joke' is generated on the
              screen for the user
            </p>
            <div className="button-container">
              <a href="./joke">
                <button className="go-joke">Go to App</button>
              </a>{" "}
              <button className="info-joke">More info</button>
            </div>
            <br />
            <Joke />
            <br />
          </li>
        </div>
        <div className="weather-forecast-home">
          <li>
            <h3>Weather Forecast</h3>
            <p>
              Another application that uses a 3rd party API - this time using
              real time data to fetch weather information for any given U.S. zip
              code
            </p>
            <div className="button-container">
              <a href="./weather">
                <button className="go-weather">Go to App</button>
              </a>{" "}
              <button className="info-weather">More info</button>
            </div>
          </li>
          <Weather />
          <br />
        </div>
        <div className="paint-home">
          <li>
            <h3>Paint</h3>
            <p>
              A JavaScript application that enables users to paint on a blank
              canvas
            </p>
            <div className="button-container">
              <a href="./paint">
                <button className="go-paint">Go to App</button>
              </a>{" "}
              <button className="info-paint">More info</button>
            </div>
            <Paint />
          </li>
          <br />
        </div>
      </ul>
    </div>
  );
}

export default Home;

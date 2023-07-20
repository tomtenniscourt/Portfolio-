import React, { useState } from "react";
import Tictactoe from "./Tictactoe";
import Joke from "./Joke";
import Weather from "./Weather";
import Paint from "./Paint";

function Home() {
  const [showTicTacToe, setShowTicTacToe] = useState(false);
  const [showJoke, setShowJoke] = useState(false);
  const [showWeather, setShowWeather] = useState(false); 
  const [showPaint, setShowPaint] = useState(false); 

  const handleShowTicTacToe = () => {
    setShowTicTacToe(true);
  };

  const handleHideTicTacToe = () => {
    setShowTicTacToe(false);
  };

  const handleShowJoke = () => {
    setShowJoke(true);
  };

  const handleHideJoke = () => {
    setShowJoke(false);
  };

  const handleShowWeather = () => {
      setShowWeather(true);
    };

  const handleHideWeather = () => {
      setShowWeather(false);
    };

  const handleShowPaint = () => {
        setShowPaint(true);
      };

  const handleHidePaint = () => {
        setShowPaint(false);
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
              <h2>Tic Tac Toe</h2>
              <p>
                A game of tic tac toe using simple JavaScript logic, that can be
                played by two users on the same computer.
              </p>
              {showTicTacToe && (
                <Tictactoe onHideTicTacToe={handleHideTicTacToe} />
              )}
              <div className="button-container">
                {!showTicTacToe ? (
                  <button
                    className="reveal-tictactoe"
                    onClick={handleShowTicTacToe}
                  >
                    Launch!
                  </button>
                ) : (
                  <button
                    className="hide-tictactoe"
                    onClick={handleHideTicTacToe}
                  >
                    Close
                  </button>
                )}
              </div>
            </li>{" "}
            <br />
          </div>
          <div className="dad-joke-generator-home">
            <li>
              <h2>Dad Joke Generator</h2>
              <p>
                Using a 3rd party API, a random 'Dad Joke' is generated on the
                screen for the user
              </p>
              {showJoke && (
                <Joke
                  isVisible={showJoke} // Use the correct prop name here
                  onHideJoke={handleHideJoke}
                  savedJokes={[]} // Pass any saved jokes here
                  setSavedJokes={() => {}} // Pass the function to update saved jokes
                />
              )}
              <div className="button-container">
                {!showJoke ? (
                  <button className="reveal-joke" onClick={handleShowJoke}>
                    Launch!
                  </button>
                ) : (
                  <>
                    <br />
                    <button className="hide-joke" onClick={handleHideJoke}>
                      Close
                    </button>
                  </>
                )}
              </div>
            </li>
            <br />
          </div>
          <div className="weather-forecast-home">
            <li>
              <h2>Weather Forecast</h2>
              <p>
                Another application that uses a 3rd party API - this time using
                real-time data to fetch weather information for any given U.S.
                zip code
              </p>
              {showWeather && <Weather onHideWeather={handleHideWeather} />}
              <div className="button-container">
                {!showWeather ? (
                  <button
                    className="reveal-weather"
                    onClick={handleShowWeather}
                  >
                    Launch!
                  </button>
                ) : (
                  <>
                    {showWeather && <br />}
                    <button
                      className="hide-weather"
                      onClick={handleHideWeather}
                    >
                      Close
                    </button>
                  </>
                )}
              </div>
            </li>
            <br />
          </div>
          <div className="paint-home">
            <li>
              <h2>Paint</h2>
              <p>
                A JavaScript application that enables users to paint on a blank
                canvas
              </p>
              <div className="button-container">
                {!showPaint ? (
                  <button className="reveal-paint" onClick={handleShowPaint}>
                    Launch!
                  </button>
                ) : null}
                {showPaint && <Paint onHidePaint={handleHidePaint} />}
                {showPaint && (
                  <>
                    <br />
                    <button className="hide-paint" onClick={handleHidePaint}>
                      Close
                    </button>
                  </>
                )}
              </div>
            </li>
            <br />
          </div>
        </ul>
      </div>
    );
}

export default Home;

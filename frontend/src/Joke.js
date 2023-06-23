import React, { useState } from "react";
import "./Joke.css";

const Joke = ({ savedJokes, setSavedJokes }) => {
  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.joke);
      })
      .catch((error) => console.log(error));
  };

  const saveJoke = () => {
    setSavedJokes([...savedJokes, joke]);
  };

  return (
    <div className="joke-page">
      <h1>Dad Joke Generator</h1>
      <p>
        Press the <span className="button-highlight">BUTTON</span> below
        to randomly generate a thigh-slapping cracker straight to your screen.
        <br />
      </p>
      <button className="joke-button" onClick={generateJoke}>
        Joke Button
      </button>
      {joke && (
        <div className="joke-container">
          <p className="joke-text">{joke}</p>
        </div>
      )}
    </div>
  );
};

export default Joke;

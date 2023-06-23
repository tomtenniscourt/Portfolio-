import React from "react";

function Home() {
  return (
    <div class="page-content">
      <br />
      <h2>Hello</h2>
      <p>This is the home page.</p>
      <p>
        Below is a list of projects that I have been working on, in order to
        demonstate my skills as a Junior Software Engineer:
      </p>
      <li>
        <a href="./tictactoe">Tic Tac Toe</a>
      </li>
      <br />
      <li>
        <a href="./joke">Dad Joke Generator</a>
      </li>
      <br />
      <li>
        <a href="./weather">Weather Forecast</a>
      </li>
    </div>
  );
}

export default Home;

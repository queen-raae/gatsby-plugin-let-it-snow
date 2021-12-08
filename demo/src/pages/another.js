import React from "react";
import { Link } from "gatsby";
import Colors from "../components/colors";

const AnotherPage = () => {
  return (
    <main>
      <Colors />
      <section>
        <h1>
          <span role="img" aria-label="snowflake emojii">
            ❄️&nbsp;
          </span>
          Let it snow...
          <span role="img" aria-label="snowflake emojii">
            &nbsp;❄️
          </span>
          <br />
        </h1>
        <p>Another page, to demonstrate it only loads once!</p>
        <small>
          <Link to="/">Go home</Link>
        </small>
      </section>
    </main>
  );
};

export default AnotherPage;

import React from "react";
import { Link } from "gatsby";

const AnotherPage = () => {
  return (
    <main>
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

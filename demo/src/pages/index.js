import React from "react";
import { Link } from "gatsby";
import Colors from "../components/colors";

const IndexPage = () => {
  return (
    <main>
      <Colors />
      <section>
        <h1>
          <span role="img" aria-label="snowflake emojii">
            &nbsp;❄️&nbsp;
          </span>
          Let it snow...
          <span role="img" aria-label="snowflake emojii">
            &nbsp;❄️&nbsp;
          </span>
          <br />
        </h1>
        <p>
          Want to sprinkle some old school holiday joy on your own page? Install{" "}
          <a href="https://github.com/queen-raae/gatsby-plugin-let-it-snow">
            @raae/gatsby-plugin-let-it-snow!
          </a>
        </p>
        <p>
          <small>
            <Link to="/another/">Go to another page</Link> and notice it's only
            initalized once.
          </small>
        </p>
      </section>
      <footer>
        <small>
          Made with
          <span role="img" aria-label="snowflake emojii">
            &nbsp;❤️&nbsp;
          </span>
          by{" "}
          <a href="https://queen.raae.codes/?utm_source=demo&utm_campaign=let-it-snow">
            Queen Raae
          </a>
          .
        </small>
      </footer>
    </main>
  );
};

export default IndexPage;

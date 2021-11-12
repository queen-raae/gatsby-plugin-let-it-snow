import React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main>
      <section>
        <h1>Page not found</h1>
        <p>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
        </p>
        <small>
          <Link to="/">Go home</Link>
        </small>
      </section>
    </main>
  );
};

export default NotFoundPage;

import React, { useEffect, useState } from "react";
import { getColor, setColor } from "../utils/colors";

const Colors = () => {
  const [colors, setColors] = useState({
    snow1: getColor("snow1"),
    snow2: getColor("snow2"),
  });

  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const onChange = () => {
      setColors({
        snow1: getColor("snow1"),
        snow2: getColor("snow2"),
      });
    };

    mql.addEventListener("change", onChange);

    return () => mql.removeEventListener("change", onChange);
  }, []);

  const onChange = (event) => {
    setColors({
      ...colors,
      [event.target.name]: event.target.value,
    });

    setColor(event.target.name, event.target.value);
  };

  return (
    <section className="colors">
      {Object.entries(colors).map(([key, value]) => {
        return (
          <label key={key}>
            {key}{" "}
            <input type="color" name={key} value={value} onChange={onChange} />
          </label>
        );
      })}
    </section>
  );
};

export default Colors;

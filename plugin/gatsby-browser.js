// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/

import { getCssVariable, isSeason } from "./lib/utils";
import snowfall from "./lib/snowfall";

export const onInitialClientRender = (_, pluginOptions) => {
  const { colors, intensity, duration, season } = pluginOptions;

  if (!isSeason(new Date(), season)) {
    return;
  }

  const colorsMapped = colors
    .map((color) => {
      if (color.startsWith("--")) {
        return getCssVariable(color);
      } else {
        return color;
      }
    })
    .filter((color) => !!color);

  snowfall({ colors: colorsMapped, intensity, duration: duration * 1000 });
};

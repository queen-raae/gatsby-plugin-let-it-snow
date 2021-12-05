// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/

import { isSeason } from "./lib/utils";
import snowfall from "./lib/snowfall";

export const onInitialClientRender = (_, pluginOptions) => {
  const { colors, intensity, duration, season } = pluginOptions;

  if (!isSeason(new Date(), season)) {
    return;
  }

  snowfall({ colors, intensity, duration: duration * 1000 });
};

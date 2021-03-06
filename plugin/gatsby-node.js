// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    colors: Joi.array()
      .items(Joi.string())
      .min(1)
      .default(["#fff"])
      .description("Array of hex color values"),
    intensity: Joi.string()
      .valid("regular", "light", "blizzard")
      .default("regular"),
    duration: Joi.number()
      .integer()
      .min(1)
      .default(15)
      .description("Duration of snowfall in seconds"),
    season: Joi.object()
      .keys({
        start: Joi.date().required(),
        end: Joi.date().required(),
      })
      .default({
        start: new Date("December 1"),
        end: new Date("January 4"),
      })
      .description("Start and end date for when snow should be activated"),
  });
};

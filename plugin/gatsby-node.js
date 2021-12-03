// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    colors: Joi.array()
      .items(Joi.string())
      .default(["#fff"])
      .description("Array of hex color values"),
    season: Joi.object()
      .keys({
        start: Joi.date(),
        end: Joi.date(),
      })
      .default({
        start: new Date("December 1"),
        end: new Date("January 4"),
      })
      .description("Start and end date for when snow should be visible"),
  });
};

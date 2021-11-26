// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    colors: Joi.array()
      .items(Joi.string().default("#ffffff"))
      .description("Array of hex color values"),
    intensity: Joi.string()
      .valid("regular", "light", "blizzard")
      .default("regular"),
    duration: Joi.number().default(15 * 1000)
  });
};






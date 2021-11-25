// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    colors: Joi.array()
      .items(Joi.string().default("#ffffff"))
      .description("Array of hex color values"),
    duration: Joi.array()
      .items(Joi.number().min(3).max(30).integer().required().default(15 * 1000))
      .description("Pick a number")
  });
};






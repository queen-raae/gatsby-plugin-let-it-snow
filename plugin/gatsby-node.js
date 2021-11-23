// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    colors: Joi.array()
      .items(Joi.string().default("#ffffff"))
      .description("Array of hex color values"),
  });
};

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    // Validate that the anonymize option is defined by the user and is a boolean
    duration: Joi.array()
      .items(Joi.number().default(15 * 1000))
      .description("Pick a number"),
  })
}

// ().default("15"))
//       .description("Array of hex color values"),
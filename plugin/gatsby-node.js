// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
export const pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    colors: Joi.array()
      .items(Joi.string().default("#ffffff"))
      .description("Array of hex color values"),
  });
};

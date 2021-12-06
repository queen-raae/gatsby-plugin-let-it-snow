module.exports = {
  plugins: [
    {
      resolve: "@raae/gatsby-plugin-let-it-snow",
      options: {
        colors: ["#EBDEF0", "--snow1", "--snow2", "--snow3"],
        duration: 18,
        season: {
          start: new Date("December 2, 2023"),
          end: new Date("January 11, 2024"),
        },
      },
    },
  ],
};

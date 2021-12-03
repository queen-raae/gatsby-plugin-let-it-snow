module.exports = {
  plugins: [
    {
      resolve: "@raae/gatsby-plugin-let-it-snow",
      options: {
        colors: ["#fff", "#ffb6c1"],
        season: {
          start: new Date("December 2, 2023"),
          end: new Date("January 11, 2024"),
        },
      },
    },
  ],
};

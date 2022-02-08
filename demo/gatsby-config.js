module.exports = {
  plugins: [
    {
      resolve: "@raae/gatsby-plugin-let-it-snow",
      options: {
        colors: ["#EBDEF0", "--snow1", "--snow2", "--snow3"],
        duration: 30,
        season: {
          start: new Date("January 1"),
          end: new Date("December 31"),
        },
      },
    },
  ],
};

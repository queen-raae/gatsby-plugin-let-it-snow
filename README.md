# @raae/gatsby-plugin-let-it-snow

> Add some old school cheer to your site with falling snow this holiday season ❄️❄️❄️

Heavily inspired by my memory of snow falling on my WordPress blog way back when...

## A message from Queen [@raae](https://twitter.com/raae)

Learn how to get the most out of Gatsby and **stay updated** on the plugin by [subscribing](https://queen.raae.codes/emails/?utm_source=readme&utm_campaign=let-it-snow) to emails from yours truly.

## How to install

`npm install @raae/gatsby-plugin-let-it-snow`

or

`yarn add @raae/gatsby-plugin-let-it-snow`

## How to use

Add the plugin to the plugins array in your `gatsby.config`.

```
// gatsby.config.js

module.exports = {
  plugins: [
    `@raae/gatsby-plugin-let-it-snow`
  ],
}
```

## Plugin Options

### Colors

You can decide the color of the snow flakes. Each snowflake gets a random color from the list.  
**Type:** An array of hex colors, or css variable names resolving to hex colors.  
**Default:** `["#fff"]`

```
// gatsby.config.js

module.exports = {
  plugins: [
    {
      resolve: "@raae/gatsby-plugin-let-it-snow",
      options: {
        colors: ["#fff000", "--snow-color-1", "--snow-color-2"],
      },
    },
  ],
};
```

### Intensity

You can choose the intensity of the snow.  
**Type**: One of "light", "regular" or "blizzard".  
**Default:** `"regular"`

```
// gatsby.config.js

module.exports = {
  plugins: [
    {
      resolve: "@raae/gatsby-plugin-let-it-snow",
      options: {
        intensity: "blizzard",
      },
    },
  ],
};
```

### Duration

You can decide how long the snow should fall for.  
**Type**: Positive integer  
**Default:** `15`

```
// gatsby.config.js

module.exports = {
  plugins: [
    {
      resolve: "@raae/gatsby-plugin-let-it-snow",
      options: {
        duration: 10,
      },
    },
  ],
};
```

### Season

You may decide the time of year the snow should fall.  
**Type**: Dates, but year will be ignored.  
**Default:** `{ start: new Date("December 1"), end: new Date("January 4") }`  
**Important:** Year will be ignored, and snow will fall each year within the configured season.

```
// gatsby.config.js

module.exports = {
  plugins: [
    {
      resolve: "@raae/gatsby-plugin-let-it-snow",
      options: {
        season: {
          start: new Date("November 15"),
          end: new Date("January 15"),
        },
      },
    },
  ],
};
```

## Powered by Canvas Confetti 🎉

Under the hood this plugin uses the amazing [Canvas Confetti](https://github.com/catdad/canvas-confetti) by [@kirilv](https://twitter.com/kirilv).

## How to contribute

If you would like to contribute with code, check out `CONTRIBUTING.md`.

### Questions, Feedback and Suggestions

Do not be shy!

If you have any questions, feedback or suggestions head on over to [discussions](https://github.com/queen-raae/gatsby-plugin-let-it-snow/discussions).

### Bugs

If you find a bug please open an [issue](https://github.com/raae/gatsby-plugin-let-it-snow/issues) and/or create a pull request to fix it.

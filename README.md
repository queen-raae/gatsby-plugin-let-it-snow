# @raae/gatsby-plugin-let-it-snow

> Add some old school fun to your site with falling snow this holiday season ❄️

Heavily inspired by my memory of snow falling on my WordPress blog way back when...

## A message from Queen [@raae](https://twitter.com/raae)

Learn how to get the most out of Gatsby and **stay updated** on the plugin by [subscribing](https://queen.raae.codes/emails/?utm_source=readme&utm_campaign=let-it-snow) to emails from yours truly.

## How to install

`npm install @raae/gatsby-plugin-let-it-snow`

or

`yarn add @raae/gatsby-plugin-let-it-snow`

## How to use

```
module.exports = {
  plugins: [
    `@raae/gatsby-plugin-let-it-snow`
  ],
}
```

## Plugin Options

### Colors

You can decide the color of the snow flakes.
**Type:**: An array of hex colors, or css variable names resolving to hex colors.
**Default:** `["#fff"]`

```
  {
    resolve: "@raae/gatsby-plugin-let-it-snow",
    options: {
      colors: ["#fff000", "--snow-color-1", "--snow-color-2"],
    },
  },
```

### Intensity

You can choose the intensity of the snow.
Accepted values in increasing intensity: "light", "regular" and "blizzard".
Default value if non given: "regular"

```
  {
    resolve: "@raae/gatsby-plugin-let-it-snow",
    options: {
      intensity: "blizzard",
    },
  },
```

### Duration

You can configure the duration of the snowfall (as seconds).
Default value if non given: 15

```
  {
    resolve: "@raae/gatsby-plugin-let-it-snow",
    options: {
      duration: 10,
    },
  },
```

### Season

You can pass a `start` and `end` date to determine when the snow will start and end.
Note: Year will be ignored, and snow will fall each year within the configured season.

```
  {
    resolve: "@raae/gatsby-plugin-let-it-snow",
    options: {
      season: {
        start: new Date("December 1, 2021 00:00:10"),
        end: new Date("December 31, 2021 23:59:50"),
      },
    },
  },
```

## Powered by Canvas Confetti 🎉

Under the hood this plugin uses the amazing [Canvas Confetti](https://github.com/catdad/canvas-confetti) by [@kirilv](https://twitter.com/kirilv).

## How to contribute with code

### Getting started

- Fork the repo
- Clone your fork
- Install the packages: `yarn install`
- Run the demo: `yarn develop`

To be able to have both the demo and plugin in the same repo we use [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/).

- Plugin code is in the `/plugin` folder,
- and the demo code is in the `/demo` folder.

### Do your thing

Solve an [issue](https://github.com/queen-raae/gatsby-plugin-let-it-snow/issues) or do something else!

### Create a Pull Request

To get your changes merged into the project create a Pull Request from your fork.

## How to contribute in other ways

### Questions, Feedback and Suggestions

If you have any questions, feedback or suggestions head on over to [discussions](https://github.com/queen-raae/gatsby-plugin-let-it-snow/discussions).

### Bugs

If you find a bug please open an [issue](https://github.com/raae/gatsby-plugin-let-it-snow/issues) and/or create a pull request to fix it.

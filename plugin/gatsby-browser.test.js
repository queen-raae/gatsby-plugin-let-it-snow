import { addDays } from "date-fns";
import snowfall from "./lib/snowfall";
import { getCssVariable } from "./lib/utils";
import { onInitialClientRender } from "./gatsby-browser";

jest.mock("./lib/snowfall");
jest.mock("./lib/utils", () => {
  return {
    ...jest.requireActual("./lib/utils"),
    getCssVariable: jest.fn(),
  };
});

describe("onInitialClientRender", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("season option", () => {
    it("activates snowfall when in season", () => {
      const today = new Date();
      const pluginOptions = {
        colors: ["fff"],
        intensity: "blizzard",
        duration: 10,
        season: {
          start: addDays(today, -1).toISOString(),
          end: addDays(today, +1).toISOString(),
        },
      };

      onInitialClientRender(null, pluginOptions);

      expect(snowfall).toBeCalledTimes(1);
      expect(snowfall).toBeCalledWith({
        colors: ["fff"],
        intensity: "blizzard",
        duration: 10 * 1000,
      });
    });

    it("does not activate snowfall outside the season", () => {
      const today = new Date();
      const pluginOptions = {
        colors: ["fff"],
        intensity: "blizzard",
        duration: 10,
        season: {
          start: addDays(today, -10).toISOString(),
          end: addDays(today, -1).toISOString(),
        },
      };

      onInitialClientRender(null, pluginOptions);

      expect(snowfall).toBeCalledTimes(0);
    });
  });

  describe("color option", () => {
    it("asks css for variables when supplied", () => {
      const today = new Date();
      const pluginOptions = {
        colors: ["fff", "--snow-color-1", "--snow-color-2"],
        intensity: "blizzard",
        duration: 10,
        season: {
          start: addDays(today, -1).toISOString(),
          end: addDays(today, +1).toISOString(),
        },
      };

      onInitialClientRender(null, pluginOptions);

      expect(getCssVariable).toBeCalledTimes(2);
    });
  });
});

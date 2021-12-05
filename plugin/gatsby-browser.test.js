import { addDays } from "date-fns";
import snowfall from "./lib/snowfall";
import { onInitialClientRender } from "./gatsby-browser";

jest.mock("./lib/snowfall");

describe("onInitialClientRender", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

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

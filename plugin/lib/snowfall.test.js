import confetti from "canvas-confetti";
import snowfall, { animationFrame } from "./snowfall";
import { getCssVariable } from "./utils";

jest.mock("./utils", () => {
  return {
    ...jest.requireActual("./utils"),
    getCssVariable: jest.fn(),
  };
});
jest.mock("canvas-confetti");
global.requestAnimationFrame = jest.fn((cb) => cb());

const OPTIONS = {
  colors: ["fff", "--snow-color-1", "--snow-color-2"],
  intensity: "blizzard",
  duration: 1,
};

describe("snowfall", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("not an infinite loop when duration is set", () => {
    // Will exeed maximum stack if infinite
    snowfall({
      duration: 1,
    });
    expect(confetti).toBeCalled();
    expect(global.requestAnimationFrame).toBeCalled();
  });

  describe("animationFrame", () => {
    it("calls confetti and loops when time left", () => {
      animationFrame({ animationEnd: 6 }, 5);

      expect(confetti).toBeCalledTimes(1);
      expect(global.requestAnimationFrame).toBeCalledTimes(1);
    });

    it("calls getCssVariable when appropriate when time left", () => {
      animationFrame(
        {
          animationEnd: 6,
          colors: ["fff", "--snow-color-1", "--snow-color-2"],
        },
        5
      );

      expect(confetti).toBeCalledTimes(1);
      expect(global.requestAnimationFrame).toBeCalledTimes(1);
      expect(getCssVariable).toBeCalledTimes(2);
    });

    it("does not call confetti and does not loop when no time left", () => {
      animationFrame({ animationEnd: 5 }, 5);

      expect(confetti).toBeCalledTimes(0);
      expect(global.requestAnimationFrame).toBeCalledTimes(0);
    });
  });
});

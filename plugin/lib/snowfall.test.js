import confetti from "canvas-confetti";
import snowfall, { animationFrame } from "./snowfall";

jest.mock("canvas-confetti");
global.requestAnimationFrame = jest.fn((cb) => cb());

const OPTIONS = {
  colors: ["fff"],
  intensity: "blizzard",
  duration: 1,
};

describe("snowfall", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("not an infinite loop", () => {
    // Will exeed maximum stack if infinite
    snowfall(OPTIONS);
    expect(confetti).toBeCalled();
    expect(global.requestAnimationFrame).toBeCalled();
  });

  describe("animationFrame", () => {
    it("when time left call confetti and recurrsion", () => {
      animationFrame({ animationEnd: 6, ...OPTIONS }, 5);

      expect(confetti).toBeCalledTimes(1);
      expect(global.requestAnimationFrame).toBeCalledTimes(1);
    });

    it("when no time left do not call confetti and recurrsion", () => {
      animationFrame({ animationEnd: 5, ...OPTIONS }, 5);

      expect(confetti).toBeCalledTimes(0);
      expect(global.requestAnimationFrame).toBeCalledTimes(0);
    });
  });
});

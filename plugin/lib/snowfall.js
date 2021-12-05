import confetti from "canvas-confetti";
import { randomInRange } from "./utils";

export const animationFrame = (options, currentTimestamp = Date.now()) => {
  const { animationEnd, duration, skew = 1 } = options;
  const { colors, intensity } = options;

  const timeLeft = animationEnd - currentTimestamp;
  const newSkew = Math.max(0.8, skew - 0.001);
  const ticks = Math.max(200, 500 * (timeLeft / duration));

  if (timeLeft <= 0) {
    return;
  }

  const intensityValues = {
    startVelocity: 0,
    gravity: randomInRange(0.4, 0.6),
    scalar: randomInRange(0.4, 1),
    drift: randomInRange(-0.4, 0.4),
  };

  if (intensity === "blizzard") {
    intensityValues.gravity = randomInRange(0.4, 5);
    intensityValues.drift = randomInRange(-0.4, 20);
  }

  if (intensity === "light") {
    intensityValues.gravity = randomInRange(0.1, 0.2);
    intensityValues.scalar = randomInRange(0.4, 0.6);
    intensityValues.drift = randomInRange(0, 0);
  }

  confetti({
    particleCount: 1,
    startVelocity: 0,
    ticks: ticks,
    origin: {
      x: Math.random(),
      // since particles fall down, skew start toward the top
      y: Math.random() * newSkew - 0.2,
    },
    colors: [colors[Math.floor(randomInRange(0, colors.length))]],
    shapes: ["circle"],
    ...intensityValues,
    disableForReducedMotion: true,
  });

  requestAnimationFrame(() => {
    animationFrame({ ...options });
  });
};

export default (options) => {
  const now = Date.now();

  animationFrame({
    ...options,
    animationEnd: now + options.duration,
  });
};

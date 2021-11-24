// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/

import confetti from "canvas-confetti";

export const onInitialClientRender = (_, options) => {
  const { colors = ["#ffffff"], intensity } = options;

  const duration = 15 * 1000;
  const animationEnd = Date.now() + duration;
  let skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const frame = () => {
    const timeLeft = animationEnd - Date.now();
    const ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);

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

    if (intensity === "light-snow") {
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
        y: Math.random() * skew - 0.2,
      },
      colors: [colors[Math.floor(randomInRange(0, colors.length))]],
      shapes: ["circle"],
      ...intensityValues,
      disableForReducedMotion: true,
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  };

  frame();
};

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/

import confetti from "canvas-confetti";

export const onInitialClientRender = () => {
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

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: ["#ffffff"],
      shapes: ["circle"],
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.4, 1),
      drift: randomInRange(-0.4, 0.4),
      disableForReducedMotion: true,
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  };

  frame();
};

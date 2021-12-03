// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/

import confetti from "canvas-confetti";
import {
  addYears,
  getYear,
  setYear,
  isBefore,
  isWithinInterval,
  parseISO,
} from "date-fns";

const isSeason = ({ start, end }) => {
  const currentDate = new Date();
  const currentYear = getYear(currentDate);

  // Ignore year from config dates
  const startDate = setYear(parseISO(start), currentYear);
  let endDate = setYear(parseISO(end), currentYear);

  if (isBefore(endDate, startDate)) {
    endDate = addYears(endDate, 1);
  }

  return isWithinInterval(currentDate, {
    start: startDate,
    end: endDate,
  });
};

export const onInitialClientRender = (_, options) => {
  const { colors, season } = options;

  if (!isSeason(season)) {
    return;
  }

  const now = Date.now();
  const duration = 15 * 1000;
  const animationEnd = now + duration;
  let skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const frame = () => {
    const timeLeft = animationEnd - now;
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
      colors: [colors[Math.floor(randomInRange(0, colors.length))]],
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

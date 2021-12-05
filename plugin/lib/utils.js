import {
  addYears,
  getYear,
  setYear,
  isBefore,
  isWithinInterval,
  parseISO,
} from "date-fns";

export const randomInRange = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const isSeason = (date, { start, end }) => {
  try {
    const currentYear = getYear(date);

    // Ignore year from config dates
    const startDate = setYear(parseISO(start), currentYear);
    let endDate = setYear(parseISO(end), currentYear);

    if (isBefore(endDate, startDate)) {
      endDate = addYears(endDate, 1);
    }

    const interval = {
      start: startDate,
      end: endDate,
    };

    return (
      isWithinInterval(date, interval) ||
      isWithinInterval(addYears(date, 1), interval)
    );
  } catch (error) {
    console.warn(
      "Problem with @raae/gatsby-plugin-let-it-snow season configuration:",
      error.message
    );
    return false;
  }
};

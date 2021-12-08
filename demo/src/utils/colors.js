const getColor = (name) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(`--${name}`)
    .trim();
};

const setColor = (name, value) => {
  document.documentElement.style.setProperty(`--${name}`, value);
};

export { getColor, setColor };

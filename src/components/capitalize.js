const capitalize = string => {
  const firstLetter = string.charAt(0).toUpperCase();
  const rest = string.slice(1).toLowerCase();

  return firstLetter + rest;
};

export default capitalize;

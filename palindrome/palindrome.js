const palindrome = (str) => {
  str = str.toLowerCase().split(" ").join("");

  const strReversed = str.split("").reverse().join("");

  return str === strReversed ? true : false;
};

module.exports = { palindrome };

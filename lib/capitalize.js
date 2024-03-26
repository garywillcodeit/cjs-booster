const capitalize = (string) => {
  try {
    if (!string) throw new Error('"capitalize"\'s takes a string argument.');

    if (typeof string !== "string")
      throw new Error('"capitalize"\'s argument must be a string.');

    if (string.trim().length === 0)
      throw new Error('"capitalize"\'s takes a string argument.');

    string = string.trim().split("");

    let newString = "";

    for (let i = 0; i < string.length; i++) {
      let letter = string[i];
      if (i === 0) newString += letter.toUpperCase();
      else newString += letter.toLowerCase();
    }

    return newString;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { capitalize };

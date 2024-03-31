/**
 * Split a string into X lines, where X corresponds to the parameter "lines".
 * @param {String} string - The string to split.
 * @param {Number} lines - In case of an array of objects: the property to sort.
 * @returns {Array} - An array with each part of the splited string as values.
 * @throws {Error} - If: - the first parameter is not a string;  - the second parameter is not an integer.
 * */

const splitLines = (string, lines) => {
  try {
    if (typeof string !== "string") {
      throw new Error('"splitLines"\'s first parameter must be a string.');
    }

    if (!Number.isInteger(lines)) {
      throw new Error('"splitLines"\'s second parameter must be an integer.');
    }

    let newString = string.trim().split(" ");

    const partLength = Math.ceil(newString.length / lines);

    let array = [];

    for (let i = 0; i < partLength; i++) {
      if (newString.length === 0) break;
      let strPart = newString.slice(0, partLength);
      array.push(strPart.join(" "));
      newString.splice(0, partLength);
    }

    return array;
  } catch (error) {
    throw new Error(error.message);
  }
};

// ISSUE TO FIX: does not split into the correct lines' number after 6/7 lines.

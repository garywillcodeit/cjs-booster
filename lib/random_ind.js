const randomInd = (array) => {
  try {
    if (!Array.isArray(array))
      throw new Error("randomInd's argument must be an array.");

    let index = Number.POSITIVE_INFINITY;

    while (index >= array.length || index < 0) {
      index = Math.round(Math.random() * array.length);
    }
    return index;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { randomInd };

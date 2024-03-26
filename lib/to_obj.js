const toObject = (array) => {
  try {
    if (!Array.isArray(array)) {
      throw new Error("toObject's argument must be an array.");
    }

    let object = {};

    array.forEach((e, i) => (object[i] = e));

    return object;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { toObject };

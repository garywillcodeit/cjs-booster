const allTrue = (array) => {
  try {
    if (!Array.isArray(array)) {
      throw new Error('"all" must have an array as attribute.');
    }

    let isTrue = true;
    array.forEach((e) => {
      if (!e) {
        isTrue = false;
      }
    });

    return isTrue;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { allTrue };

const anyTrue = (array) => {
  try {
    if (!Array.isArray(array)) {
      throw new Error('"any" must have an array as attribute.');
    }

    let isTrue = false;
    array.forEach((e) => {
      if (e) {
        isTrue = true;
      }
    });

    return isTrue;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { anyTrue };

const range = (number) => {
  try {
    if (typeof number !== "number")
      throw new Error('"range"\'s argument must be a number.');

    let array = [];

    for (let i = 0; i < number; i++) {
      array.push(i);
    }

    return array;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { range };

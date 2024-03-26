const isObject = (object) => {
  try {
    if (!object || [undefined, null, ""].includes(object)) {
      return false;
    } else if (typeof object !== "object") {
      return false;
    } else {
      if (Array.isArray(object)) {
        return false;
      } else {
        return true;
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { isObject };

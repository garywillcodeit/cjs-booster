const isEmpty = (data) => {
  try {
    if (!data) {
      return true;
    } else if (typeof data !== "object") {
      throw new Error(
        '"isEmpty" argument must be an array or an object. For number and string, use "isNull" instead.'
      );
    } else {
      if (Array.isArray(data)) {
        if (data.length <= 0) return true;
        else return false;
      } else {
        if (Object.keys(data).length <= 0) return true;
        else return false;
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { isEmpty };

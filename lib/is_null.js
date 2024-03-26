const isNull = (data) => {
  try {
    if (!data) {
      return true;
    } else if ([null, undefined, 0, "", false].includes(data)) {
      return true;
    } else if (typeof data === "string" && data.trim().length === 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { isNull };

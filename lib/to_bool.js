const { isObject } = require("./is_object");

const toBool = (string) => {
  try {
    if (!string || typeof string !== "string") {
      throw new Error(
        'toBool takes "true" or "false" (type: string) as unique argument.'
      );
    } else if (string === "true") {
      return true;
    } else if (string === "false") {
      return false;
    } else {
      throw new Error(
        'toBool takes "true" or "false" (type: string) as unique argument.'
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { toBool };

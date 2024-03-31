/**
 * Transform a string "true" or "false" into a boolean true or false.
 * @param {String} string - The object to transform.
 * @returns {Boolean} - A boolean.
 * @throws {Error} - The parameter is not a string.
 * */

const toBool = (string) => {
  try {
    if (!string || typeof string !== "string") {
      throw new Error(
        'toBool takes "true" or "false" (type: string) as parameter.'
      );
    } else if (string === "true") {
      return true;
    } else if (string === "false") {
      return false;
    } else {
      throw new Error(
        'toBool takes "true" or "false" (type: string) as parameter.'
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { toBool };

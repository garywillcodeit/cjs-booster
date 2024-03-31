const { allCharacters } = require("../utils/characters");
const { isNull } = require("./is_null");

/**
 * Transform a string into a slug.
 * @param {String} string - The string to transform.
 * @param {Boolean} withTimestamps - If a timestamp is needed in the slug
 * @returns {String} - A new string formated into a slug with or without a timestamp at the end.
 * @throws {Error} - The first parameter is not a string or the second parameter is not a boolean.
 * */

const toSlug = (string, withTimestamps) => {
  if (isNull(string) || typeof string !== "string") {
    throw new Error('"toSlug" take a string as first parameter.');
  }

  if (withTimestamps && typeof withTimestamps !== "boolean") {
    throw new Error('"toSlug" take a boolean as second parameter.');
  }

  string = string
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(" ", "-")
    .split("");

  string = string
    .map((item) => {
      if (!allCharacters.includes(item)) {
        return "-";
      } else return item;
    })
    .join("");

  if (withTimestamps) string = string + "-" + Date.now();

  return string;
};

module.exports = { toSlug };

const { allCharacters } = require("../utils/characters");
const { isNull } = require("./is_null");

const toSlug = (string, withTimestamps) => {
  if (isNull(string) || typeof string !== "string") {
    throw new Error("toSlug take a string as first argument.");
  }

  if (withTimestamps && typeof withTimestamps !== "boolean") {
    throw new Error("toSlug take a boolean as second argument.");
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

console.log(
  toSlug("Ce résultat est un tableau d'objets JSON contenant 5 objets avec")
);

module.exports = { toSlug };

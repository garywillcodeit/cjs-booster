const { maxValue } = require("./lib/Max_value");
const { allTrue } = require("./lib/all_true");
const { anyTrue } = require("./lib/any_true");
const { capitalize } = require("./lib/capitalize");
const { getFormat } = require("./lib/get_format");
const { isDigits } = require("./lib/is_digit");
const { isEmpty } = require("./lib/is_empty");
const { isNull } = require("./lib/is_null");
const { mapFor } = require("./lib/map_for");
const { minValue } = require("./lib/min_value");
const { randomInd } = require("./lib/random_ind");
const { range } = require("./lib/range");
const { reduceFor } = require("./lib/reduce_for");
const { shuffle } = require("./lib/shuffle");
const { sortAsc } = require("./lib/sort_asc");
const { sortDesc } = require("./lib/sort_desc");
const { title } = require("./lib/title");
const { toArray } = require("./lib/to_array");
const { toBool } = require("./lib/to_bool");
const { toObject } = require("./lib/to_obj");
const { toSlug } = require("./lib/to_slug");
const { typeOf } = require("./lib/type_of");
const { uid } = require("./lib/uid");

const {
  lowerCaseLetters,
  upperCaseLetters,
  lowerAccentLetters,
  upperAccentLetters,
  digits,
  allLowerCaseLetters,
  allUpperCaseLetters,
  allLetters,
  allLettersDigits,
  allCharacters,
  unaccentuedCases,
  accentuedCases,
} = require("./utils/characters");

module.exports = {
  randomInd,
  range,
  capitalize,
  title,
  uid,
  isNull,
  isEmpty,
  typeOf,
  sortAsc,
  sortDesc,
  shuffle,
  anyTrue,
  allTrue,
  getFormat,
  isDigits,
  maxValue,
  minValue,
  mapFor,
  reduceFor,
  toArray,
  toBool,
  toObject,
  toSlug,
  lowerCaseLetters,
  upperCaseLetters,
  lowerAccentLetters,
  upperAccentLetters,
  digits,
  allLowerCaseLetters,
  allUpperCaseLetters,
  allLetters,
  allLettersDigits,
  allCharacters,
  unaccentuedCases,
  accentuedCases,
};

const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerAccentLetters = "àáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ";
const upperAccentLetters = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝ";
const digits = "0123456789";
const allLowerCaseLetters = lowerCaseLetters + lowerAccentLetters;
const unaccentuedCases = lowerCaseLetters + upperCaseLetters;
const accentuedCases = lowerAccentLetters + upperAccentLetters;
const allUpperCaseLetters = upperCaseLetters + upperAccentLetters;
const allLetters = allLowerCaseLetters + allUpperCaseLetters;
const allLettersDigits = lowerCaseLetters + upperCaseLetters + digits;
const allCharacters = allLetters + digits;

module.exports = {
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

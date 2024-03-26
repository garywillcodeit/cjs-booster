const splitLines = (string, lines) => {
  try {
    if (typeof string !== "string") {
      throw new Error('"splitLines"\'s first argument must be a string.');
    }

    if (!Number.isInteger(lines)) {
      throw new Error('"splitLines"\'s second argument must be an integer.');
    }

    string = string.trim().split(" ");

    const partLength = Math.ceil(string.length / lines);

    let array = [];

    for (let i = 0; i < partLength; i++) {
      if (string.length === 0) break;
      let strPart = string.slice(0, partLength);
      array.push(strPart.join(" "));
      string.splice(0, partLength);
    }

    return array;
  } catch (error) {
    throw new Error(error.message);
  }
};

const text =
  "Ce résultat est un tableau d'objets JSON contenant 5 objets avec les mêmes propriétés mais des valeurs différentes. Chaque objet a une valeur différente pour prop1, une valeur aléatoire pour prop2, et une valeur incrémentée pour prop3.";

module.exports = { splitLines };

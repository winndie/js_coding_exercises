function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.substr(0, 1).toUpperCase() + word.substr(1, word.length - 1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return firstName.substr(0, 1).toUpperCase() + "." + lastName.substr(0, 1).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  return parseFloat((originalPrice * ((100 + vatRate) / 100)).toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  return parseFloat((originalPrice * ((100 - reduction) / 100)).toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  var ans

  if ((str.length % 2) == 1)
    ans = str.substr(str.length / 2, 1);
  else
    ans = str.substr((str.length / 2) - 1, 2);

  return ans;
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split('').reverse().join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  return words.map(word => { return reverseWord(word) });
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  return users
    .reduce((acc, val) => {

      if (val.type == "Linux")
        acc++;

      return acc;
    }, 0
    );
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  return parseFloat(
    (
      scores.reduce((acc, val) => {
        return acc + val;
      }, 0)
      / scores.length
    )
      .toFixed(2)
  );
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if ((n % 3) == 0 && (n % 5) == 0)
    return "fizzbuzz";

  else if ((n % 3) == 0)
    return "fizz";

  else if ((n % 5) == 0)
    return "buzz";

  return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};

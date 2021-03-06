/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");

  return [...n.toString()].reduce((a, v) => parseInt(a + parseInt(v)), 0);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");

  return Array(end).fill(start).map((v, i) => v = v + (i * step)).filter(v => v <= end);
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  let alertList = [];

  users.forEach(eachUser => {
    eachUser.screenTime
      .filter(eachScreen => eachScreen.date == date)
      .reduce((sumOfDate, eachDate) => {

        Object.values(eachDate.usage)
          .reduce((sumOfApp, eachApp) => sumOfDate = sumOfApp + eachApp, 0)

        if (sumOfDate > 100) alertList.push(eachUser.username);

      }, 0)
  });

  return alertList;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");

  let hexMap = new Map();
  hexMap.set('0', 0);
  hexMap.set('1', 1);
  hexMap.set('2', 2);
  hexMap.set('3', 3);
  hexMap.set('4', 4);
  hexMap.set('5', 5);
  hexMap.set('6', 6);
  hexMap.set('7', 7);
  hexMap.set('8', 8);
  hexMap.set('9', 9);
  hexMap.set('A', 10);
  hexMap.set('B', 11);
  hexMap.set('C', 12);
  hexMap.set('D', 13);
  hexMap.set('E', 14);
  hexMap.set('F', 15);

  return "rgb(" +
    parseInt(hexMap.get([...hexStr][1]) * 16 + hexMap.get([...hexStr][2])) + "," +
    parseInt(hexMap.get([...hexStr][3]) * 16 + hexMap.get([...hexStr][4])) + "," +
    parseInt(hexMap.get([...hexStr][5]) * 16 + hexMap.get([...hexStr][6])) + ")";
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  //  tile location for board
  //  [
  //   [A, B, C],
  //   [D, E, F],
  //   [G, H, I]
  //  ]
  let winSet = ['ABC', 'ADG', 'AEI', 'BEH', 'DEF', 'CFI', 'GHI', 'CEG'];

  let boardMap = new Map();
  boardMap.set('A', board[0][0]);
  boardMap.set('B', board[0][1]);
  boardMap.set('C', board[0][2]);
  boardMap.set('D', board[1][0]);
  boardMap.set('E', board[1][1]);
  boardMap.set('F', board[1][2]);
  boardMap.set('G', board[2][0]);
  boardMap.set('H', board[2][1]);
  boardMap.set('I', board[2][2]);

  function isTheWinner(tile) {

    let tileLoc = [...boardMap.entries()]
      .filter(({ 1: v }) => v == tile)
      .map(([k]) => k)
      .join('');

    if (winSet.some(set => [...set].every(s => tileLoc.includes(s))))
      return true;
  }

  return isTheWinner("X") ? "X" : isTheWinner("0") ? "0" : null;
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};

const AMTHAL = require("./data/index.json");

const randomMathal = () => {
  return AMTHAL[Math.floor(Math.random() * AMTHAL.length)];
};

const randomTen = () => {
  let randomList = new Set();

  while (randomList.size < 10) {
    let random = Math.floor(Math.random() * AMTHAL.length);
    if (!randomList.has(random)) {
      randomList.add(random);
    }
  }
  let array = [...randomList];
  let output = [];
  for (let i in array) {
    output.push(AMTHAL[array[i]]);
  }
  return output;

  //   return [...randomList].map((index) => {
  //     return AMTHAL[index];
  //   });
};
module.exports = { randomMathal, randomTen };

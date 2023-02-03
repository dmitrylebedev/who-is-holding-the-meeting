import ora from 'ora';

const spinner = ora('Loading unicorns').start();

const team = [
    "Vanya 🐼",
    "Dima 🐶",
    "Pasha 🥂",
    "Oksana 👩‍🎨",
    "Ksyusha 🦉"
]

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

setTimeout(() => {
    shuffle(team)

    spinner.succeed(team[0]);
}, 1000);
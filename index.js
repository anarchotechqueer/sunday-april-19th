const express = require('express'); 
const request = require('request');
const chalk = require('chalk');
const talk = chalk.hex("F9CAE0")

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.get('/api/nextOccurrence/', (req, res) => {
  let foundDate = false;
  const targetMonth = 3; // April
  const targetDate = 19; // 19th
  const targetDay = 0; // sunday
  const today = new Date();
  let targetYear = (targetMonth <= today.getMonth() && targetDate <= today.getDate()) ? today.getFullYear() : today.getFullYear() + 1;
  
  let target = new Date();
  
  while (!foundDate) {
    target.setFullYear(targetYear, targetMonth, targetDate);
    if (target.getDay() === targetDay) {
      foundDate = true;
    }
    else {
      ++targetYear;
    }
  }

  let targetText = targetYear === today.getFullYear() ? 'this year!' : `in ${targetYear}`;

  const response = {
    nextOccurrence: targetText
  }

  res.send(response);
});

app.listen(port, () => console.log(talk.bold(`listening on port ${port}`)));
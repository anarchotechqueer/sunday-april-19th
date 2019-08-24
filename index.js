const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const chalk = require('chalk');
const talk = chalk.hex("F9CAE0")

const app = express();
app.use(favicon(__dirname + '/build/logo.png'));
const port = process.env.PORT || 8080;

app.use(express.static(__dirname));

if (process.env.NODE_ENV === "production") {
  const prodPath = 'client/build';

  app.use(express.static(path.join(__dirname, prodPath)));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, prodPath, 'index.html'));
  });  
}

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
import fs from 'node:fs/promises';

const file = await fs.readFile('./challenge_01/message_01.txt', 'utf-8');

const msgArr = file.split(' ');

const wordsArr = [];

for (const word of msgArr) {
   if (!wordsArr.includes(word)) {
      wordsArr.push(word);
   }
}

let result = '';
for (let i = 0; i < wordsArr.length; i++) {
   let count = 0;
   msgArr.forEach(word => {
      if (wordsArr[i] === word) {
         count++;
      }
   })
   result = result + wordsArr[i] + count;
}
console.log(result);

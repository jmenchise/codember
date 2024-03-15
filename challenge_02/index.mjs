import fs from 'node:fs/promises';

const msg = await fs.readFile('challenge_02/message_02.txt', 'utf-8');

const compiler = (text) => {
   let value = 0;
   let result = '';
   for (const ch of text) {
      switch (ch) {
         case '#': {
            value++;
            break;
         }
         case '@': {
            value--;
            break;
         }
         case '*': {
            value *= value;
            break;
         }
         case '&': {
            result += value;
            break;
         }
      }
   }
   return result;
}

const result = compiler(msg);

console.log('result:', result);

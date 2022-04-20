const mypath = require('path');
const fs = require('fs');
const notes = '/users/joe/notes.html'; //linux
const winPath = "C:\Users\vandana_gurram\text.js" // window
console.log(mypath.dirname(notes))//user/joe
console.log(mypath.basename(notes))//
console.log(mypath.extname(notes))// .txt


console.warn(`Iam reading file by readFile method`);
fs.readFile("./.env", 'utf8', (err, data) => {
    if (err) {
        console.error(`error stats ${err}`)
        return
    }
    console.warn(data);
})
const content = 'vandana_gurram'
fs.writeFile('./test.txt', content, { flag: 'a+' }, err => {
    if (err) {
        console.error(err)
        return
    }
    console.log('Added content inside file succefully')
})
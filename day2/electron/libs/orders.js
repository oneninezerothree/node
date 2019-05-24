// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// FE
const $ = require('jquery');
const request = require('request');
// BE
const fs = require('fs');
console.log(fs);
console.log($);


const textarea1 = $('#setCode');
const textarea2 = $('#getCode');

textarea1.on('input', (e) => {
    let code = textarea1.val();
    console.log(code);
    fs.writeFile('./test/test.txt', code, () => {
        console.log(`success`);
    })
})
fs.readFile('../day2.md', (err, data) => {
    console.log(data);
    textarea2.val(data.toString());
})
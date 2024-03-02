const fs = require('fs');

// Create File
fs.writeFileSync("text.txt", 'Hello World');

// Read File
const res = fs.readFileSync('text.txt','utf-8');
console.log(res);

// Update File Name
fs.renameSync('text.txt','UpdateFileName.txt');

// Update File Text
fs.appendFileSync('UpdateFileName.txt', ' Updated Text')

// Updated Read File
const updateText = fs.readFileSync('UpdateFileName.txt','utf-8')
console.log(updateText)

// Delete File 
fs.unlinkSync('UpdateFileName.txt')
#!/usr/bin/env node

const fs = require('fs');
const folder = process.argv[2];

fs.readdir(folder, (err, files) => {
  if (typeof files === 'undefined') {
    return console.log('No files!');
  }

  files.map((file) => fs.readFile(`${folder}/${file}`, handleFile));
});

function handleFile(err, contents) {
  if (err) throw err;
  console.log(contents.toString());
}

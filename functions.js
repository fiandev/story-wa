const path = require('path');

const randomFileTochange = (filesToChange) => {
  let file = filesToChange[Math.floor(Math.random() * filesToChange.length)].name
  if(path.extname(file) !== ".gitignore"){
    return file
  }
  throw "file in /filesToChange not exist!"
}
module.exports = { randomFileTochange }
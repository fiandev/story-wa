const path = require('path');
const cli = process.argv

const randomFileTochange = (filesToChange) => {
  let file = filesToChange[Math.floor(Math.random() * filesToChange.length)].name
  if(path.extname(file) !== ".gitignore"){
    return file
  }
  throw "file in /filesToChange not exist!"
}

const argsExist = (args) => {
  return cli.includes("change", 0)
}
module.exports = { randomFileTochange, argsExist }
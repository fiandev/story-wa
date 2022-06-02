const fs = require("fs")
const path = require('path');

const pathFileStory = "./StoryWa"
const pathFileToChange = "./fileToChange"
const pathStoryWa = "../WhatsApp/Media/.Statuses/"
const filesToChange = fs.readdirSync(pathFileToChange, { withFileTypes: true });
const filesStory = fs.readdirSync(pathStoryWa, { withFileTypes: true });
function randomFileTochange(){
  let file = filesToChange[Math.floor(Math.random() * filesToChange.length)].name
  if(path.extname(file) != ".gitignore"){
    return file
  }
  throw "file in /filesToChange not exist!"
}
filesStory.forEach(file => {
  let filename = file.name
  // khusus gambar
  if (path.extname(filename) == ".jpg" || path.extname(filename) == ".jpeg") {
    let oldPath = `${pathStoryWa}/${filename}`
    let newPath = `${pathFileStory}/${filename}`
    let fileToChange = randomFileTochange()
    // move file di StoryWa
    fs.renameSync(oldPath, newPath)
    // copy and move file di filesToChange
    fs.copyFileSync(`${pathFileToChange}/${fileToChange}`, `${pathStoryWa}/${filename}`)
    console.log(`success copy ${fileToChange} to ${pathStoryWa}\n success move ${filename} to ${pathFileStory}`);
  }
})
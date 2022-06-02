const fs = require("fs")

const pathFileStory = "./StoryWa"
const pathFileToChange = "./fileToChange"
const pathStoryWa = "../WhatsApp/Media/.Statuses/"
const path = require('path');
const filesToChange = fs.readdirSync(pathFileToChange, { withFileTypes: true });
const filesStory = fs.readdirSync(pathStoryWa, { withFileTypes: true });
function randomFileTochange(){
  return filesToChange[Math.floor(Math.random() * filesToChange.length)].name
}
filesStory.forEach(file => {
  let filename = file.name
  // khusus gambar
  if (path.extname(filename) == ".jpg" || path.extname(filename) == ".jpeg") {
    let oldPath = `${pathStoryWa}/${filename}`
    let newPath = `${pathFileStory}/${filename}`
    let fileToChange = randomFileTochange()
    // move file di StoryWa
    fs.rename(oldPath, newPath, (err) => {
      if (err) throw err
    })
    // copy and move file di filesToChange
    fs.copyFile(`${pathFileToChange}/${fileToChange}`, `${pathStoryWa}/${filename}`, (err) => {
      if (err) throw err;
      console.log(`success copy ${fileToChange} to ${StoryWa}\n success move ${filename} to ${pathFileStory}`);
    });
  }
})
const fs = require("fs")
const path = require('path');
const { randomFileTochange } = require("./functions");
const { pathFileStory, pathFileToChange, pathStoryWa } = require("./config");
const filesToChange = fs.readdirSync(pathFileToChange, { withFileTypes: true });
const filesStory = fs.readdirSync(pathStoryWa, { withFileTypes: true });
const filesStoryBackup = fs.readdirSync(pathFileStory, { withFileTypes: true });

const changeStory = () => {
    filesStory.forEach((file, i) => {
      let filename = file.name
      // khusus gambar
      if (path.extname(filename) == ".jpg" || path.extname(filename) == ".jpeg") {
        let oldPath = `${pathStoryWa}/${filename}`
        let newPath = `${pathFileStory}/${filename}`
        let fileToChange = randomFileTochange(filesToChange)
        // move file in StoryWa
        fs.rename(oldPath, newPath, (err) => {
          if (err) throw err
        })
        // copy and move file in filesToChange
       fs.copyFileSync(`${pathFileToChange}/${fileToChange}`, `${pathStoryWa}/${filename}`)
        console.log(`success copy ${fileToChange} to ${pathStoryWa}\n\nsuccess move ${file.name} to ${pathFileStory}`);
      } else {
        if (i == filesStory.length - 1) {
          console.log("run backup before change!");
          process.exit()
        }
      }
  })
}
const backupStory = () => {
   if (filesStoryBackup.length < 2) console.log("run change before backup!");
    filesStoryBackup.forEach(file => {
      let filename = file.name
      // khusus gambar
      if (path.extname(filename) == ".jpg" || path.extname(filename) == ".jpeg") {
        let oldPath = `${pathFileStory}/${filename}`
        let newPath = `${pathStoryWa}/${filename}`
        // move file in pathFileStory
        fs.renameSync(oldPath, newPath)
        console.log(`success backup ${filename} to ${pathStoryWa}`);
      }
  })
}

module.exports = { changeStory, backupStory }
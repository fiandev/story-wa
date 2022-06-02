const { argsExist } = require("./functions")
const { changeStory, backupStory } = require("./controllers");
//console.log(process.argv);
if (argsExist("change")) {
  changeStory()
} else if(argsExist("backup")) {
  backupStory()
} else {
  console.log("arguments cli not exist!");
}
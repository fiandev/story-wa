const cli = process.argv
const { changeStory, backupStory } = require("./controllers");
//console.log(process.argv);
if (cli.includes("change", 0)) {
  changeStory()
} else if(cli.includes("backup", 0)) {
  backupStory()
} else {
  console.log("arguments cli not exist!");
}
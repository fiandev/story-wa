const cli = process.argv
const { changeStory, backupStory } = require("./controllers");
let newPathStoryWa
/* android 10+ */
if (cli.includes("--11", 0)) {
  newPathStoryWa = "../Android/Media/com.WhatsApp/WhatsApp/Media/.Statuses/"
}
if (cli.includes("change", 0)) {
  changeStory(newPathStoryWa)
} else if(cli.includes("backup", 0)) {
  backupStory(newPathStoryWa)
} else {
  console.log("arguments cli not exist!");
}
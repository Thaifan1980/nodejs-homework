const { uploadTasks, downloadTasks } = require("./http");
const { readList, saveList } = require("./file");

const uploadCommand = {
  command: "upload",
  describe: "Upload to server; --upload",
  handler: async () => {
    const taskList = await readList();
    const uploadResult = await uploadTasks(taskList);
    console.log(uploadResult);
  }
};

const downloadCommand = {
  command: "download",
  describe: "Download from server; --download",
  handler: async () => {
    const downloadResult = await downloadTasks();
    console.log(downloadResult);
    await saveList(downloadResult);
    console.log("Done");
  }
};

module.exports = [uploadCommand, downloadCommand];

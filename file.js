const { readFileSync, writeFileSync } = require("fs");

function readList() {
  try {
    const response = readFileSync("./tasks.json", "utf8");
    try {
      return JSON.parse(response);
    } catch (error) {
      console.log(error.message);
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

function saveList(content) {
  try {
    writeFileSync("./tasks.json", JSON.stringify(content), "utf8");
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

module.exports = { saveList, readList };

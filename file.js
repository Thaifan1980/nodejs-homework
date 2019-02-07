function readList() {
  const { readFileSync } = require("fs");
  let tasks;

  try {
    response = readFileSync("./tasks.json", "utf8");
    try {
      tasks = JSON.parse(response);
    } catch (error) {
      console.log(error.message);
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }

  return tasks;
}

function saveList(content) {
  const { writeFileSync } = require("fs");

  try {
    const response = writeFileSync(
      "./tasks.json",
      JSON.stringify(content),
      "utf8"
    );
    return response;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

module.exports = { saveList, readList };

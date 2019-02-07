const axios = require("axios");
const myAxios = axios.create({
  headers: { "Content-Type": "application/json" }
});

async function uploadTasks(task) {
  const response = await myAxios.post(
    "http://api.quuu.linuxpl.eu/todo/agggbylt",
    task
  );
  return response.statusText;
}

async function downloadTasks() {
  const response = await myAxios.get(
    `http://api.quuu.linuxpl.eu/todo/agggbylt`
  );
  return response.data;
}

module.exports = { uploadTasks, downloadTasks };

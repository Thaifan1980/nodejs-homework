const { readList, saveList } = require("./file");

const showAllTaskCommand = {
  command: "showAll",
  describe: "Show task list; --showAll",
  handler: async args => {
    const taskList = await readList();
    console.log(taskList);
  }
};

const addTaskCommand = {
  command: "add",
  describe: "Add task to list; --add",
  handler: async args => {
    const taskList = await readList();
    try {
      let category = args.name.split(" ")[0];
      taskList.push({
        id: taskList.length,
        name: args.name,
        status: "activ",
        category: category
      });
      await saveList(taskList);
      console.log(taskList);
    } catch {
      console.log("Barkuje nazwy zadania");
    }
  }
};

const removeTaskCommand = {
  command: "remove",
  describe: "Remove task from list by id; --remove",
  handler: async args => {
    const taskList = await readList();

    try {
      if (taskList[args.id]) {
        taskList.splice(args.id, 1);
        for (let i = 0; i < taskList.length; i++) {
          taskList[i].id = i;
        }
        await saveList(taskList);
        console.log(taskList);
      } else {
        console.log("Podane ID poza zakresem");
      }
    } catch {
      console.log("Barkuje id zadania lub podałeś niewłaściwy identyfikator");
    }
  }
};

const changeStatusCommand = {
  command: "changeStatus",
  describe: "Change task status from list; --changeStatus",
  handler: async args => {
    const taskList = await readList();

    try {
      if (taskList[args.id].status === "done") {
        taskList[args.id].status = "activ";
      } else {
        taskList[args.id].status = "done";
      }
      await saveList(taskList);
      console.log(taskList);
    } catch {
      console.log("Niewłaściwy identyfikator");
    }
  }
};

const filterCommand = {
  command: "filter",
  describe: "Filter tasks by --status or --category",
  handler: async args => {
    const taskList = await readList();

    try {
      if (typeof args.status !== "undefined") {
        if (args.status === "all") {
          console.log(taskList);
        } else {
          let filteredList = taskList.filter(elem => {
            return elem.status === args.status;
          });
          console.log(filteredList);
        }
      } else if (typeof args.category !== "undefined") {
        let filteredList = taskList.filter(elem => {
          return elem.category === args.category;
        });
        console.log(filteredList);
      }
    } catch {
      console.log("Barkuje danych do filtrowania");
    }
  }
};

module.exports = [
  filterCommand,
  changeStatusCommand,
  removeTaskCommand,
  addTaskCommand,
  showAllTaskCommand
];

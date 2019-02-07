const yargs = require("yargs");

const fileCommands = require("./file.commands");
const httpCommands = require("./http.commands");

fileCommands.forEach(command => yargs.command(command));
httpCommands.forEach(command => yargs.command(command));

yargs.argv;

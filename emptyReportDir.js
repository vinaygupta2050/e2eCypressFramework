const fs = require("fs");
const fs1 = require("fs");
fs1.rmdirSync("./cypress/mochareports/report.json", {recursive: true});
fs.rmdirSync("./cypress/reports/mocha",{recursive: true});
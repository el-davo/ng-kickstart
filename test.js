let tslint = require("tslint");
let options = {
    fix: false,
    formatter: "json",
    rulesDirectory: "customRules/",
    formattersDirectory: "customFormatters/"
};
let linter = new tslint.Linter(options);
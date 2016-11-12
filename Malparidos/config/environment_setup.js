var fs = require('fs')
var file = "config/environment.js"
var sys = require('sys')
var exec = require('child_process').exec;
var env = process.argv[2];


fs.readFile(file, 'utf8', (err,data) => {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/let envPlatform = 'dev'|let envPlatform = 'prod'|let envPlatform = 'staging'/, "let envPlatform = '"+ env +"'");
  console.log('debugger', data)
  fs.writeFile(file, result, 'utf8', (err) => {
     if (err) return console.log(err);
  });
});

let puts = (error, stdout, stderr) => { sys.puts(stdout) }
exec("react-native run-ios", puts);

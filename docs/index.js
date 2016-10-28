var express = require('express')
var router = express.Router();
var ghm = require("github-flavored-markdown")
var fs = require('fs');
var git = require('git-rev');
var gitData = {};
var appData = require('../package.json');

router.get(['/','/:docsPath'], function (req, res, next) {
  var pathToRender = (req.params.docsPath || 'index');

  fs.readFile(`${__dirname}/${pathToRender}.md`, function(err, data) {
    if(err)
      return next();

    const renderData = {
      test:ghm.parse(data.toString()),
      gitData:gitData,
      pathToRender: pathToRender,
      appData: appData
    }
    res.render(`${__dirname}/layout.pug`,renderData)
  })
});

router.use('/assets', express.static(`${__dirname}/assets`));

git.short((str) => {
  gitData.short = str
})

git.branch((str) => {
  gitData.branch = str
})

console.log(`Backend started runing for: ${appData.name}`)
module.exports = router;

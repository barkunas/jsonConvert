process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
process.env.NTBA_FIX_319 = 1;

var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
const fse = require('fs-extra')
const bodyParser = require("body-parser");
var svnUltimate = require('node-svn-ultimate');

var convertPyPath = __dirname + "\\buildBip.py"


console.log(convertPyPath)

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

app.post('/sendjson', (req, res) => {
  var reqJsonData = req.body
  var segment = new Date().getTime()
  //updateSVN();
  setTimeout(() => {
    fse.copySync(__dirname + "\\fla\\tutorial\\segment_1\\", __dirname + "\\temp\\" + segment);
    fse.writeJsonSync(__dirname + '\\temp\\' + segment + '\\rounds_configs.library\\round1_config.json', reqJsonData[0]);
    fse.writeJsonSync(__dirname + '\\temp\\' + segment + '\\rounds_configs.library\\round2_config.json', reqJsonData[1]);
    fse.ensureDirSync(__dirname + "\\public\\results\\" + segment);
    fse.writeJsonSync(__dirname + '\\public\\results\\' + segment + '\\round1_config.json', reqJsonData[0]);
    fse.writeJsonSync(__dirname + '\\public\\results\\' + segment + '\\round2_config.json', reqJsonData[1]);
    buildBipSendAnswer(res, segment)
  }, 2000);
})

const PORT = 3000
app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT);
});


function buildBipSendAnswer(response, segment) {
  const { spawn } = require('child_process');
  const pyProg = spawn('python', [convertPyPath, '\\temp\\' + segment + '\\rounds_configs.fla', segment]);
  pyProg.stdout.on('data', function (data) {
    console.log(data.toString());
  });
  pyProg.stdout.on('close', function (data) {
    response.send('{"segment":' + segment + '}')
    fse.removeSync(__dirname + "\\temp\\" + segment)
    console.log('Build is done '+new Date());
  });
  pyProg.stderr.on('data', (data) => {
    console.log(`errordata-----\n` + data.toString());
    response.send('{"isDoneBuild":false}')
  });
}


function updateSVN() {
  svnUltimate.commands.update(__dirname + "\\fla\\tutorial\\", {},
    function (err) {
      console.log(err);
    });
}


module.exports = app;




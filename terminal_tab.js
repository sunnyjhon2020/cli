var exec = require('child_process').exec;
var os = require('os');
var child;

 function openTab(cmd, cb) {
  if (os.platform() !== 'darwin') {
    throw new Error('No support for this operating system but feel free to fork the repo and add it :)');
  }

  var open = ['osascript -e \'tell application "Terminal" to activate\' ',
           '-e \'tell application "System Events" to tell process "Terminal" to keystroke "t"',
           'using command down\' ',
           '-e \'tell application "Terminal" to do script',
           '"', cmd, '"',
           'in selected tab of the front window\''].join('');

  child = exec(open, function(error) {
    if (error) {
      throw error;
    }

    if (cb && typeof cb === 'function') {
      cb.call(null, arguments);
    }

  });
}

process.stdin.setEncoding('utf8');

module.exports = {
  open: openTab
};
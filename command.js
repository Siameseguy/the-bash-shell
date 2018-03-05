// var exports = module.exports = {};

exports.getPwd = function(cmd) {
  if (cmd === 'pwd') {
    process.stdout.write(process.cwd())
  }
}

exports.getDate = function(cmd) {
  if (cmd === 'date') {
    var date = new Date()
    process.stdout.write(String(date))
  }
}

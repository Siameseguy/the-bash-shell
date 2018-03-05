var fs = require('fs')

module.exports = {
  getPwd: function(cmd) {
    if (cmd === 'pwd') {
      process.stdout.write(process.cwd())
    }
  },

  getDate: function(cmd) {
    if (cmd === 'date') {
      var date = new Date()
      process.stdout.write(String(date))
    }
  },

  getLs: function(cmd) {
    if (cmd === 'ls') {
      fs.readdir('.', function(err, files) {
        if (err) throw err
        files.forEach(function(file) {
          process.stdout.write(file.toString() + '\n')
        })
        process.stdout.write('prompt > ')
      })
    }
  },

  echo: function(cmd, str) {
  	if (cmd === 'echo') {
  		process.stdout.write(str);
  	}
  }

}

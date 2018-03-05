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
      process.stdout.write(str)
    }
  },

  getCat: function(cmd, str) {
    if (cmd === 'cat') {
      fs.readdir('.', function(err, files) {
        if (err) throw err
        files.forEach(function(file) {
          if (file === str) {
            fs.readFile('./' + str, 'utf8', function(err, contents) {
              process.stdout.write(contents.toString() + '\n')
            })
          }
          process.stdout.write('prompt > ')
        })
      })
    }
  },

  getHead: function(cmd, str) {
    if (cmd === 'head') {
      fs.readdir('.', function(err, files) {
        if (err) throw err
        files.forEach(function(file) {
          if (file === str) {
            fs.readFile('./' + str, 'utf8', function(err, contents) {
           	  var fullContentArr = (contents.toString() + '\n').split('\n');
           	  var firstFiveLines = fullContentArr.slice(0, 5).join('\n');
           	  // console.log(fullContentArr);
              process.stdout.write(firstFiveLines);
            })
          }
          process.stdout.write('prompt > ')
        })
      })
    }
  },

  getTail: function(cmd, str) {
    if (cmd === 'tail') {
      fs.readdir('.', function(err, files) {
        if (err) throw err
        files.forEach(function(file) {
          if (file === str) {
            fs.readFile('./' + str, 'utf8', function(err, contents) {
           	  var fullContentArr = (contents.toString() + '\n').split('\n');
           	  var lastFiveLines = fullContentArr.slice(fullContentArr.length - 6, fullContentArr.length).join('\n');
           	  // console.log(fullContentArr);
              process.stdout.write(lastFiveLines);
            })
          }
          process.stdout.write('prompt > ')
        })
      })
    }
  }

}

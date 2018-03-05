//console.log(process)
//console.log(Object.keys(process))
// console.log('stdin', process.stdin)
// console.log('stdout', process.stdout)
// process.stdout.write('prompt > ')

var command = require('./command.js')

// Output a prompt
process.stdout.write('prompt > ')

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  // get file path
  var dataString = String(data).trim()
  var inputArr = dataString.split(' ')
  var cmd = inputArr[0].toString().trim() // remove the newline
  var str = inputArr.slice(1).join(' ')

  command.getPwd(cmd)
  command.getDate(cmd)
  command.getLs(cmd)
  command.echo(cmd, str)
  command.getCat(cmd, str)

  //process.stdout.write('You typed: ' + cmd)
  process.stdout.write('\nprompt > ')
})

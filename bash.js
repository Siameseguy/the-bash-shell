//console.log(process)
//console.log(Object.keys(process))
// console.log('stdin', process.stdin)
// console.log('stdout', process.stdout)
// process.stdout.write('prompt > ')

// Output a prompt
process.stdout.write('prompt > ')

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function(data) {
  // get file path
  var cmd = data.toString().trim() // remove the newline
  if (cmd === 'pwd') {
    process.stdout.write(process.cwd())
  }
  // get date
  if (cmd === 'date') {
    var date = new Date()
    process.stdout.write(String(date))
  }

  //process.stdout.write('You typed: ' + cmd)
  process.stdout.write('\nprompt > ')
})

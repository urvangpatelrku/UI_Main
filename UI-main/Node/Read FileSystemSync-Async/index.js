var fs = require('fs');

data = fs.readFileSync('test.txt')

console.log(data.toString())
console.log('Reading Completed')
const fs = require('fs')

console.log('\nAbriendo Archivo... \n')

let content = fs.readFileSync('file.txt', 'utf8')

console.log(content)

console.log('\nHaciendo otra cosa\n')
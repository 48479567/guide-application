const fs = require('fs')

console.log('\nAbriendo Archivo...\n')

let content = fs.readFile('file.txt', 'utf8', (err, content) => {
  if (err) console.log(err)
  console.log(content)
})

console.log('\nHaciendo otra cosa\n')